import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css"


const CardDetail = (props) => {
    const param = useParams();
    const [comment, setComment] = useState([])
    const [movie, setMovie] = useState("")


      useEffect ( () => {
        const funcData = async () => {
        try {
            const movieinfo = await fetch(`http://www.omdbapi.com/?apikey=b4f56189&i=${param.id}`);
            
            const moviecomment = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${param.id}`,{
            headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMjRlYTBlNzg3MDAwMTRkODkxZTMiLCJpYXQiOjE2ODA1NDkwOTksImV4cCI6MTY4MTc1ODY5OX0.wZNhhXeC4pLpWKZ9WtjZw4t7oG5_9akjS-5YIWSviJg",
          },
            });
            if(movieinfo.ok){
                const movieinfodata = await movieinfo.json();
                console.log(movieinfodata);

                setMovie(movieinfodata)
            };

            if(moviecomment.ok){
                const moviecommentdata = await moviecomment.json();
                console.log(moviecommentdata);
                setComment(moviecommentdata);
            };
        } catch(error) {

        }
      }
      funcData() }, [])




    return (
      <>
        <div className="container">
          <div
            id="imgtitlelabel"
            className="mycardanimation mycardanimationback col-6 cols-sm-4 col-md-4 col-lg-2 border-none"
            style={{ maxHeight: "100%" }}
          >
            <div
              id="imgtitlelabel"
              className="card border-none d-flex border-dark "
              style={{ maxHeight: "100%", position: "relative" }}
            >
              <div
                id="imgtitlelabel"
                className="card-body bg-trasparent border-dark d-flex align-items-center justify-content-center p-0"
                style={{
                  minHeight: "150px",
                  position: "absolute",
                  zIndex: "1000",
                  top: "0",
                  left: "0",
                  minWidth: "180px",
                }}
              >
                <label
                  htmlFor="imgtitlelabel"
                  id="imgtitlelabel"
                  className="h6 titleanimation titleanimationback card-title text-light p-0 m-0 bg-dark d-flex justify-content-center border border-3 px-2 border-secondary rounded-4 align-items-center"
                  style={{ marginTop: "100px" }}
                >
                  {movie.Title}
                </label>
              </div>
              <img
                id="imgtitlelabel"
                src={movie.Poster}
                className=" border-none"
                alt={movie.Title}
                style={{
                  maxHeight: "200px",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                  objectFit: "cover",
                }}
            //guardare prop online epicode
              />
            </div>
          </div>
        </div>
      </>
    );


};

export default CardDetail







