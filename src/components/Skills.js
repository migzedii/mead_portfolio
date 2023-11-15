import { Container, Row, Col } from "react-bootstrap";
import WorkPic from '../assets/img/Trend_Micro.png';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="skills">
        <h1>Skills & Experience</h1>
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={5}>
              <div className="skill-bx">
                <h2>Languages</h2>
                <span>
                  C, C++, HTML, CSS, PHP, Java, JavaScript, ReactJS, SQL, R
                </span>
              </div>
              <div className="skill-bx">
                <h2>Tools</h2>
                <span>
                  Visual Studio Code, MySQL, Figma, GitHub, RStudio
                </span>      
             </div>
            </Col>
            <Col xs={12} md={6} xl={7}>
              <div className="skill-bx">
                <h2>Threat Hunting Team Intern at Trend Micro Inc. (2022)</h2>
                  <p>• Assisted in sourcing and identifying malicious threats to provide early detection before customer impact.</p>
                  <p>• Inspected suspicious URLs collected from scam-related posts.</p>
                  <p>• Submission of processed data to the Threat Monitoring team for scam validation.</p>   
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
