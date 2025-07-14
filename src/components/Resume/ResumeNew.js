import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import AnimatedBackground from "../AnimatedBackground";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <AnimatedBackground enabled={true} />
        <Particle />
        <Row style={{ justifyContent: "center", marginBottom: "2rem" }}>
          <Col md={10} className="text-center">
            <h1 className="heading-modern text-fade-in" style={{ marginBottom: "1rem" }}>
              My <strong className="text-gradient">CV</strong>
            </h1>
            <p className="subheading-modern text-loading">
              Download or view my Curriculum Vitae below.
            </p>
            <a
              href="/CV_Mohamed_Amine_FRAD.pdf"
              download
              className="btn btn-primary mt-3"
            >
              <AiOutlineDownload className="me-2" />
              Download CV
            </a>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={10}>
            <Card className="resume-card">
              <Card.Body>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
