import { Component } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  InputGroup,
} from "react-bootstrap";
import AllCards from "./AllCards";
import MyFooter from "./MyFooter";


class MyHomePage extends Component {
    state = {
        avatar: null

    }
    render () {
        return (
          <>
            <Container
              fluid
              className="px-0 bg-dark"
              style={{
                minHeight: "100vh",
              }}
            >
              <Container fluid className="d-flex align-items-center mb-3">
                <h2 className="text-light w-25">Tv Shows</h2>

                <InputGroup className="">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Geners &nbsp;&nbsp;&nbsp;"
                    id="input-group-dropdown-1"
                    className=""
                  >
                    <Dropdown.Item href="#">Romance</Dropdown.Item>
                    <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                    <Dropdown.Item href="#">Thriller</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Others</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
                <div className="border border-secondary text-secondary m-2 p-1 d-flex align-items-center justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bar-chart-steps"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z" />
                  </svg>
                </div>
                <div className="border border-secondary text-secondary m-2 p-1 d-flex align-items-center justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-border-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
                  </svg>
                </div>
              </Container>

              <Container fluid>
                <AllCards />
              </Container>

              <Container fluid>
                <MyFooter />
              </Container>
            </Container>
          </>
        );






    };


}

export default MyHomePage;