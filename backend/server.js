require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const path = require('path');
const fs = require('fs');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Initialize Google's Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Process image with Gemini 2.0 Flash
async function processImageWithGemini(imagePath) {
  try {
    // For Gemini 2.0 Flash, we'll use the default model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    // Read image file
    const imageData = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(imagePath)).toString('base64'),
        mimeType: 'image/jpeg' // Adjust based on actual image type
      }
    };

    const prompt = "Analyze this image and provide detailed information about its contents.";
    
    const result = await model.generateContent([prompt, imageData]);
    const response = await result.response;
    
    return response.text();
  } catch (error) {
    console.error('Error processing image with Gemini:', error);
    throw new Error('Failed to process image with Gemini');
  }
}

// Upload and process image endpoint
app.post('/api/process-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const imagePath = req.file.path;
    
    // Process the image with Gemini
    const analysis = await processImageWithGemini(imagePath);
    
    // Clean up the uploaded file
    fs.unlinkSync(imagePath);
    
    res.json({ 
      success: true, 
      analysis,
      message: 'Image processed successfully' 
    });
    
  } catch (error) {
    console.error('Error in /api/process-image:', error);
    
    // Clean up the uploaded file in case of error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Error processing image' 
    });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Gemini Image Processor API is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
