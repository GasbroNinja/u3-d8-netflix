import { Component } from "react";
import { Container } from "react-bootstrap";
import AllCards from "./AllCards";
import MyFooter from "./MyFooter";
import Jumbo from "./Jumbo";


class MyHomePage extends Component {

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
          <Jumbo />

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