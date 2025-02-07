import { SocialMedia } from "../SocialMedia/SocialMedia";
import { TypeAnimation } from "react-type-animation";
import { Skills } from "../Skills/Skills";
import { Cards } from "../Cards/Cards";
import { DownloadCV } from "../DownloadCV/DownloadCV";
import "./Header.css";

export const Header = () => {
  // Función para manejar el tamaño de fuente responsivo
  const getFontSize = () => {
    if (window.innerWidth <= 480) return "32px";
    if (window.innerWidth <= 768) return "48px";
    return "80px";
  };

  return (
    <div className="Header">
      <div className="My_Presentation">
        <TypeAnimation
          sequence={[
            'Welcome',
            2000,
            "I'm Zaid Pantoja",
            2000,
            "I'm a FullStack",
            2000,
            "I'm a Designer",
            2000,
            "I'm Data science",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ 
            fontSize: getFontSize(),
            textAlign: "center",
            display: "block",
            width: "100%",
            padding: "0 20px"
          }}
        />
      </div>

      <div className="social-media-container">
        <SocialMedia />
      </div>

      <div className="Description">
        <div className="skills-container">
          <Skills />
        </div>

        <div className="download-cv-container">
          <DownloadCV />
        </div>

        <section className="cards-container">
          <Cards />
        </section>
      </div>
    </div>
  );
};