// Commented out to prevent build errors in this preview environment
// import "./styles/Work.css";
import { useEffect, useRef } from "react";

const Work = () => {
  const flexRef = useRef<HTMLDivElement>(null);

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
      github:
        "https://github.com/Abhiimaurya0080/Encrypted_file_transfer_-_secure_storage",
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

  useEffect(() => {
    let ctx: any;
    let isMounted = true;

    const initAnimation = () => {
      if (!isMounted) return;
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const flexContainer = flexRef.current;
        if (!flexContainer) return;

        const getScrollAmount = () => {
          // 1. Grab the parent's offset. (Safer than flexContainer because flexContainer moves during scroll)
          const containerOffset = flexContainer.parentElement?.getBoundingClientRect().left || 0;
          
          // 2. Full scrollable width - Viewport width + Initial left offset + extra right-side padding (60px)
          const totalDistance = flexContainer.scrollWidth - window.innerWidth + containerOffset + 60;
          
          return Math.max(0, totalDistance);
        };

        gsap.to(".work-flex", {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: ".work-section",
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            scrub: 1, // '1' adds a slight smoothing effect to the scroll
            pin: true,
            invalidateOnRefresh: true, // Recalculates 'x' and 'end' on window resize
          },
        });

        // Force refresh after layout stabilizes to ensure accurate initial calculations
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 300);
      });
    };

    // Dynamically load GSAP avoiding duplicates
    if (!(window as any).gsap && !document.querySelector("#gsap-core")) {
      const script = document.createElement("script");
      script.id = "gsap-core";
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      script.onload = () => {
        const stScript = document.createElement("script");
        stScript.id = "gsap-st";
        stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        stScript.onload = initAnimation;
        document.head.appendChild(stScript);
      };
      document.head.appendChild(script);
    } else if ((window as any).gsap && (window as any).ScrollTrigger) {
      initAnimation();
    }

    return () => {
      isMounted = false;
      ctx?.revert(); // Properly clean up all GSAP instances & ScrollTriggers on unmount
    };
  }, []);

  const nextSlide = () => {
    const scrollAmount = window.innerWidth * 0.8 + 32;
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  };

  const prevSlide = () => {
    const scrollAmount = window.innerWidth * 0.8 + 32;
    window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="work-section" id="projects">
      {/* CRITICAL CSS GUARANTEE: 
        This prevents flexbox from squishing the cards, which is the #1 cause 
        of GSAP scrollWidth calculations coming up short. 
      */}
      <style>{`
        .work-section {
          overflow-x: hidden;
        }
        .work-flex {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          gap: 2rem;
        }
        .work-box {
          flex: 0 0 auto; /* <--- Prevents cards from shrinking! */
          width: 80vw;
          max-width: 500px;
        }
      `}</style>

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
