import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          I am Abhishek Maurya, an aspiring Cybersecurity Professional and SOC Analyst 
          with hands-on experience in threat detection, incident investigation, and 
          security monitoring. I work with SIEM tools, network analysis platforms, 
          and Linux-based systems to identify vulnerabilities and analyze security events.
        </p>

        <p className="para">
          My focus is on defensive security, blue team operations, and building secure 
          communication systems using Python and cryptographic protocols. I enjoy 
          studying modern attack techniques, analyzing malicious network traffic, 
          and developing strategies to protect systems from evolving cyber threats.
        </p>

      </div>
    </div>
  );
};

export default About;