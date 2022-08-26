import { React } from "react";
import ReactDOM from "react-dom";
import "./WebexIntigration.css";

const WebexIntigration = (props) => {
  return (
    <div className="backdrop">
      {ReactDOM.createPortal(
        <div className="modal">
          {" "}
          <div onClick={props.showWebexIntigration}>X</div> WebexIntigration
        </div>,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default WebexIntigration;

//<div>WebexIntigration</div>
