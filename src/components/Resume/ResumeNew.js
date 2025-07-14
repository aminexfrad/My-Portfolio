import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Particle from "../Particle";
import AnimatedBackground from "../AnimatedBackground";
import { AiOutlineDownload, AiOutlineEye, AiOutlineCalendar, AiOutlineEnvironment, AiOutlineTrophy, AiOutlineBook, AiOutlineCode, AiOutlineDatabase, AiOutlineCloud } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Remote",
      description: "Developing full-stack web applications using modern technologies like React, Node.js, and various cloud platforms.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      title: "Software Developer Intern",
      company: "Tech Company",
      period: "2022 - 2023",
      location: "Tunisia",
      description: "Worked on various projects including web applications and mobile apps using modern development practices.",
      technologies: ["JavaScript", "Python", "React Native", "Git"]
    }
  ];

  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      period: "2020 - 2024",
      location: "Tunisia",
      description: "Focused on software engineering, algorithms, and web development technologies."
    }
  ];

  const skillsData = {
    "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Python", "PHP", "REST APIs"],
    "Database": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    "Tools & Others": ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman"]
  };

  const certificationsData = [
    {
      name: "IBM Full Stack Software Developer",
      issuer: "IBM",
      date: "2024",
      link: "/ibm_certificate.pdf"
    },
    {
      name: "Machine Learning Certificate",
      issuer: "Online Platform",
      date: "2023",
      link: "/machine_certificate.pdf"
    }
  ];

  const renderExperience = () => (
    <div className="resume-section-content">
      {experienceData.map((exp, index) => (
        <Card key={index} className="resume-card mb-4">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="card-title text-gradient mb-1">{exp.title}</h5>
                <h6 className="text-muted mb-1">{exp.company}</h6>
                <div className="d-flex align-items-center text-muted small">
                  <AiOutlineCalendar className="me-2" />
                  {exp.period}
                  <AiOutlineEnvironment className="ms-3 me-2" />
                  {exp.location}
                </div>
              </div>
            </div>
            <p className="card-text">{exp.description}</p>
            <div className="technologies">
              {exp.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} bg="primary" className="me-2 mb-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="resume-section-content">
      {educationData.map((edu, index) => (
        <Card key={index} className="resume-card mb-4">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="card-title text-gradient mb-1">{edu.degree}</h5>
                <h6 className="text-muted mb-1">{edu.institution}</h6>
                <div className="d-flex align-items-center text-muted small">
                  <AiOutlineCalendar className="me-2" />
                  {edu.period}
                  <AiOutlineEnvironment className="ms-3 me-2" />
                  {edu.location}
                </div>
              </div>
            </div>
            <p className="card-text">{edu.description}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="resume-section-content">
      <Row>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="resume-card h-100">
              <Card.Body>
                <h6 className="card-title text-gradient mb-3">
                  {category === "Frontend" && <AiOutlineCode className="me-2" />}
                  {category === "Backend" && <AiOutlineDatabase className="me-2" />}
                  {category === "Database" && <AiOutlineDatabase className="me-2" />}
                  {category === "Tools & Others" && <AiOutlineCloud className="me-2" />}
                  {category}
                </h6>
                <div className="skills-grid">
                  {skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} bg="primary" className="me-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const renderCertifications = () => (
    <div className="resume-section-content">
      <Row>
        {certificationsData.map((cert, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="resume-card h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <AiOutlineTrophy className="text-warning me-2" size={24} />
                  <div>
                    <h6 className="card-title text-gradient mb-1">{cert.name}</h6>
                    <small className="text-muted">{cert.issuer} • {cert.date}</small>
                  </div>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  <AiOutlineEye className="me-1" />
                  View Certificate
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const renderPDFViewer = () => (
    <div className="resume-section-content">
      <Card className="resume-card">
        <Card.Body>
          <div className="text-center mb-4">
            <h5 className="text-gradient mb-3">PDF Resume</h5>
            <a
              href="/CV_Mohamed_Amine_FRAD.pdf"
              download
              className="btn btn-primary me-3"
            >
              <AiOutlineDownload className="me-2" />
              Download CV
            </a>
          </div>
          
          <div className="pdf-container">
            <Document
              file="/CV_Mohamed_Amine_FRAD.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex justify-content-center"
              loading={
                <div className="loading-container">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-3 text-muted">Loading CV...</p>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={width > 786 ? 1.2 : 0.8}
                className="pdf-page"
              />
            </Document>
            
            {numPages && (
              <div className="pdf-navigation mt-3">
                <button
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </button>
                <span className="text-muted">
                  Page {pageNumber} of {numPages}
                </span>
                <button
                  className="btn btn-outline-primary btn-sm ms-2"
                  onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                  disabled={pageNumber >= numPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'experience', label: 'Experience', icon: <AiOutlineBook /> },
    { id: 'education', label: 'Education', icon: <AiOutlineBook /> },
    { id: 'skills', label: 'Skills', icon: <AiOutlineCode /> },
    { id: 'certifications', label: 'Certifications', icon: <AiOutlineTrophy /> },
    { id: 'pdf', label: 'PDF View', icon: <AiOutlineEye /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return renderExperience();
      case 'education':
        return renderEducation();
      case 'skills':
        return renderSkills();
      case 'certifications':
        return renderCertifications();
      case 'pdf':
        return renderPDFViewer();
      default:
        return renderExperience();
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <AnimatedBackground enabled={true} />
        <Particle />
        
        {/* Header */}
        <Row style={{ justifyContent: "center", marginBottom: "3rem" }}>
          <Col md={10} className="text-center">
            <h1 className="heading-modern text-fade-in" style={{ marginBottom: "1rem" }}>
              My <strong className="text-gradient">Resume</strong>
            </h1>
            <p className="subheading-modern text-loading">
              Professional experience, education, and skills overview
            </p>
          </Col>
        </Row>

        {/* Navigation Tabs */}
        <Row style={{ justifyContent: "center", marginBottom: "2rem" }}>
          <Col md={10}>
            <div className="resume-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span className="ms-2">{tab.label}</span>
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Content */}
        <Row style={{ justifyContent: "center" }}>
          <Col md={10}>
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
