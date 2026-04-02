import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      if (!box.length) return;

      const container = document.querySelector(".work-container");
      if (!container) return;

      const rectLeft = container.getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();
      const parentElement = box[0].parentElement;

      if (!parentElement) return;

      const parentWidth = parentElement.getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
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

      <div className="work-container section-container">

        <h2>Projects</h2>

        <div className="work-slider-controls">
          <button className="slider-btn" onClick={prevSlide}>‹</button>
          <button className="slider-btn" onClick={nextSlide}>›</button>
        </div>

        <div className="work-flex" ref={flexRef}>

          {projects.map((project, index) => (

            <div className="work-box" key={index}>

              <div className="work-info">

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

              {/* <WorkImage
                image={project.image}
                alt={project.title}
              /> 
              */}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Work;
