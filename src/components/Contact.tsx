import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/jatin-maithul-308a87226/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — jatinmaithul
              </a>
            </p>
            <h4>Education</h4>
            <p>
              MCA,JECRC University, Jaipur — 2018–2020
            </p>
            <p>
              BCA, Maharaja College Jaipur — 2015–2018
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Jatinmaithul"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-maithul-308a87226/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/jatinmaithul/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Jatin Maithul</span>
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
