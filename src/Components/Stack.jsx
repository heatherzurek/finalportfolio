import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Stack() {
  return (
    <div className="techstack-container">
      <h2>Tech Stack</h2>
      <span>JavaScript</span>
      <span>Node.js</span>
      <span>React</span>
      <span>Go</span>
      <span>C#</span>
      <span>.NET</span>
      <span>Angular</span>
      <span>TypeScript</span>
      <span>and always learning!</span>
      <p className="faChev">
        <FontAwesomeIcon icon={faChevronDown} size="lg" />
      </p>
    </div>
  );
}
