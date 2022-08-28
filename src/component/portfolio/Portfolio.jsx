import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

// ==============Portfolio Data============

const data = [
  {
    id: 1,
    image: IMG1,
    title: "portfolio title 1",
    github: "http://github.com",
    demo: "https://dribbble.com/alien_pixels",
  },
  {
    id: 2,
    image: IMG2,
    title: "portfolio title 2",
    github: "http://github.com",
    demo: "https://dribbble.com/alien_pixels",
  },
  {
    id: 3,
    image: IMG3,
    title: "portfolio title 3",
    github: "http://github.com",
    demo: "https://dribbble.com/alien_pixels",
  },

  {
    id: 4,
    image: IMG4,
    title: "portfolio title 4",
    github: "http://github.com",
    demo: "https://dribbble.com/alien_pixels",
  },
  {
    id: 5,
    image: IMG5,
    title: "Tic-Tac-Toe",
    github: "https://github.com/Shaon046/Tic-Tac-Toe",
    demo: "http://pop-tic-tac-toe.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather App",
    github: "https://github.com/Shaon046/Weather_App",
    demo: "https://weatherfindee.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="Container portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="cta">
                <a href={github} className="btn" target={"_blank"} rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"} rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
