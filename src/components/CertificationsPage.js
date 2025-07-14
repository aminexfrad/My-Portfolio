import React from "react";
import { Container } from "react-bootstrap";
import Certifications from "./About/Certifications";
import Particle from "./Particle";
import AnimatedBackground from "./AnimatedBackground";

function CertificationsPage() {
  return (
    <Container fluid className="project-section">
      <AnimatedBackground enabled={true} />
      <Particle />
      <Container>
        <h1 className="project-heading text-fade-in">
          My <strong className="text-gradient">Certifications</strong>
        </h1>
        <p className="subheading-modern text-center text-loading" style={{ marginBottom: "3rem" }}>
          Here are my professional certifications and achievements.
        </p>
        <Certifications />
      </Container>
    </Container>
  );
}

export default CertificationsPage; 