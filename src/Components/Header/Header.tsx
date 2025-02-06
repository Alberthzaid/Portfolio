import { SocialMedia } from "../SocialMedia/SocialMedia";
import "./Header.css";
import { TypeAnimation } from "react-type-animation";
import { Skills } from "../Skills/Skills";
import { Cards } from "../Cards/Cards";
import { DownloadCV } from "../DownloadCV/DownloadCV";


export const Header = () => {
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
        style={{ fontSize: "80px", textAlign: "center" }}
      />
      </div>
      

      <SocialMedia />

      <div className="Description">
        <Skills />

        <DownloadCV/>
        
        <section>
          <Cards/>
        </section>


      </div>
    </div>
  );
};
