import React from "react";
import CV from "../../assets/Shaon-React-Developer.doc";

const Buttons = (props) => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" onClick={props.anchorOnClickHander}>
        Let's Talk
      </a>

      <button  onClick={props.showWebexIntigration}  className="btn btnTest" >test btn</button>
    </div>
  );
};

export default Buttons;
