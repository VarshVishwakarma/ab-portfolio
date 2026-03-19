import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA – Cybersecurity Track</h4>
                <h5>Barkatullah University Institute of Technology</h5>
              </div>
              <h3>2024</h3>
            </div>

            <p>
              Currently pursuing a Bachelor of Computer Applications with a
              specialization in Cybersecurity. Coursework includes network
              security, operating systems, ethical hacking, data structures,
              and incident response fundamentals.
            </p>
          </div>

          {/* SOC Labs */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOC Analyst Lab Environment</h4>
                <h5>TryHackMe Platform</h5>
              </div>
              <h3>2024</h3>
            </div>

            <p>
              Completed 50+ hands-on cybersecurity labs focused on threat
              hunting, log analysis, vulnerability assessment, malware
              investigation, and incident response using real-world SOC
              techniques and the MITRE ATT&CK framework.
            </p>
          </div>

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>SyntecxHub</h5>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Worked on real-time security monitoring and network traffic
              analysis using SIEM tools and Wireshark. Investigated security
              alerts, analyzed suspicious activity, and applied threat
              intelligence techniques to identify potential cyber attacks.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;