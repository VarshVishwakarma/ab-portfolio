const MdArrowOutward = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10"/>
  </svg>
);
const MdCopyright = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/>
  </svg>
);

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <style>{`
        .contact-section { 
          background: #050505; 
          color: #fff; 
          padding: 100px 20px; 
          font-family: 'Inter', system-ui, sans-serif; 
        }
        .contact-container { 
          max-width: 1200px; 
          margin: 0 auto; 
        }
        .contact-container h3 { 
          font-size: 3.5rem; 
          margin-bottom: 3rem; 
          margin-top: 0; 
          font-weight: 800;
          letter-spacing: -1.5px;
        }
        .contact-flex { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 2rem; 
          justify-content: space-between; 
        }
        
        /* Premium Glassmorphism Cards */
        .contact-box { 
          flex: 1; 
          min-width: 300px; 
          background: rgba(255, 255, 255, 0.02); 
          padding: 2.5rem; 
          border-radius: 20px; 
          border: 1px solid rgba(255, 255, 255, 0.05); 
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }
        .contact-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }
        .contact-box:hover { 
          transform: translateY(-8px); 
          border-color: rgba(255, 255, 255, 0.15); 
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
        }
        
        /* Typography Details */
        .contact-box h4 { 
          color: #666; 
          margin-bottom: 0.5rem; 
          margin-top: 0; 
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
        .contact-box p { 
          margin-bottom: 2rem; 
          color: #ccc; 
          font-size: 1.1rem;
        }
        .contact-box a:not(.contact-social) { 
          color: #fff; 
          text-decoration: none; 
          transition: color 0.3s ease; 
        }
        .contact-box a:not(.contact-social):hover { 
          color: #4facfe; 
        }
        
        /* Social Buttons Styling */
        .contact-social {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          box-sizing: border-box;
          padding: 1rem 1.2rem;
          margin-bottom: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .contact-social:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.02);
        }
        .contact-social svg {
          transition: transform 0.3s ease, color 0.3s ease;
          opacity: 0.7;
        }
        .contact-social:hover svg {
          transform: translate(3px, -3px);
          color: #4facfe;
          opacity: 1;
        }

        /* Footer Branding */
        .contact-box h2 { 
          font-size: 2.2rem; 
          margin-bottom: 1.5rem; 
          margin-top: 0; 
          line-height: 1.3;
          font-weight: 700;
        }
        .contact-box h2 span { 
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-box h5 { 
          display: flex; 
          align-items: center; 
          gap: 0.5rem; 
          color: #666; 
          font-weight: normal; 
          margin: 0; 
        }
      `}</style>
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* Contact Details */}
          <div className="contact-box">
            <h4>Location</h4>
            <p>Bhopal, Madhya Pradesh, India</p>

            <h4>Email</h4>
            <p>
              <a href="mailto:abhiimaurya0080@gmail.com" data-cursor="disable">
                abhiimaurya0080@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+916391590079" data-cursor="disable">
                +91 6391590079
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Abhiimaurya0080"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/__abhii_maurya__04"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishekmaurya-53185232a"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Portfolio of <br /> <span>Abhishek Maurya</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
