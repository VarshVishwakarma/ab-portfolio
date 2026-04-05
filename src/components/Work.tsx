import "./styles/Work.css";
import { useRef } from "react";

const Work = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "SyntexHub Encrypted Chat App",
      category: "Cybersecurity",
      description: "Real-time encrypted chat with secure communication.",
      tech: ["React", "Node.js", "WebSockets", "Encryption"],
      github: "https://github.com/Abhiimaurya0080/syntexhub_Encrypted_chat_app",
    },
    {
      title: "Encrypted File Transfer",
      category: "Security System",
      description: "Secure file transfer with encryption & protected storage.",
      tech: ["Python", "Encryption", "File Handling"],
      github: "https://github.com/Abhiimaurya0080/Encrypted_file_transfer_-_secure_storage",
    },
    {
      title: "Bug Bounty Toolkit",
      category: "Ethical Hacking",
      description: "Toolkit for vulnerability detection & automation.",
      tech: ["Python", "Security Tools"],
      github: "https://github.com/Abhiimaurya0080/h4cker_bug-bounty",
    },
    {
      title: "Port Scanner",
      category: "Networking",
      description: "Detect open ports & analyze vulnerabilities.",
      tech: ["Python", "Sockets", "Networking"],
      github: "https://github.com/Abhiimaurya0080/Syntecxhub_port_scanner",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="work-section" id="projects">

      <div className="work-container">

        <div className="work-header">
          <h2>My <span>Projects</span></h2>

          <div className="slider-buttons">
            <button onClick={() => scroll("left")}>‹</button>
            <button onClick={() => scroll("right")}>›</button>
          </div>
        </div>

        <div className="work-scroll" ref={scrollRef}>

          {projects.map((project, index) => (

            <div className="work-card" key={index}>

              <h3>{project.title}</h3>
              <p className="category">{project.category}</p>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.join(" • ")}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
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
