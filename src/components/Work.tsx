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
     GSAP SCROLL
     ========================= */
  useEffect(() => {
    const initAnimation = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      let translateX = 0;

      function setTranslateX() {
        const flexContainer = flexRef.current;
        if (!flexContainer) return;

        const offsetLeft = flexContainer.getBoundingClientRect().left;
        
        // Calculate the total distance needed to scroll to the end of the flex container.
        // We take the full scrollable width, subtract the viewport width, 
        // add the initial left offset, and add a little extra padding (60px) for the end.
        translateX = flexContainer.scrollWidth - window.innerWidth + offsetLeft + 60;
        
        // Failsafe to ensure it doesn't scroll backwards if the screen is massive
        if (translateX < 0) translateX = 0;
      }

      setTranslateX();

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    };

    // Dynamically load GSAP so it bypasses bundler resolution errors
    if (!(window as any).gsap) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      script.onload = () => {
        const stScript = document.createElement("script");
        stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        stScript.onload = initAnimation;
        document.head.appendChild(stScript);
      };
      document.head.appendChild(script);
    } else {
      initAnimation();
    }

    return () => {
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (ScrollTrigger) {
        ScrollTrigger.getById("work")?.kill();
      }
    };
  }, []);

  /* =========================
     SLIDER BUTTONS
     ========================= */
  const nextSlide = () => {
    // Calculates the approximate width of one card + the gap (2rem = 32px)
    const scrollAmount = (window.innerWidth * 0.8) + 32;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    const scrollAmount = (window.innerWidth * 0.8) + 32;
    window.scrollBy({
      top: -scrollAmount,
      behavior: "smooth",
    });
  };

  /* =========================
     UI
     ========================= */
  return (
    <div className="work-section" id="work">
      <style>{`
        .work-section { overflow: hidden; background: #111; color: #fff; padding: 50px 0; min-height: 100vh; font-family: sans-serif; }
        .section-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .work-flex { display: flex; flex-wrap: nowrap; width: max-content; gap: 2rem; padding: 2rem 0; }
        .work-box { width: 80vw; max-width: 500px; background: #222; padding: 2rem; border-radius: 12px; transition: transform 0.3s ease; border: 1px solid rgba(255, 255, 255, 0.05); }
        .work-box:hover { transform: translateY(-5px); border-color: rgba(255, 255, 255, 0.1); }
        
        .work-slider-controls { margin-top: 1.5rem; display: flex; gap: 1rem; }
        .slider-btn { 
          background: rgba(255, 255, 255, 0.05); 
          color: #fff; 
          border: 1px solid rgba(255, 255, 255, 0.1); 
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer; 
          border-radius: 50%; 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }
        .slider-btn:hover { 
          background: rgba(255, 255, 255, 0.15); 
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        .slider-btn:active {
          transform: translateY(0) scale(0.95);
        }
        .slider-btn svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
        }

        .project-link { color: #4facfe; text-decoration: none; font-weight: bold; transition: color 0.2s; }
        .project-link:hover { color: #00f2fe; text-decoration: underline; }
        h2 { font-size: 2.5rem; margin-bottom: 0; }
        h3 { color: #555; font-size: 3rem; margin: 0 0 1rem 0; font-weight: 800; letter-spacing: -2px; }
        h4 { margin-top: 0; margin-bottom: 0.5rem; font-size: 1.2rem; }
        p { color: #aaa; line-height: 1.6; }
      `}</style>
      <div className="work-container section-container">
        <h2>Projects</h2>

        <div className="work-slider-controls">
          <button className="slider-btn" onClick={prevSlide} aria-label="Previous Project">
            <svg viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="slider-btn" onClick={nextSlide} aria-label="Next Project">
            <svg viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4 style={{ color: "#fff" }}>{project.title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "#4facfe" }}>
                      {project.tech.join(" • ")}
                    </p> 
                  </div>
                </div>

                <h4 style={{ marginTop: "1.5rem", color: "#ddd" }}>Overview</h4>
                <p>{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem" }}
                >
                  View on GitHub 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
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
