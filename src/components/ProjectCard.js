import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project_image-box">
        <img src={imgURL} />
        <div className="project_text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
