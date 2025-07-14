import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-fade-in" style={{ textAlign: "justify" }}>
            🌟 Greetings, fellow dreamer! I'm <span className="purple about-glow">Mohamed Amine FRAD</span>, a digital sorcerer from the enchanted city of <span className="purple about-glow">Sousse, Tunisia</span>.<br />
            ✨ My tale begins in the mystical realm of imagination, where I discovered the ancient art of transforming dreams into digital reality. With every line of code, I cast spells that bring websites to life.<br />
            🎨 I am a master of the digital arts, blending creativity with technology to craft experiences that spark wonder and inspire action. My tools? Imagination, innovation, and an unquenchable thirst for creating the extraordinary.<br />
            🌟 My mission: to transform the digital landscape into a realm of endless possibilities, where every interaction tells a story and every pixel holds magic.
          </p>
          <br />
          <ul>
            <li className="about-activity about-activity-animate">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity about-activity-animate">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity about-activity-animate">
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
