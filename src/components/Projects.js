import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {
  const projects = [
    {
      title: "AnimeDojo",
      description: "Database",
      imgUrl: projImg1,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgUrl: projImg2,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgUrl: projImg3,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgUrl: projImg1,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgUrl: projImg2,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dignissimos eum possimus explicabo quia sed dolore doloremque illo
              molestiae, quam quae recusandae hic sunt? Quo vero quae ratione
              delectus ab!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
