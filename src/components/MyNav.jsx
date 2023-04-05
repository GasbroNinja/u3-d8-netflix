import { Container, Nav, Navbar } from "react-bootstrap";
import LogoNetflix from "./LogoNetflix";
import image1 from "../netflix_logo.png"


const MyNav = () => (
  <>
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid className="text-light">
        <Navbar.Brand href="#">
          <LogoNetflix src={image1} alt="Logo Netflix" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <span>
            <Nav className="me-auto fw-bold gap-2 d-flex">
              <div>
                <Nav.Link href="#" className="active">
                  Home
                </Nav.Link>
              </div>
              <div>
                <Nav.Link href="#">TvShow</Nav.Link>
              </div>
              <div>
                <Nav.Link href="#">Movies</Nav.Link>
              </div>
              <div>
                <Nav.Link href="#">Recently Added</Nav.Link>
              </div>
              <div>
                <Nav.Link href="#">My list</Nav.Link>
              </div>
            </Nav>
          </span>
        </Navbar.Collapse>
        <Nav className="ms-auto fw-bold gap-2 d-lg-flex d-none d-lg-block">
          <Nav.Link className="d-flex align-items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Nav.Link>
          <Nav.Link href="#">KIDS</Nav.Link>
          <Nav.Link className="d-flex align-items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);





export default MyNav;