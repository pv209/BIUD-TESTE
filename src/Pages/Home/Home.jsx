import "./home.css";
import symbol from "../../Images/Symbol.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-container">
      <img src={symbol} alt="logo" className="home-logo" />
        <p className="home-text">
          Melhor do que eu escrever um monte de coisa sobre a BIUD, é você viver
          a experiência!
        </p>
        <Link to="/rdsummit2">
          <button type="button" className="home-button">
            Começar
          </button>
        </Link>

    </div>
  );
}

export default Home;
