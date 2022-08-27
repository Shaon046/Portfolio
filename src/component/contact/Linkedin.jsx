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
          <a href="linkdin.com" className="connect">
            Connect
          </a>
        </div>,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Linkedin;
