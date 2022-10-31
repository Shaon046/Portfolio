import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

// ==============Portfolio Data============

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Flipkart clone",
    github: "https://github.com/Shaon046/FlipkartClone",
    demo: "https://flipkart-dev-sb.herokuapp.com/",
  },
 
  {
    id: 3,
    image: IMG3,
    title: "Food order app",
    github: "https://github.com/Shaon046/FoodBuddies_React_App",
    demo: "https://foodbuddies-th.netlify.app/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Photo search app",
    github: "https://github.com/Shaon046/Photo-Bucket",
    demo: "https://photo-buckets.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Expense Tracker",
    github: "https://github.com/Shaon046/ExpenseTracker-react-",
    demo: "https://myexpences-tracker.netlify.app/",
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
