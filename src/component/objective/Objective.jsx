import React from "react";
import "./objective.css";
const Objective = () => {
  return (
    <section className="objective-Sec">
      <h2>Technical Skills</h2>
      <div id="objective">
        <article className="obj-article">
          <ul className="obj">
            <li> Application Development</li>
            <li>Front-end Architecture</li>
            <li>Manual Testing</li>
            <li>Debugging</li>
            <li>UI Designing</li>
            <li>Webpage Optimization</li>
            <li>Performance Improvement</li>
            <li> Backend Architecture</li>
            <li>Issue Resolution </li>
          </ul>
        </article>
      </div>
      {/* <h2>Technical Skills</h2> */}
      <h5>React</h5>
      <article className="obj-article">
        <ul className="obj">
          <li>Functional Based Component</li>
          <li>Class Based Component</li>
          <li>Component Lifecycle</li>
          <li>JSX</li>
          <li>Context API</li>
          <li>Redux</li>
          <li>React Hooks</li>
          <li>React Router </li>
          <li>React Portals </li>
          <li>Authentication </li>
          <li>JavaScript + ES6 </li>
          <li>Node + npm </li>
        </ul>
      </article>

      <h5>Node js</h5>
      <article className="obj-article">
        <ul className="obj">
          <li>Asynchronous Programming</li>
          <li>File System</li>
          <li>Events And Streams</li>
          <li>Http</li>
          <li>Express JS</li>
          <li>MongoDB + Mongoose</li>
        </ul>
      </article>
    </section>
  );
};

export default Objective;
