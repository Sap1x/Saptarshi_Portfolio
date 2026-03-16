import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Uber-Inspired Live Tracking",
    category: "Real-Time Ride Dispatch & Live Tracking System",
    date: "Dec 2025 – Present",
    description: "ETA-based driver matching (availability-aware, not distance-based) combined with GeoHash spatial indexing to reduce matching complexity from O(N) to O(k), enabling low-latency assignment at city scale.",
    details: [
      "Architected a polyglot, event-driven backend with Python (FastAPI + WebSockets) for per-second GPS streaming and Java (gRPC) for ride lifecycle and payments.",
      "Implemented Uber-like live tracking with smooth client-side interpolation of driver movement.",
      "Integrated Cash, PayPal, and UPI payments with observability (structured logs, match latency, ETA accuracy)."
    ],
    tools: "WebSockets, Java (gRPC), FastAPI, Python, GeoHash, PostgreSQL, Redis",
    image: "/images/uber_tracking.png",
    github: "https://github.com/Sap1x/Uber_GeoHashing_ETA"
  },
  {
    title: "Swastha AI",
    category: "AI-Powered Healthcare Consultation System",
    date: "Nov 2025 – Jan 2026",
    description: "A scalable telemedicine platform supporting 10K+ concurrent users, enabling secure real-time chat and video consultations using WebRTC and Kafka-based asynchronous pipelines.",
    details: [
      "Built and integrated an AI-driven symptom triage service using BioBERT + TensorFlow, achieving 93% accuracy.",
      "Implemented production-grade security (JWT, OAuth 2.0, AES-256, Twilio OTP).",
      "Deployed on Docker + Kubernetes (GKE) with CI/CD, maintaining 99.99% service availability."
    ],
    tools: "Python, FastAPI, WebRTC, Kafka, BioBERT, TensorFlow, Docker, K8s",
    image: "/images/swastha_ai.png",
    github: "https://github.com/Sap1x/Swastha-AI-"
  },
  {
    title: "Subway Surfer Gesture Control",
    category: "Computer Vision & Game Control",
    date: "Jul 2025 – Aug 2025",
    description: "Control Subway Surfer using hand gestures in real-time! Uses OpenCV for webcam input, MediaPipe for hand tracking, and PyAutoGUI to simulate keyboard inputs.",
    details: [
      "Real-time hand gesture recognition for navigation (Left, Right, Jump, Crouch).",
      "Low-latency processing ensuring responsive gameplay.",
      "Seamless integration with browser-based and desktop games."
    ],
    tools: "Python, OpenCV, MediaPipe, PyAutoGUI",
    image: "/images/subway_gesture.png",
    github: "https://github.com/Sap1x/SubwaySurferGesture"
  },
  {
    title: "Euphony – AI Music Player",
    category: "AI-Powered Music Player",
    date: "Associated with Adamas University",
    description: "A next-generation music player delivering a seamless and intelligent audio experience, featuring AI-based recommendation algorithms that analyze genre preferences, mood, and listening history.",
    details: [
      "AI-powered music recommendations based on genre, mood, and user history.",
      "High-quality audio playback and playlist management with real-time search.",
      "Elegant UI with intuitive controls and dynamic themes."
    ],
    tools: "React Native, TypeScript, ML Frameworks, Node.js",
    image: "/images/euphony_player.png",
    github: ""
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                        <span className="project-date">{project.date}</span>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="project-description">{project.description}</p>
                        <ul className="project-details-list">
                          {project.details.map((detail, dIndex) => (
                            <li key={dIndex}>{detail}</li>
                          ))}
                        </ul>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="github-link"
                            data-cursor="disable"
                          >
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
