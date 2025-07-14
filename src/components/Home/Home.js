import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import AnimatedBackground from "../AnimatedBackground";
import Home2 from "./Home2";
import Type from "./Type";
import OptimizedImage from "../OptimizedImage";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <AnimatedBackground enabled={true} />
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading text-fade-in" style={{ paddingBottom: 15 }}>
                Hi There!{" "}

              </h1>

              <h1 className="heading-name text-slide-in">
                I'M
                <strong className="main-name text-gradient"> Mohamed Amine FRAD</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="text-loading">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <OptimizedImage
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
