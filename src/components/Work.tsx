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
        const box = document.getElementsByClassName("work-box");

        if (!box.length) return;

        const workContainer = document.querySelector(".work-container");
        if (!workContainer) return;

        const rectLeft = workContainer.getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        const padding = parseInt(window.getComputedStyle(box[0]).padding || "0") / 2;

        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
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
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    window.scrollTo({
      top: window.scrollY - 500,
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
        .work-box { width: 80vw; max-width: 500px; background: #222; padding: 2rem; border-radius: 12px; }
        .work-slider-controls { margin-top: 1rem; }
        .slider-btn { background: #444; color: white; border: none; padding: 0.5rem 1rem; margin-right: 0.5rem; cursor: pointer; border-radius: 4px; font-size: 1.2rem; }
        .slider-btn:hover { background: #666; }
        .project-link { color: #4facfe; text-decoration: none; font-weight: bold; }
        .project-link:hover { text-decoration: underline; }
        h2 { font-size: 2.5rem; margin-bottom: 0; }
        h3 { color: #666; font-size: 2.5rem; margin: 0 0 1rem 0; }
        h4 { margin-top: 0; margin-bottom: 0.5rem; font-size: 1.2rem; }
        p { color: #ccc; line-height: 1.5; }
      `}</style>
      <div className="work-container section-container">
        <h2>Projects</h2>

        <div className="work-slider-controls">
          <button className="slider-btn" onClick={prevSlide}>
            ‹
          </button>
          <button className="slider-btn" onClick={nextSlide}>
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
                    {/* Replaced category with tech stack */}
                    <p>{project.tech.join(" • ")}</p> 
                  </div>
                </div>

                <h4>Overview</h4>
                <p>{project.description}</p>

                {/* Added GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ display: "inline-block", marginTop: "1rem" }}
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
