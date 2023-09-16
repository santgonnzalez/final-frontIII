import "../components/Footer.modules.css";
import face from "../images/ico-facebook.png";
import ig from "../images/ico-instagram.png";
import wp from "../images/ico-whatsapp.png";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

export function Footer() {
  const { tema } = useContext(ContextGlobal);
  return (
    <footer
      className="footer"
      style={{ backgroundColor: tema.footer, color: tema.font }}
    >
      <div className="info-footer">
        <p className="nombre">Santiago Aaron Gonzalez.</p>
      </div>
      <div className="images">
        <a className="button-class" href="https://www.facebook.com/">
          <img className="face" src={face} alt="Facebook" />
        </a>
        <a className="button-class" href="https://www.instagram.com/">
          <img className="ig" src={ig} alt="Instagram" />
        </a>
        <a className="button-class" href="https://www.whatsapp.com/">
          <img className="wp" src={wp} alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
}
//
