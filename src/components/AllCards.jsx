import { Component } from "react";
import SingleCard from "./SingleCard";

import {
  Alert, Spinner,
} from "react-bootstrap";


class AllCards extends Component {
  state = {
    HarryPotter: [],
    LOR: [],
    ResidentE: [],
    isLoading: true
  };

  requestServer = async (endpoint, status) => {
    try {
      const response = await fetch(endpoint);


    if (response.ok) {
        const data = await response.json();
        this.setState({ [status]: data.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }

  };

  componentDidMount() {
    this.requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=harry%20potter",
      "HarryPotter"
    );
    this.requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=Lord%20Of%20Rings",
      "LOR"
    );
    this.requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=Resident%20Evil",
      "ResidentE"
    );

  }

  render() {
    return (
      <>
        <div className="container-fluid p-0">
          <div className="container-fluid my-2 p-0">
            <h2 className="text-light">Trending now</h2>
          </div>

          <div className="">
            <div className="container-fluid px-0 mt-3">
              <div
                className="row row-cols-6 justify-content-between g-3 d-flex flex-nowrap pb-3"
                style={{ overflowX: "scroll", overflowY: "hidden" }}
              >
                {this.state.isLoading && !this.state.error && (
                  <Spinner animation="border" variant="light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {this.state.error && !this.state.isLoading && (
                  <Alert variant="danger">
                    {this.state.errorMsg
                      ? this.state.errorMsg
                      : "Errore nel reperire i dati"}
                  </Alert>
                )}
                ;
                {this.state.HarryPotter.map((HarryPotter) => (
                  <SingleCard
                    key={HarryPotter.imdbID}
                    src={HarryPotter.Poster}
                    alt={HarryPotter.Title}
                    title={HarryPotter.Title}
                    HarryPotter={HarryPotter}
                  />
                ))}
                ;
              </div>
            </div>
          </div>

          <div className="container-fluid my-2 p-0">
            <h2 className="text-light">Watch it Again</h2>
          </div>

          <div className="">
            <div className="container-fluid px-0 mt-3">
              <div
                className="row row-cols-6 justify-content-between g-3 d-flex flex-nowrap pb-3"
                style={{ overflowX: "scroll", overflowY: "hidden" }}
              >
                {this.state.isLoading && !this.state.error && (
                  <Spinner animation="border" variant="light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {this.state.error && !this.state.isLoading && (
                  <Alert variant="danger">
                    {this.state.errorMsg
                      ? this.state.errorMsg
                      : "Errore nel reperire i dati"}
                  </Alert>
                )}
                ;
                {this.state.LOR.map((LOR) => (
                  <SingleCard
                    key={LOR.imdbID}
                    src={LOR.Poster}
                    alt={LOR.Title}
                    title={LOR.Title}
                    LOR={LOR}
                  />
                ))}
                ;
              </div>
            </div>
          </div>

          <div className="container-fluid my-2 p-0">
            <h2 className="text-light">New Releases</h2>
          </div>
          <div className="">
            <div className="container-fluid px-0 mt-3">
              <div
                className="row row-cols-5 justify-content-between g-3 d-flex flex-nowrap pb-3"
                style={{ overflowX: "scroll", overflowY: "hidden" }}
              >
                {this.state.isLoading && !this.state.error && (
                  <Spinner animation="border" variant="light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {this.state.error && !this.state.isLoading && (
                  <Alert variant="danger">
                    {this.state.errorMsg
                      ? this.state.errorMsg
                      : "Errore nel reperire i dati"}
                  </Alert>
                )}
                ;
                {this.state.ResidentE.map((ResidentE) => (
                  <SingleCard
                    key={ResidentE.imdbID}
                    src={ResidentE.Poster}
                    alt={ResidentE.Title}
                    title={ResidentE.Title}
                    ResidentE={ResidentE}
                  />
                ))}
                ;
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AllCards;