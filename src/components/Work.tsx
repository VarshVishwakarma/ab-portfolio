import "./styles/Work.css";
import { useEffect, useRef } from "react";

const Work = () => {
  const flexRef = useRef<HTMLDivElement>(null);

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
     ⚡ GSAP SCROLL (SAFE LOAD)
     ========================= */
  useEffect(() => {
    const initAnimation = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      let translateX = 0;

      const setTranslateX = () => {
  const flexContainer = flexRef.current;
  if (!flexContainer) return;

  // Total scrollable width minus viewport
  translateX = flexContainer.scrollWidth - window.innerWidth;

  // Add extra buffer so last cards fully appear
  translateX += 100;

  // Safety check
  if (translateX < 0) translateX = 0;
};

      setTranslateX();

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "projects",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    };

    // Dynamic GSAP load (fixes Vercel issues)
    if (!(window as any).gsap) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      script.onload = () => {
        const stScript = document.createElement("script");
        stScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        stScript.onload = initAnimation;
        document.head.appendChild(stScript);
      };
      document.head.appendChild(script);
    } else {
      initAnimation();
    }

    return () => {
      const ScrollTrigger = (window as any).ScrollTrigger;
      ScrollTrigger?.getById("projects")?.kill();
    };
  }, []);

  /* =========================
     🎯 SLIDER CONTROLS
     ========================= */
  const nextSlide = () => {
    const scrollAmount = window.innerWidth * 0.8 + 32;
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  };

  const prevSlide = () => {
    const scrollAmount = window.innerWidth * 0.8 + 32;
    window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
  };

  /* =========================
     UI
     ========================= */
  return (
    <div className="work-section" id="projects">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="work-slider-controls">
          <button onClick={prevSlide} className="slider-btn">
            ‹
          </button>
          <button onClick={nextSlide} className="slider-btn">
            ›
          </button>
        </div>

        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>

                    <p className="tech-stack">
                      {project.tech.join(" • ")}
                    </p>
                  </div>
                </div>

                <h4>Overview</h4>
                <p>{project.description}</p>

                {/* 🔥 GitHub CTA */}
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
