import { useRef } from "react";

const Work = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  /* =========================
     🔥 REAL PROJECT DATA
     ========================= */
  const projects = [
    {
      title: "SyntexHub Encrypted Chat App",
      description:
        "Real-time encrypted chat application with secure communication protocols.",
      tech: ["React", "Node.js", "WebSockets", "Encryption"],
      github: "https://github.com/Abhiimaurya0080/syntexhub_Encrypted_chat_app",
    },
    {
      title: "Encrypted File Transfer System",
      description:
        "Secure file transfer with encryption and protected storage mechanism.",
      tech: ["Python", "Encryption", "File Handling"],
      github: "https://github.com/Abhiimaurya0080/Encrypted_file_transfer_-_secure_storage",
    },
    {
      title: "Bug Bounty Toolkit",
      description:
        "Toolkit for vulnerability detection and ethical hacking automation.",
      tech: ["Python", "Security Tools"],
      github: "https://github.com/Abhiimaurya0080/h4cker_bug-bounty",
    },
    {
      title: "Port Scanner",
      description:
        "Network scanner to identify open ports and analyze vulnerabilities.",
      tech: ["Python", "Sockets", "Networking"],
      github: "https://github.com/Abhiimaurya0080/Syntecxhub_port_scanner",
    },
  ];

  /* =========================
     SLIDER BUTTONS (NATIVE SCROLL)
     ========================= */
  const nextSlide = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.9 : 600;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.9 : 600;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  /* =========================
     UI
     ========================= */
  return (
    <div className="work-section" id="projects">
      {/* INJECTED STYLES TO REPLACE Work.css */}
      <style>{`
        .work-section {
          padding: 100px 5%;
          background-color: #0f172a;
          color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 10;
        }
        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
        .work-section h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .work-slider-controls {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }
        .slider-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slider-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #38bdf8;
        }
        .work-flex {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
          padding-bottom: 40px;
          scroll-behavior: smooth;
        }
        .work-flex::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        .work-box {
          min-width: calc(100% - 20px);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          scroll-snap-align: start;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .work-box:hover {
          border-color: rgba(56, 189, 248, 0.3);
        }
        @media(min-width: 768px) {
          .work-box {
            min-width: 550px;
            max-width: 600px;
          }
        }
        .work-title {
          display: flex;
          align-items: flex-start;
          gap: 25px;
          margin-bottom: 30px;
        }
        .work-title h3 {
          font-size: 3.5rem;
          color: rgba(255, 255, 255, 0.1);
          margin: 0;
          font-weight: 800;
          line-height: 1;
        }
        .work-title h4 {
          font-size: 1.5rem;
          margin: 0 0 8px 0;
          color: #f8fafc;
        }
        .work-title p {
          color: #38bdf8;
          margin: 0;
          font-weight: 500;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .work-info > h4 {
          font-size: 1.1rem;
          margin-bottom: 15px;
          color: #cbd5e1;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .work-info > p {
          color: #94a3b8;
          line-height: 1.7;
          font-size: 1.05rem;
          margin-bottom: 2rem;
        }
        .project-link {
          display: inline-block;
          color: #38bdf8;
          text-decoration: none;
          font-weight: 600;
          border: 1px solid #38bdf8;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          align-self: flex-start;
          margin-top: auto;
        }
        .project-link:hover {
          background: rgba(56, 189, 248, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.2);
        }
      `}</style>

      <div className="work-container section-container">
        <h2>Projects</h2>

        <div className="work-slider-controls">
          <button className="slider-btn" onClick={prevSlide} aria-label="Previous project">‹</button>
          <button className="slider-btn" onClick={nextSlide} aria-label="Next project">›</button>
        </div>

        <div className="work-flex" ref={scrollContainerRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.tech.join(" • ")}</p>
                  </div>
                </div>

                <h4>Overview</h4>
                <p>{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
