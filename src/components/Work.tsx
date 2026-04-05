import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
      github:
        "https://github.com/Abhiimaurya0080/Encrypted_file_transfer_-_secure_storage",
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

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      
      const getScrollDistance = () =>
        track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getScrollDistance(), // 🔥 dynamic fix
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`, // 🔥 dynamic fix
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

    }, section);

    // 🔥 Fix layout timing issues
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => ctx.revert(); // ✅ safe cleanup

  }, []);

  return (
    <div className="work-section" ref={sectionRef} id="projects">
      <div className="work-container section-container">

        <h2>My <span>Projects</span></h2>

        <div className="work-track" ref={trackRef}>
          {projects.map((project, index) => (
            <div className="work-card" key={index}>

              <h3>{project.title}</h3>

              <p className="category">{project.category}</p>

              <p className="tech-stack">
                {project.tech.join(" • ")}
              </p>

              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>

              <WorkImage image={project.image} alt={project.title} />

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;
