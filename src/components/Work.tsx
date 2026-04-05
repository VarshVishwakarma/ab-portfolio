import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

  const flexRef = useRef<HTMLDivElement>(null);

  /* =========================
     🔥 UPDATED PROJECT DATA
     ========================= */
  const projects = [
    {
      title: "SyntexHub Encrypted Chat App",
      category: "Cybersecurity",
      description: "Real-time encrypted chat with secure communication.",
      tech: ["React", "Node.js", "WebSockets", "Encryption"],
      github: "https://github.com/Abhiimaurya0080/syntexhub_Encrypted_chat_app",
      image: "/images/project1.webp",
    },
    {
      title: "Encrypted File Transfer",
      category: "Security System",
      description: "Secure file transfer with encryption & protected storage.",
      tech: ["Python", "Encryption", "File Handling"],
      github: "https://github.com/Abhiimaurya0080/Encrypted_file_transfer_-_secure_storage",
      image: "/images/project2.webp",
    },
    {
      title: "Bug Bounty Toolkit",
      category: "Ethical Hacking",
      description: "Toolkit for vulnerability detection & automation.",
      tech: ["Python", "Security Tools"],
      github: "https://github.com/Abhiimaurya0080/h4cker_bug-bounty",
      image: "/images/project3.webp",
    },
    {
      title: "Port Scanner",
      category: "Networking",
      description: "Detect open ports & analyze vulnerabilities.",
      tech: ["Python", "Sockets", "Networking"],
      github: "https://github.com/Abhiimaurya0080/Syntecxhub_port_scanner",
      image: "/images/project4.webp",
    },
  ];

  /* =========================
     GSAP SCROLL (UNCHANGED)
     ========================= */
  useEffect(() => {

    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;

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

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };

  }, []);

  /* =========================
     UI
     ========================= */
  return (
    <div className="work-section" id="projects">

      <div className="work-container section-container">

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="work-flex" ref={flexRef}>

          {projects.map((project, index) => (

            <div className="work-box" key={index}>

              <div className="work-info">

                <div className="work-title">

                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>

                </div>

                <h4>Overview</h4>
                <p>{project.description}</p>

                {/* 🔥 TECH STACK */}
                <p className="tech-stack">
                  {project.tech.join(" • ")}
                </p>

                {/* 🔥 GITHUB LINK */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>

              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Work;
