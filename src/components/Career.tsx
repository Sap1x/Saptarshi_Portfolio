import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Codec Technologies</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed backend services for AI-driven healthcare and predictive analytics systems using Python, TensorFlow, and NLP, improving model accuracy by 15% while supporting large-scale user traffic.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI & ML)</h4>
                <h5>Adamas University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Expected Graduation: 08/2027. Current SGPA: 8.69. Focusing on Data Structures & Algorithms, OOP, System Design, and building scalable backend/distributed systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Team Leader</h4>
                <h5>Smart India Hackathon (SIH)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Nominated Team Leader (CodeX); led the design and presentation of NexGeN, an NLP and document-intelligence-based solution addressing real-world societal challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
