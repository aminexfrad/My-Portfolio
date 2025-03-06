import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Congratulations, you found me! <br />
            I am <span className="purple">Mohamed Amine FRAD </span> from{" "}
            <span className="purple">Sousse, Tunisia.</span>
            <br />
             I’m currently working on web development technologies like{" "}
            <span className="purple">Spring Boot, Angular, React</span>, etc.
            <br />
             I’m currently learning{" "}
            <span className="purple">JAVA</span> and another language 😅.
            <br />
            Future Goals: Learn more technologies and never stop creating
            new ideas.
          </p>
          <br />
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Mohamed Amine FRAD</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
