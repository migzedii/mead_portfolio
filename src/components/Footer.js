import { Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="social-icon">
          <a href="#"><img src={navIcon1} alt="Icon" /></a>
          <a href="#"><img src={navIcon2} alt="Icon" /></a>
          <a href="#"><img src={navIcon3} alt="Icon" /></a>
        </div>
        <p>&copy; 2023. All Rights Reserved</p>
      </Container>
    </footer>
  )
}
