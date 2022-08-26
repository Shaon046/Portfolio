import React, { useState } from "react";
import "./header.css";
import Buttons from "./Buttons";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/img1.png";
import WebexIntigration from "../contact/WebexIntigration";

const Header = () => {
  const [show, setShow] = useState(false);

  const showWebexIntigration = () => {
    console.log("tested");
    setShow(!show);
  };

  const anchorOnClickHander = () => {
    setTimeout(() => {
      setShow(!show);
      console.log("anchor");
    }, 1000);
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shaon Bhattacharjee</h1>
        <h5 className="text-light">React Developer</h5>
        <Buttons
          showWebexIntigration={showWebexIntigration}
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
          <WebexIntigration showWebexIntigration={showWebexIntigration} />
        )}
      </div>
    </header>
  );
};

export default Header;
