import React, { useState } from "react";
import "./header.css";
import Buttons from "./Buttons";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/img1.png";
import Linkdin from "../contact/Linkedin";

const Header = () => {
  const [show, setShow] = useState(false);

  const showLinkedin = () => {
    console.log("tested");
    setShow(!show);
  };

 const anchorOnClickHander = () => {
    setTimeout(() => {
      setShow(!show);
    }, 1000);
  };

  return (
    
    <header className='main' id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shaon Bhattacharjee</h1>
        <h5 className="text-light">React Developer</h5>
        <Buttons
          showLinkedin={showLinkedin}
          anchorOnClickHander={anchorOnClickHander}
        />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="shaon" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>

      <div>
        {show && (
          <Linkdin showLinkedin={showLinkedin} />
        )}
      </div>
    </header>
  );
};

export default Header;
