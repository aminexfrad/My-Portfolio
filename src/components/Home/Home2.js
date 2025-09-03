import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO MY <span className="purple special-text"> DIGITAL REALM </span>
            </h1>
            <p className="home-about-body">
              ✨ In a world where pixels dance and code sings, I craft digital experiences that transcend the ordinary. Every line of code is a brushstroke, every interaction a spell cast upon the digital canvas.
              <br />
              <br />
              🌟 My journey began in the mystical lands of Sousse, where I discovered the ancient art of turning imagination into reality. Through the sacred languages of HTML, CSS, and JavaScript, I weave spells that bring websites to life.
              <br />
              <br />
              🚀 Today, I stand as a guardian of the digital realm, creating portals that connect dreams to reality. Each project is a new adventure, every challenge a puzzle waiting to be solved with creativity and innovation.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CREATE MAGIC TOGETHER</h1>
            <p>
              ✨ Ready to embark on a digital adventure? Let's weave spells of creativity and innovation together.<br />
              🌟 Have a vision, a dream, or a story to tell? I'll help you bring it to life in the digital realm.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aminexfrad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aminefrad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
