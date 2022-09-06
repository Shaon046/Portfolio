import React from "react";
import "./about.css";
import Img from "../../assets/react.png";
import { TbFileCertificate } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={Img} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbFileCertificate className="about__icon" />
              <h5>Certified React Developer</h5>
            </article>

            <article className="about__card">
              <AiOutlineFileDone className="about__icon" />
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>
          </div>{" "}
          <p >
            As a passionate certified React front developer, I am seeking a role
            that allows me to continue learning and perfecting my web
            development skills as I provide high-quality work, and encourages me
            to flourish as a React developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
