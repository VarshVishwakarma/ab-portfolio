import "./styles/Work.css";
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
    const init = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      const flex = flexRef.current;
      if (!flex) return;

      const totalWidth = flex.scrollWidth;
      const viewport = window.innerWidth;

      const scrollDistance = totalWidth - viewport;

      gsap.to(flex, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
        },
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    if (!(window as any).gsap) {
      const s = document.createElement("script");
      s.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      s.onload = () => {
        const st = document.createElement("script");
        st.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        st.onload = init;
        document.head.appendChild(st);
      };
      document.head.appendChild(s);
    } else {
      init();
    }
  }, []);

  return (
    <div className="work-section" id="projects">
      <style>{`
        .work-section {
          overflow: hidden;
        }

        .work-flex {
          display: flex;
          gap: 2rem;
          width: max-content;
        }

        .work-box {
          flex: 0 0 400px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 20px;
        }

        .tech-stack {
          color: #38bdf8;
          font-size: 0.85rem;
          margin-top: 6px;
        }
      `}</style>

      <div className="work-container section-container">
        <h2>My <span>Projects</span></h2>

        <div className="work-flex" ref={flexRef}>
          {projects.map((project, i) => (
            <div className="work-box" key={i}>
              <h3>{project.title}</h3>

              <p className="tech-stack">
                {project.tech.join(" • ")}
              </p>

              <p style={{ marginTop: "10px" }}>
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
