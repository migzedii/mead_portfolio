import { Container } from "react-bootstrap";
import { IconButton } from "rsuite";
import { LinkedIn, Email, GitHub } from "@mui/icons-material";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="social-icon">
          <IconButton href="https://linkedin.com/in/miguelleedriennedingcon" target="_blank">
            <LinkedIn style={{fill: "white"}} />
          </IconButton>
          <IconButton href="mailto:meadingcon12@gmail.com">
            <Email style={{fill: "white"}} />
          </IconButton>
          <IconButton href="https://github.com/migzedii" target="_blank">
            <GitHub style={{fill: "white"}} />
          </IconButton>
          <p>&copy; 2023. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  )
}
