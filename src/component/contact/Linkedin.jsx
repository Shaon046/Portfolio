import { React } from "react";
import ReactDOM from "react-dom";
import LOGO from "../../assets/linkedin.png";
import "./Linkedin.css";

const Linkedin = (props) => {
  return (
    <div className="backdrop">
      {ReactDOM.createPortal(
        <div className="modal">
          {" "}
          <div onClick={props.showLinkedin} className="exit">
            X
          </div>
          <img src={LOGO} alt="logo" className="logo " />
          <a href="https://www.linkedin.com/in/shaon-bhattacharjee" className="connect" target="_blank" rel="noreferrer">
            Connect
          </a>
         
        </div>,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Linkedin;
