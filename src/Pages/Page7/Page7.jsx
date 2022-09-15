import "./page7.css";
import progress from "../../Images/Progress4.png";
import icon from "../../Images/Icon6.png";
import { useContext } from "react";
import Contextapi from "../../Context/Context";
import celular from "../../Images/celular.png";
import { Link } from "react-router-dom";

function Page7() {
  const { name } = useContext(Contextapi);
  return (
    <div className="page-main">
      <img src={progress} alt="barra de progresso" className="progress-bar" />
      <div className="page-container">
        <img src={icon} alt="emoji sucesso" />
        <p className="text-pink">Prontinho, {name}</p>
        <p className="page7-text">
          A experiência MIA que vai fazer sua hamburgueria decolar começará nos
          próximos minutos em seu WhatsApp.
        </p>
        <button type="button" className="page7-button">
          <img
            src={celular}
            alt="emoji celular"
            className="page7-emoji-button"
          />{" "}
          <p className="button-text">
            Indique um amigo e concorra a um iPhone 13 Pro Max
          </p>
        </button>
        <Link to="/">
          <button type="button" className="page7-button2">
            Finalizar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page7;
