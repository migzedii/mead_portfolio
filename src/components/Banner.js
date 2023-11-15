import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Dingcon_Miguelle.jpg";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Miguelle", "Edi", "Elle" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Miguelle", "Edi", "Elle" ]'><span className="wrap">{text}</span></span></h1>
                <p>I am a computer science graduate from the Polytechnic University of the Philippines interested in Web Development, Software Engineering, and Cybersecurity. I am looking for an opportunity to showcase the knowledge I have acquired and improve my skills through training in a professional setting. In light of this, I offer my service and determination to contribute to the company and expand my knowledge in the field.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={7} xl={4}>
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
