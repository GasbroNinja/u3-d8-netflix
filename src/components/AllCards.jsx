import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";
import {
  Alert, Spinner,
} from "react-bootstrap";


const AllCards = () => {

  const [HarryPotter, setHarryPotter] = useState([]);
  const [LOR, setLOR] = useState([]);
  const [ResidentE, setResidentE] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");



  const requestServer = async (endpoint, status) => {
    try {
      const response = await fetch(endpoint);


    if (response.ok) {
        const data = await response.json();

       if(status === "HarryPotter"){
          setHarryPotter(data.Search)
          
       } else if (status === "LOR") {
          setLOR(data.Search)
       } else if (status === "ResidentE") {
          setResidentE(data.Search)
       };
      setIsLoading(false)
      } else {
        setError(true)
        setIsLoading(false)
      }
    } catch (error) {
      setError(true)
      setErrorMsg(error.message)
      setIsLoading(false)

    }

  };

  useEffect(() => {
    requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=harry%20potter",
      "HarryPotter"
    );
    requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=Lord%20Of%20Rings",
      "LOR"
    );
    requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=Resident%20Evil",
      "ResidentE"
    );

  },[]);
  
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
                {isLoading && !error && (
                  <Spinner animation="border" variant="light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {error && !isLoading && (
                  <Alert variant="danger">
                    {errorMsg ? errorMsg : "Errore nel reperire i dati"}
                  </Alert>
                )}
                ;
                {HarryPotter.map((HarryPotter) => (
                  <SingleCard
                    key={HarryPotter.imdbID}
                    id={HarryPotter.imdbID}
                    src={HarryPotter.Poster}
                    alt={HarryPotter.Title}
                    title={HarryPotter.Title}
                    HarryPotter={HarryPotter}
                  />
                ))}
                
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
                {isLoading && !error && (
                  <Spinner animation="border" variant="light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {error && !isLoading && (
                  <Alert variant="danger">
                    {errorMsg ? errorMsg : "Errore nel reperire i dati"}
                  </Alert>
                )}
                ;
                {LOR.map((LOR) => (
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
                {isLoading && !error && (
                  <Spinner animation="border" variant="light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {error && !isLoading && (
                  <Alert variant="danger">
                    {errorMsg ? errorMsg : "Errore nel reperire i dati"}
                  </Alert>
                )}
                ;
                {ResidentE.map((ResidentE) => (
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


export default AllCards;