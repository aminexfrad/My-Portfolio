import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import OptimizedImage from "../OptimizedImage";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <OptimizedImage 
        src={props.imgPath} 
        alt="card-img" 
        className="card-img-top"
        style={{ 
          width: '100%', 
          height: '200px', 
          objectFit: 'cover',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px'
        }}
      />
      <Card.Body>
        <Card.Title style={{ 
          fontWeight: '600', 
          color: '#c770f0',
          marginBottom: '15px'
        }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ 
          textAlign: "justify",
          lineHeight: '1.6',
          color: '#666',
          marginBottom: '20px'
        }}>
          {props.description}
        </Card.Text>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-primary"
              href={props.demoLink}
              target="_blank"
              style={{
                borderColor: '#667eea',
                color: '#667eea',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
