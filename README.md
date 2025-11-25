# 🌱 CropWatch - AI-Powered Crop Disease Detection

<div align="center">
  <img src="https://img.shields.io/badge/Status-Development-yellow" alt="Status: Development">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License: MIT">
  <img src="https://img.shields.io/badge/Version-1.0.0-green" alt="Version: 1.0.0">
</div>

## 🚀 Overview

**CropWatch** is an innovative AI-powered solution designed to help farmers detect crop diseases early, providing actionable insights to prevent yield loss and financial setbacks. Our system combines cutting-edge machine learning with environmental data analysis to deliver accurate, real-time disease detection and treatment recommendations.

## ✨ Features

### 🌾 Core Functionality
- **AI-Powered Disease Detection** - Utilizes TensorFlow.js for browser-based inference
- **Comprehensive Disease Database** - Identifies 10+ common crop diseases
- **Real-time Analysis** - Get instant results with confidence scoring
- **Environmental Integration** - Considers temperature, humidity, and soil conditions
- **Severity Assessment** - Classifies disease impact as Low/Medium/High

### 📊 Advanced Capabilities
- **Interactive Heatmap Visualization** - Highlights affected leaf areas
- **AI-Generated Recommendations** - Personalized treatment plans including organic alternatives
- **Yield Impact Estimation** - Projects potential crop and financial savings
- **Comprehensive PDF Reports** - Downloadable analysis and recommendations
- **Prediction History** - Tracks and displays last 5 predictions

## 🛠 Tech Stack

### Frontend
- **Framework**: React.js with TypeScript
- **UI Library**: Material-UI (MUI)
- **State Management**: Redux Toolkit
- **AI/ML**: TensorFlow.js
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Authentication**: JWT
- **Database**: MongoDB
- **Cloud Storage**: AWS S3

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB Atlas account (for cloud database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VivekGoudAdula/AVISHKAR-AVS302.git
   cd AVISHKAR-AVS302
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env with your configuration
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Update .env with your configuration
   ```

4. **Start the development servers**
   ```bash
   # In the backend directory
   npm run dev
   
   # In a new terminal, from the frontend directory
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📱 Mobile Responsiveness

CropWatch is fully responsive and works seamlessly across all device sizes, from mobile phones to desktop computers.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## 📧 Contact

For any queries or support, please contact [your-email@example.com](mailto:your-email@example.com)

## 🙏 Acknowledgments

- [TensorFlow.js](https://www.tensorflow.org/js) for making ML accessible in the browser
- [Material-UI](https://mui.com/) for the beautiful UI components
- All the amazing open-source projects that made this possible

---

<div align="center">
  Made with ❤️ by Team CropWatch
</div>
