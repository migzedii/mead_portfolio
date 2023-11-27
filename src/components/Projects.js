import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CertCard } from "./CertCard";
import Proj1 from "../assets/img/Funtasktic_1.png";
import Proj2 from "../assets/img/ODC_1.png"
import Proj3 from "../assets/img/SintomASK_1.png";
import Proj4 from "../assets/img/C-impleTHON_1.png";
import Proj5 from "../assets/img/TMS_1.jpg";
import Proj6 from "../assets/img/BitData_1.png";
import Cert1 from '../assets/img/Certificate_1.png'
import Cert2 from '../assets/img/Certificate_2.png'
import Cert3 from '../assets/img/Certificate_3.jpg'
import Cert4 from '../assets/img/Certificate_4.png'
import Cert5 from '../assets/img/Certificate_5.jpg'
import Cert6 from '../assets/img/Certificate_6.jpg'
import Cert7 from '../assets/img/Certificate_7.png'
import Cert8 from '../assets/img/Certificate_8.png'
import Cert9 from '../assets/img/Certificate_9.png'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Funtasktic",
      description: "A gamified scheduling management software with built-in reward systems.",
      skills: "Skills: JavaScript, HTML, CSS",
      imgUrl: Proj1,
    },
    {
      title: "ODC E-Checkup",
      description: "An appointment system website for a teledermatology clinic with database management that records and manages appointment requests.",
      skills: "Skills: PHP, CSS, Bootstrap",
      imgUrl: Proj2,
    },
    {
      title: "SintomASK",
      description: "A symptom recognition tool that produces initial symptom analysis and a list of possible illnesses derived from the user-provided input.",
      skills: "Skills: Python",
      imgUrl: Proj3,
    },
    {
      title: "C-impleTHON",
      description: "A programming language integrating the characteristics of both C and Python with a mini-compiler that handles a specific file format.",
      skills: "Skills: C, Python, C++",
      imgUrl: Proj4,
    },
    {
      title: "Team Medical Supplies",
      description: "A sales order management system for a medical equipment service focusing on data normalization.",
      skills: "Skills: Java, MySQL",
      imgUrl: Proj5,
    },
    {
      title: "BitData Shop",
      description: "An inventory and order management system that records supply goods and products.",
      skills: "Skills: Java, MySQL",
      imgUrl: Proj6,
    },
  ];

  const certificates = [
    {
      title: "ReactJS for Beginners - Simplilearn",
      skills: "Skills: Git, HTML, CSS, Javascript, ReactJS",
      imgUrl: Cert1,
    },
    {
      title: "Introduction to SQL - Sololearn",
      skills: "Skills: SQL",
      imgUrl: Cert2,
    },
    {
      title: "SQL Intermediate",
      skills: "Skills: SQL",
      imgUrl: Cert3,
    },
    {
      title: "Introduction to Front End Development - Simplilearn",
      skills: "Skills: Javascript, ReactJS",
      imgUrl: Cert4,
    },
    {
      title: "Introduction to Python - Sololearn",
      skills: "Skills: Python",
      imgUrl: Cert5,
    },
    {
      title: "Python Intermediate - Sololearn",
      skills: "Skills: Python",
      imgUrl: Cert6,
    },
    {
      title: "Introduction to Cyber Security - Simplilearn",
      skills: "Skills: Cybersecurity",
      imgUrl: Cert7,
    },
    {
      title: "Ethical Hacking 101 - Simplilearn",
      skills: "Skills: Cybersecurity",
      imgUrl: Cert8,
    },
    {
      title: "Introduction to Ethical Hacking - Simplilearn",
      skills: "Skills: Cybersecurity",
      imgUrl: Cert9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificate</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          certificates.map((project, index) => {
                            return (
                              <CertCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
