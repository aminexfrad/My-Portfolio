import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-fade-in" style={{ textAlign: "justify" }}>
            👋 Hello! I'm <span className="purple about-glow">Mohamed Amine FRAD</span>, a web developer from <span className="purple about-glow">Sousse, Tunisia</span>.<br />
            💻 I specialize in creating innovative web solutions using modern technologies. My expertise includes HTML, CSS, JavaScript, and various modern frameworks.<br />
            🎯 With a passion for clean code and user-centric design, I transform complex challenges into elegant digital solutions.<br />
            � I'm committed to delivering high-quality, scalable applications that drive business success and user satisfaction.
          </p>
          <br />
       

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
