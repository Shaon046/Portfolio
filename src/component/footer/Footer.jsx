import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="main-ftr">
      <footer className="ftr">
        {" "}
        <p>copyright &copy; 2022 dev-shaon.netlify.app, All rights reserved.</p>
        <a
          className="ftr-a"
          href="https://www.linkedin.com/in/shaon-bhattacharjee/"
          target="_blank"
          rel="noreferrer"
        >
          Follow me on Linkedin
        </a>
      </footer>
    </div>
  );
};

export default Footer;
