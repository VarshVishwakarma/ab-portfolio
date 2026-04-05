import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {

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

  return (
    <div className="work-section" id="projects">

      <div className="work-container">

        <h2>My <span>Projects</span></h2>

        <div className="work-scroll">

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

              <WorkImage image={project.image} alt={project.title} />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Work;
