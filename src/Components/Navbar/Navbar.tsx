import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div >
          <ul className="navbar_ul">
            <li className="navbar_li">
              <Link className="Nav-item" to={"/"}>Home</Link>
            </li>
            <li className="navbar_li">
              <Link  className="Nav-item" to={"/Projects"}>Projects</Link>
            </li>
            <li className="navbar_li">
              <Link className="Nav-item" to={"/Certifications"}>Certifications</Link>
            </li>
            <li className="navbar_li">
              <Link className="Link_Contact" to={"/Contact"}>Contact</Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
};
