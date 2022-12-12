import img from "../../public/jan_1.png";
import Logo from "../../public/LogoJF.png";
import {
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";
import "./hero.scss";

function Hero() {
  return (
    <section className="gradient heroWrapper">
      <div className="heroContent">
        <img src={Logo} alt="" width={160} height={260} quality="100" />
        <div>
          <h1 className="heroTitle">Jan Francksen</h1>
          <div className="heroSubtitle">
            Frontend-Developer & UI/UX-Designer
          </div>
        </div>
      </div>
      <div className="iconList">
        <a href="tel:015259599174" className="icons">
          <FaPhoneAlt /> 015259599174
        </a>
        <a href="mailto:jan.francksen@web.de" className="icons">
          <FaEnvelope /> jan.francksen@web.de
        </a>
        <a href="https://github.com/JanFrancksen" className="icons">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jan-francksen-8a7124258/"
          className="icons"
        >
          <FaLinkedin />
        </a>
      </div>
      <a className="scrollButton" href="/#stack">
        <FaChevronDown />
      </a>
    </section>
  );
}

export default Hero;
