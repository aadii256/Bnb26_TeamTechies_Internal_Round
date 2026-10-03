# 🚀 CreatorAI — AI-Powered Creator Operating Platform

> **Transform raw content into engaging, platform-ready short-form content with AI-assisted analysis.**

CreatorAI is an AI-powered creator operating platform designed to help content creators turn raw videos and scripts into engaging short-form content.

The platform analyzes the creator's script, identifies potentially important moments, generates hooks and captions, suggests platform-specific adaptations, and allows the creator to preview and generate a short video clip.

---

## 🎯 Problem Statement

Content creators spend significant time:

- Finding the most valuable moments from long videos
- Writing engaging hooks
- Creating captions
- Adapting content for different social media platforms
- Manually creating short-form clips

This process can be repetitive and time-consuming.

**CreatorAI aims to bring these activities into a single creator-focused workflow while keeping the creator in control of the final content.**

---

## 💡 Our Solution

CreatorAI provides a unified workflow:

```text
Raw Video + Script
        ↓
   AI Analysis
        ↓
 ┌───────────────┐
 │ Important     │
 │ Moments       │
 │ Hooks         │
 │ Captions      │
 │ Platform      │
 │ Adaptations   │
 └───────────────┘
        ↓
 Select Important Moment
        ↓
 Generate Short Clip
        ↓
 Preview / Download


✨ Key Features
📹 1. Video Upload

Upload a raw video directly through the CreatorAI dashboard.

📝 2. Script Input

Creators can paste their script or content transcript for analysis.

🤖 3. AI-Assisted Content Analysis

The platform analyzes the provided content and extracts useful information such as:

Content topic
Word count
Important sentences
Potential high-value moments
Engagement scores
🎣 4. Hook Generation

CreatorAI generates multiple potential hooks that can be used to capture audience attention.

⭐ 5. Important Moment Detection

The system identifies potentially valuable moments from the provided script and assigns an engagement score.

📱 6. Platform Adaptation

Content recommendations are provided for:

YouTube Shorts
Instagram Reels
TikTok
✍️ 7. Caption Generation

CreatorAI generates a ready-to-use social media caption based on the analyzed content.

🎬 8. Short Clip Generation

Creators can select an important moment and generate a short video clip directly in the browser.

👀 9. Video Preview

Creators can preview the selected content and generated clip before downloading.

⬇️ 10. Export

Generated clips can be downloaded for further editing or publishing.

🖥️ Application Workflow
Step 1 — Upload Content

Upload the raw video and provide the corresponding script.

Step 2 — Analyze

Click "Analyze with AI".

CreatorAI processes the script and generates:

Hooks
Important moments
Engagement scores
Platform adaptations
Caption
Step 3 — Select a Moment

Choose an important moment identified by the system.

Step 4 — Generate Clip

CreatorAI generates a short clip from the selected section.

Step 5 — Preview and Download

Preview the generated clip and download it for further use.

🛠️ Technology Stack
Frontend
React
Vite
JavaScript
HTML5
CSS3
Backend
Python
FastAPI
Uvicorn
Video Processing
HTML5 Video API
MediaRecorder API
Browser-based video processing
Development Tools
Visual Studio Code
Git
GitHub
🏗️ Project Structure
CreatorAI/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── ai-service/
│   ├── main.py
│   └── requirements.txt
│
├── docs/
│
└── README.md
⚙️ Installation & Setup
Prerequisites

Make sure the following are installed:

Node.js
npm
Python 3
Git
🚀 Run the Backend

Open a terminal and navigate to the backend:

cd ai-service

Create/activate the virtual environment:

Windows PowerShell
venv\Scripts\Activate.ps1

Install dependencies:

pip install -r requirements.txt

Start the FastAPI server:

uvicorn main:app --reload --port 8000

Backend will run at:

http://localhost:8000
🌐 Run the Frontend

Open a second terminal:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application:

http://localhost:5173
🧠 AI Analysis Engine

The current hackathon MVP uses a lightweight intelligent analysis engine to demonstrate the core CreatorAI workflow.

The engine performs tasks such as:

Sentence analysis
Keyword identification
Topic extraction
Important moment scoring
Hook generation
Caption generation
Platform-specific recommendations

This approach allows the prototype to run locally without requiring an external AI API key.

Future versions can integrate advanced LLMs, speech-to-text models, and multimodal video understanding models for deeper video analysis.

🎬 Video Processing

CreatorAI uses browser-native video capabilities for the MVP.

The application uses:

HTML5 Video
      +
captureStream()
      +
MediaRecorder API

This allows selected portions of uploaded videos to be captured and generated as short clips without requiring a separate FFmpeg installation.

🔮 Future Scope

CreatorAI can be extended with:

🎙️ Automatic speech-to-text transcription
🧠 Advanced multimodal video understanding
🤖 LLM-powered content analysis
🎯 AI-based audience engagement prediction
✂️ Automatic multi-clip generation
🔤 Automatic subtitles
📐 Automatic 9:16 vertical conversion
🎨 AI-generated thumbnails
🗣️ AI voice-over generation
📊 Creator analytics dashboard
📅 Content scheduling
📱 Direct social media publishing
☁️ Cloud storage and processing
👥 Multi-user creator workspaces
🔐 Creator-in-Control Philosophy

CreatorAI is designed as an AI-assisted platform rather than a fully automated publishing system.

The creator remains in control of:

Which moments to use
Which hooks to select
Which platform to target
Which clip to export
Final editing and publishing decisions

AI provides suggestions and automation while the creator makes the final decision.

🏆 Hackathon MVP

This project was developed as a hackathon MVP to demonstrate the core concept of an AI-powered creator operating platform.

The prototype focuses on demonstrating the complete workflow:

Upload
  ↓
Analyze
  ↓
Discover
  ↓
Adapt
  ↓
Generate
  ↓
Preview
  ↓
Export
👥 Team
TeamTechies

Team Members:

Member 1 — Frontend & UI
Member 2 — AI & Video Processing
📌 Project Status

🟢 Hackathon MVP — Functional Prototype

The current version demonstrates the core CreatorAI workflow with local processing and browser-based clip generation.
