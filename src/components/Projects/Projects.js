import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AnimatedBackground from "../AnimatedBackground";
import Beprocess from "../../Assets/Projects/beprocess.png";
import ecomind from "../../Assets/Projects/ecomind.png";
import eventify from "../../Assets/Projects/eventify.png";
import leave from "../../Assets/Projects/leave.png";
import CodePlayground from "../../Assets/Projects/CodePlayground.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <AnimatedBackground enabled={true} />
      <Particle />
      <Container>
        <h1 className="project-heading text-fade-in">
          My Recent <strong className="text-gradient">Works </strong>
        </h1>
        <p className="subheading-modern text-center text-loading" style={{ marginBottom: "3rem" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Beprocess}
              isBlog={false}
              title="BeProcess"
              description="This project is a Role Based Authorization system built using Angular and JSON Server. Users can sign up and log in, but new accounts require admin approval before they can log in and is fully responsive."
              ghLink="https://github.com"
              demoLink="https://.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leave}
              isBlog={false}
              title="Zouari Conge"
              description="Leave and request management web application with three user roles (Employee, HR,Department Approver) using PHP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomind}
              isBlog={false}
              title="EcoMind"
              description="Blog website build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js."
              ghLink="https://github.com/aminexfrad/EcoMind"
              demoLink="https://eco-mind-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodePlayground}
              isBlog={false}
              title="CodePlayground"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/aminexfrad/CodePlayground"
              demoLink="https://code-playground-henna.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventify}
              isBlog={false}
              title="Eventify"
              description="Eventify IMSET Sousse is a dynamic web application designed to help the IMSET community stay up-to-date with the latest events happening in and around Sousse, Tunisia. Whether you're looking for cultural activities, university events, or local happenings, Eventify has you covered."
              ghLink="https://github.com/aminexfrad/Eventify"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
