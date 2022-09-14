import { useContext } from "react";
import Contextapi from "../../Context/Context";
import progress from "../../Images/Progress.png";
import "./page3.css";
import icon2 from "../../Images/Icon2.png";
import {useNavigate} from "react-router-dom";

function Page3() {
  const { name } = useContext(Contextapi);
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('./rdsummit4', { replace: true });
  },5000)
  return (
    <div className="page3-content">
      <img src={progress} alt="barra de progresso" className="progress-bar" />
      <div className="page3-container">
        <img src={icon2} alt="emoji feliz" className="page3-icon" />

        <p className="page3-opening-text">Prazer, {name}!</p>
        <p className="page3-text">
          Vou te mostrar o meu jeito de fazer marketing direcionado por dados.
        </p>
      </div>
    </div>
  );
}

export default Page3;
