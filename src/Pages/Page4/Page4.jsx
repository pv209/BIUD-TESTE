import progress from "../../Images/Progress2.png";
import icon from "../../Images/Icon3.png";
import hamburger from "../../Images/hamburger.png";
import drogaria from "../../Images/drogaria.png";
import roupas from "../../Images/roupas.png";
import {useNavigate} from "react-router-dom";
import "./page4.css";
import { useContext} from "react";
import Contextapi from "../../Context/Context";

function Page4() {
  const {savePath} = useContext(Contextapi);
  const navigate = useNavigate();

  const handleClick = ({target:{value}}) => {
      savePath(value);
      navigate("/rdsummit5")
  }

  return (
    <div className="page-main">
      <img src={progress} alt="barra de progresso" className="progress-bar" />
      <div className="page-container">
        <img src={icon} alt="emoji trabalho" />
        <p className="page4-text">
          Vamos supor que você queira otimizar o marketing de uma empresa. Qual
          seria?
        </p>
        <button type="button" className="page4-btn" onClick={handleClick} value="hamburgeria">
          <img
            src={hamburger}
            alt="emoji hamburger"
            className="page4-btn-img"
          />
          Hamburgeria
        </button>
        <button type="button" className="page4-btn" onClick={handleClick} value="drogaria">
          <img src={drogaria} alt="emoji drogaria" className="page4-btn-img" />
          Drogaria
        </button>
        <button type="button" className="page4-btn" onClick={handleClick} value="loja de roupas">
          <img src={roupas} alt="emoji drogaria" className="page4-btn-img" />
          Loja de Roupas
        </button>
      </div>
    </div>
  );
}

export default Page4;
