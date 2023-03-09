import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "AnimeDojo",
      description: "Database dasf dsaf dasf dsaf ",
      imgURL: projImg1,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgURL: projImg2,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgURL: projImg3,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgURL: projImg1,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgURL: projImg2,
    },
    {
      title: "AnimeDojo",
      description: "Database",
      imgURL: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
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
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="project-pills mb-4 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Yupfa-pull-left</Tab.Pane>
                <Tab.Pane eventKey="third">adsfdasfadsf</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
