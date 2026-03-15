const TechStack = () => {
  const techCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "SQL", "C"]
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "Node.js", "Express.js", "SpringBoot", "gRPC", "WebSockets", "WebRTC", "REST APIs"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3"]
    },
    {
      title: "Cloud & Containers",
      skills: ["Docker", "Kubernetes (GKE)", "CI/CD", "Azure"]
    },
    {
      title: "Data & Messaging",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Firebase", "CDNs"]
    },
    {
      title: "Architecture & Integrations",
      skills: ["Event-Driven Architecture", "System Design", "GeoHashing", "Google Maps/Mapbox", "JWT", "Stripe", "PayPal", "UPI"]
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "NLP Pipelines", "LSTM/GRU"]
    }
  ];

  return (
    <div className="techstack-wrapper">
      <div className="techstack">
        <h2> My Techstack</h2>
      </div>

      <div className="tech-details-container">
        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3>{category.title}</h3>
              <div className="tech-tags-container">
                {category.skills.map((skill, i) => (
                  <span key={i} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
