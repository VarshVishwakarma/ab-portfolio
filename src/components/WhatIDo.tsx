import React from "react";
// Note: Uncomment this import in your local environment!
import "./styles/WhatIDo.css";

const services = [
  "Cybersecurity Analysis",
  "Penetration Testing",
  "Threat Intelligence",
  "Security Automation",
];

const WhatIdo: React.FC = () => {
  return (
    <section className="whatIDO" id="whatido">
      <div className="what-content-left">
        <h2 className="what-title">WHAT I DO</h2>
        
        <div className="what-list">
          {services.map((service, index) => (
            <div className="what-item" key={index} data-index={index}>
              <span className="what-number">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <span className="what-text">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIdo;