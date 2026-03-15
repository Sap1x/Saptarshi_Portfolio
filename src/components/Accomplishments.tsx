import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdEmojiEvents, MdMenuBook } from "react-icons/md";
import "./styles/Accomplishments.css";

gsap.registerPlugin(ScrollTrigger);

const Accomplishments = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom bottom",
        },
      });

      tl.fromTo(
        ".section-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.3 }
      ).fromTo(
        ".accomplishment-box",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="accomplishments-section section-container" id="accomplishments" ref={sectionRef}>
      <div className="accomplishments-container" ref={containerRef}>
        <h2>
          Publications <span>&</span>
          <br /> Achievements
        </h2>

        <div className="accomplishments-info">
          <div className="accomplishment-group">
            <h3 className="section-title">
              <MdMenuBook className="section-icon" /> Publications
            </h3>
            <div className="accomplishments-list">
              <div className="accomplishment-box">
                <p>
                  <strong>S. Das, B. Pradhan, S. Mondal, S. Halder, S. Gupta.</strong> Enhancing Object Identification Using Deep Learning Algorithms for Assisting Disabled Individuals. <em>Lecture Notes in Networks and Systems, Springer, 2025.</em>
                </p>
              </div>
              <div className="accomplishment-box">
                <p>
                  <strong>S. Mondal, S. Das, S. Halder.</strong> Integrating Deep Learning-Based Object Detection into Assistive Systems for Dynamic Accessibility Challenges. <em>Accepted — IEEE SISIMPACT International Conference, 2025.</em>
                </p>
              </div>
              <div className="accomplishment-box">
                <p>
                  <strong>Saptarshi Mondal et al.,</strong> Enhancing Deep Learning Models for Soil Health Assessment and Micronutrient Optimization in Sustainable Agriculture. <em>Accepted — 9th International Conference on EAIT 2026, CSI Kolkata Chapter, and for publication in Springer (LNNS), January 2026.</em>
                </p>
              </div>
            </div>
          </div>

          <div className="accomplishment-group">
            <h3 className="section-title">
              <MdEmojiEvents className="section-icon" /> Achievements
            </h3>
            <div className="accomplishments-list">
              <div className="accomplishment-box">
                <p>
                  Secured <strong>7th rank</strong> in Data Structures & Algorithms Competition, CAPE Laboratory, IIT Kharagpur (2025).
                </p>
              </div>
              <div className="accomplishment-box">
                <p>
                  <strong>Oracle Cloud Infrastructure 2025 Certified Developer Professional</strong>
                  <br />
                  <a href="#" className="accomplishment-link">
                    Credential ID: 102958533OCID25CP
                  </a>
                </p>
              </div>
              <div className="accomplishment-box">
                <p>
                  <strong>Smart India Hackathon (SIH) 2024:</strong> Nominated Team Leader (CodeX) at Adamas University; led the design and presentation of NexGeN, an NLP- and document-intelligence–based solution addressing real-world societal challenges, highlighting leadership, collaboration, and innovation.{" "}
                  <a href="#" className="accomplishment-link" style={{ marginLeft: "10px" }}>
                    [Link]
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
