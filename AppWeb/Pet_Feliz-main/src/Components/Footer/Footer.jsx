import "./Footer.css"; // Certifique-se de que o caminho do arquivo CSS está correto
import img1 from "../../assets/instagram.png";
import img2 from "../../assets/web.png";
import img3 from "../../assets/facebook.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="box">
      <div className="footer-logado">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="group">
          <div className="grouptitle1">Adote seu amigo!</div>
           <p className="grouplink1">Clique e doe seu pet</p>
           <div className="grouplink2">Adote um grande amigo!</div>
          <Link to="/Faq">   <div className="grouplink3">Perguntas e respostas</div></Link>
          </div>
          <div className="group2">
            <p className="grouptitle2">Nos siga nas redes sociais</p>
            <a className="icon1" href="https://www.instagram.com/">
              {" "}
              <img src={img1} alt="Instagram" />
            </a>
            <a className="icon2" href="#">
              {" "}
              <img src={img2} alt="Site" />
            </a>
            <a className="icon3" href="https://web.facebook.com/?locale=pt_BR&_rdc=1&_rdr">
              {" "}
              <img src={img3} alt="Facebook" />
            </a>
          </div>
        </div>
        <p className="grouptitle4">Pet Feliz todos os direitos reservados</p>
      </div>
    </div>
  );
}
