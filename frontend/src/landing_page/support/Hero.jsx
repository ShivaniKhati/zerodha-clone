import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      {/* Top Section */}
      <div
        className="p-3 p-md-5 d-flex justify-content-between align-items-center"
        id="supportWrapper"
      >
        <h4 className="mb-0">Support Portal</h4>
        <a href="" className="text-decoration-none">
          Track Tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="row p-3 p-md-5">

        {/* Left Column */}
        <div className="col-12 col-md-7 p-3 p-md-4">

          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="d-flex flex-column gap-3">
            <a href="" >
              Track account opening
            </a>

            <a href="" >
              Track segment activation
            </a>

            <a href="" >
              Intraday margins
            </a>

            <a href="">
              Kite user manual
            </a>
          </div>

        </div>

        {/* Right Column */}
        <div className="col-12 col-md-5 p-3 p-md-4">

          <h1 className="fs-3 mb-4">
            Featured
          </h1>

          <ol className="ps-4">

            <li className="mb-3">
              <a href="" >
                Current Takeovers and Delisting - January 2024
              </a>
            </li>

            <li>
              <a href="" >
                Latest Intraday leverages - MIS & CO
              </a>
            </li>

          </ol>

        </div>

      </div>
    </section>
  );
}

export default Hero;