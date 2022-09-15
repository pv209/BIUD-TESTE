import progress from "../../Images/Progress2.png";
import icon from "../../Images/Icon4.png";
import "./page5.css";
import Contextapi from "../../Context/Context";
import { useContext } from "react";
import {useNavigate} from "react-router-dom";

function Page5() {
  const { name, path } = useContext(Contextapi);
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/rdsummit6");
  }, 5000);

  return (
    <div className="page-main">
      <img src={progress} alt="barra de progresso" className="progress-bar" />
      <div className="page-container">
        <img src={icon} alt="emoji foguete" className="page5-rocket" />
        <p className="page5-opening-text">Legal, {name}</p>
        <p className="page5-text">
          A partir de agora você vai embarcar nessa experiência comigo e
          descobrir como utilizo a minha inteligência para impactar nos
          resultados da sua {path}.
        </p>
      </div>
    </div>
  );
}

export default Page5;
