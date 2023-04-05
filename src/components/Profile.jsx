import MyNav from "./MyNav";
import image2 from "../avatar.png";


const Profile = () => (
  <>
    <MyNav />
    <div className="container-fluid p-0 bg-dark min-vh-100 pb-3">
      <div className="container d-flex align-items-center text-light p-0 mb-3 pt-5">
        <div className="container w-50">
          <h1 className="display-4 fw-semibold m-0">Edit Profile</h1>
          <hr className="border border-secondary border-1 opacity-50" />
          <div className="row">
            <div className="col-xxl-2 col-lg-2 col-xl-2 col-xxl-2 p-0 ps-2 position-relative">
              <img src={image2} style={{ width: "150px" }} alt="avatar" />
              <span className="position-absolute top-10 start-40 translate-middle px-2 py-1 bg-dark border border-light rounded-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </span>
            </div>
            <div className="col-xxl-8 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 col-xxl-8 offset-xxl-1">
              <div className="border border-1 border-dark p-2 bg-secondary fw-semibold mb-4">
                Strive student
              </div>
              <div>
                <h4 className="text-light opacity-75 mb-3">Language:</h4>
              </div>
              <div>
                <div className="dropend me-auto"></div>
              </div>
              <hr className="border border-secondary border-1 opacity-50 mt-4" />
              <h4 className="text-light opacity-75 mt-5">Maturity Settings:</h4>
              <div className="d-grid gap-2">
                <div className="row">
                  <div className="col-8">
                    <button
                      className="text-center fw-semibold w-100 btn btn-secondary opacity-75 text-light opacity-100 p-0 py-1 px-3 mt-3 mb-3"
                      type="button"
                    >
                      ALL MATURITY RATINGS
                    </button>
                  </div>
                </div>
                <p>
                  Show Titles of <strong>All maturity ratings</strong> for this
                  profile
                </p>
                <div className>
                  <button
                    type="button"
                    className="btn btn-outline-secondary w-25 py-3 me-3 fw-semibold"
                  >
                    E D I T
                  </button>
                </div>
              </div>
              <hr className="border border-secondary border-1 opacity-50" />
              <h4 className="text-light opacity-75 mt-4">Autoplay controls</h4>
              <div className="d-flex align-items-center">
                <input
                  className="display-6 form-check-input bg-dark text-secondary align-items-center m-0 me-3"
                  type="checkbox"
                  defaultValue
                  id="firstCheckbox"
                />
                <label
                  className="form-check-label fw-semibold"
                  htmlFor="firstCheckbox"
                >
                  Autoplay next episode in a series on all devices.
                </label>
              </div>
              <div className="d-flex align-items-center mt-2 mb-5">
                <input
                  className="display-6 form-check-input bg-dark text-secondary align-items-center m-0 me-3"
                  type="checkbox"
                  defaultValue
                  id="firstCheckbox1"
                />
                <label
                  className="form-check-label fw-semibold"
                  htmlFor="firstCheckbox1"
                >
                  Autoplay previews while browsing on all devices.
                </label>
              </div>
            </div>
            <hr className="border border-secondary border-1 opacity-50 mb-4" />
            <div className="d-flex justify-content-around">
              <button
                type="button"
                className="btn btn-outline-secondary w-25 py-3 me-3 fw-semibold"
              >
                S A V E
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary w-25 py-3 me-3 fw-semibold"
              >
                C A N C E L
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary w-50 py-3 fw-semibold"
              >
                D E L E T E &nbsp;&nbsp; P R O F I L E
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

    


export default Profile