import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
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
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishekmaurya-53185232a"
              target="_blank"
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