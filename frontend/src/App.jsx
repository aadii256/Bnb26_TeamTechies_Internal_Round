import { useState } from "react";
import "./App.css";

function App() {
  const [video, setVideo] = useState(null);
  const [script, setScript] = useState("");

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <h1>CreatorAI</h1>

        <nav>
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Analytics</div>
        </nav>

        <div className="sidebar-bottom">
          <div className="nav-item">Settings</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">

        {/* Header */}
        <header className="topbar">
          <div>
            <h2>Creator Dashboard</h2>
            <p>
              Turn your raw content into engaging short-form videos.
            </p>
          </div>

          <button className="create-btn">
            + New Project
          </button>
        </header>

        {/* Welcome */}
        <section className="welcome">
          <h2>Welcome to CreatorAI 👋</h2>

          <p>
            Upload your video and script. Let AI discover the best moments,
            generate hooks and prepare your content for multiple platforms.
          </p>
        </section>

        {/* Upload Section */}
        <section className="upload-grid">

          {/* Video Upload */}
          <div className="card">
            <h3>🎥 Upload Video</h3>

            <label className="upload-box">

              <span className="upload-icon">↑</span>

              <strong>
                {video ? video.name : "Choose your video"}
              </strong>

              <small>
                MP4, MOV or WebM
              </small>

              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
              />

            </label>
          </div>

          {/* Script */}
          <div className="card">
            <h3>📝 Add Script</h3>

            <textarea
              placeholder="Paste your video script here..."
              value={script}
              onChange={(e) => setScript(e.target.value)}
            />

            <div className="character-count">
              {script.length} characters
            </div>
          </div>

        </section>

        {/* AI Analysis */}
        <section className="analysis-card">

          <div>
            <h3>✨ AI Content Analysis</h3>

            <p>
              AI will identify important moments, generate hooks,
              captions and platform-specific content.
            </p>
          </div>

          <button className="analyze-btn">
            Analyze with AI →
          </button>

        </section>

        {/* Features */}
        <section className="features">

          <h2>What CreatorAI can do</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Important Moments</h3>
              <p>
                Automatically identify high-value moments from your content.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>AI Hooks</h3>
              <p>
                Generate attention-grabbing hooks for your videos.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✂️</div>
              <h3>Smart Clips</h3>
              <p>
                Turn important moments into short-form video clips.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Platform Adaptation</h3>
              <p>
                Prepare content for YouTube Shorts, Instagram and TikTok.
              </p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;