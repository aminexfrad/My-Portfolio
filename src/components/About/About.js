import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AnimatedBackground from "../AnimatedBackground";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import OptimizedImage from "../OptimizedImage";

function About() {
  return (
    <Container fluid className="about-section">
      <AnimatedBackground enabled={true} />
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="heading-modern text-fade-in" style={{ paddingBottom: "20px" }}>
               <strong className="text-gradient">Welcome to my little corner of the internet.</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <OptimizedImage src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading text-fade-in">
          Professional <strong className="text-gradient">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading text-fade-in">
          <strong className="text-gradient">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
