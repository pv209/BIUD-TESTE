import progress from "../../Images/Progress3.png";
import icon from "../../Images/Icon5.png";
import "./page6.css";
import { Link } from "react-router-dom";

function Page6() {
  return (
    <div className="page-main">
      <img src={progress} alt="barra de progresso" className="progress-bar" />
      <div className="page-container">
        <img src={icon} alt="emoji celular" className="page6-icon" />
        <p className="page6-text">
          Essa experiência acontece toda pelo WhatsApp. Por isso, me diz qual o
          número do seu celular?
        </p>
        <p className="page6-warnig-text">
          Não se preocupe! Seu número será utilizado exclusivamente para que eu
          demonstre a experiência MIA
        </p>
        <input
          type="tel"
          className="page6-input"
          placeholder="Escreva seu WhatsApp"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}   //stack overflow
        />
        <Link to="/rdsummit7">
          <button type="button" className="page2-button">
            Avançar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page6;
