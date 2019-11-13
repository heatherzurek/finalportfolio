import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import pupster from "./Images/pupster.png";
import catan from "./Images/catan.png";
import npsclone from "./Images/npsclone.png";
import wanderlist1 from "./Images/wanderlist1.png";
import wanderlist2 from "./Images/wanderlist2.png";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="project-box">
        <img src={npsclone} alt="national park website" />
        <p className="p-format">
          This web app allows you to see a list of the States and their
          co-ordinating national parks, in the future you will be able to route
          to different pages in additional to the state and national parks page
          to learn more about the national park.
        </p>
        <p className="stack-format">
          Stack:
          <span className="highlight">Angular, TypeScript, HTML, CSS</span>
        </p>
        <a href="https://github.com/heatherzurek/angular-nps-clone">
          View Code
        </a>
      </div>
      <div className="project-box">
        <img src={pupster} alt="dog" />
        <p className="p-format">
          A web application that uses a quiz to query shelter pet profiles from
          a relational database and return matches to users based on their unique answers. Created on a four person team, my contributions included UI/UX, Database Calls and MVC logic.
        </p>
        <p className="stack-format">
          Stack: <span className="highlight">C#, .NET, mySQL, HTML, CSS</span>
        </p>
        <a href="https://github.com/heatherzurek/pupster">View Code</a>
      </div>
      <div className="project-box">
        <img src={wanderlist1} alt="river" />
        <img src={wanderlist2} alt="links" />
        <p className="p-format">
          A web application that helps the user pack for camping trips based on
          terrain and season. It allows the user to choose the time of year,
          where they'll be going and it will suggest packing lists based on
          their selections. Created on a three person team, my contributions
          included UI/UX, and JavaScript logic.
        </p>
        <p className="stack-format">
          Stack:
          <span className="highlight">JavaScript, jQuery, HTML, CSS</span>
        </p>
        <a href="https://github.com/heatherzurek/wanderlist-camping">
          View Code
        </a>
        |
        <a href="https://heatherzurek.github.io/wanderlist-camping/">
          View Deployed Site
        </a>
      </div>
      <div className="project-box">
        <img src={catan} alt="catan game" />
        <p className="p-format">
          A functional webbased multi-player take on the classic tabletop board game Settlers of Catan where you build roads to connect to cities to earn victory points. This was a group project, on a team of 5, and the work was completed in 3 days. My contribution was mainly design and HTML/CSS focused.
        </p>
        <p className="stack-format">
          Stack:
          <span className="highlight">Angular, JavaScript, HTML, CSS</span>
        </p>
        <a href="https://github.com/heatherzurek/settlers-of-catan">
          View Code
        </a>
      </div>
      <p>
        You can view more on my <a href="www.github.com/heatherzurek">Github</a>
      </p>
      <p className="faChev">
        <FontAwesomeIcon icon={faChevronDown} size="lg" />
      </p>
    </div>
  );
}
