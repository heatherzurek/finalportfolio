import React from "react";
import me from "./Images/me.png";


export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <p>Do you have questions? Want to grab coffee and chat? Let's connect!</p>
      <div className="contact-image">
      <img src={me} alt="woman and mountains" />
      </div>
    </div>
  );
}
