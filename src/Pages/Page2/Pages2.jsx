import icon from "../../Images/Icon.png";
import progress from "../../Images/Progress.png";
import "./page2.css";
import {Link} from "react-router-dom"
import { useContext, useState } from "react";
import Contextapi from "../../Context/Context";

function Page2() {
  const [name, setName] = useState("")
  const {saveName} = useContext(Contextapi);

  const handleChange = (e) => {
     setName(e.target.value)
  }

  const handleClick = (e) => {
     saveName(name);
  }
  return (
    <div className="page-main">
      <img src={progress} alt="progresso" className="progress-img" />
      <div className="page-container">
          <img src={icon} alt="icone" className="icon-img" />
        <p className="text-pink">Como você quer ser chamado</p>
        <input
          type="text"
          placeholder="Escreva seu nome"
          className="page2-inpt"
          onChange={handleChange}
          value={name}
        />
        <Link to="/rdsummit3">
        <button type="button" className="page2-button" onClick={handleClick}>
          Avançar
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Page2;
