import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import LogoNetflix from "./LogoNetflix";
import image1 from "../netflix_logo.png";


const MyNav = props => {
  const location = useLocation();


  return (
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
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active fw-bold" : ""
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/tvshow" ? "active fw-bold" : ""
                    }`}
                    to="/"
                  >
                    TvShow
                  </Link>
                </div>
                <div>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/movies" ? "active fw-bold" : ""
                    }`}
                    to="/movies"
                  >
                    Movies
                  </Link>
                </div>
                <div>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/recentlyadded"
                        ? "active fw-bold"
                        : ""
                    }`}
                    to="/recentlyadded"
                  >
                    Recently Added
                  </Link>
                </div>
                <div>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/mylist" ? "active fw-bold" : ""
                    }`}
                    to="/mylist"
                  >
                    My list
                  </Link>
                </div>
              </Nav>
            </span>
          </Navbar.Collapse>
          <Nav className="ms-auto fw-bold gap-2 d-lg-flex d-none d-lg-block">
            <Link
              className={`d-flex align-items-center nav-link ${
                location.pathname === "/search" ? "active fw-bold" : ""
              }`}
              to="/"
            >
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
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/kids" ? "active fw-bold" : ""
              }`}
              to="/"
            >
              KIDS
            </Link>

            <Link
              className={`d-flex align-items-center nav-link ${
                location.pathname === "/notification" ? "active fw-bold" : ""
              }`}
              to="/"
            >
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
            </Link>
            <Link
              className={`d-flex align-items-center nav-link ${
                location.pathname === "/profile" ? "active fw-bold" : ""
              }`}
              to="/profile"
            >
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
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}





export default MyNav;