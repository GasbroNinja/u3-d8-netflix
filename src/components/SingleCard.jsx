import { Component } from "react";
import "../App.css"


class SingleCard extends Component {
  render() {
    

    return (
      <>
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
                {this.props.title}
              </label>
            </div>
            <img
              id="imgtitlelabel"
              src={this.props.src}
              className=" border-none"
              alt={this.props.alt}
              style={{
                maxHeight: "200px",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </>
    );
  }
};

export default SingleCard;