import React from "react";
import logo from "../assets/logo.png";

function HowItWorks() {
  return (
    <div className="col-lg-4 mx-auto my-5">
      <form className="bg-white p-5 rounded-5 shadow">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" height={100} />
          <h2>Wanna Donate?</h2>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Name</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" required />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input type="email" className="form-control" required />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Phone</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" required />
          </div>
        </div>
        <div className="mb-4 row">
          <label className="col-sm-3 col-form-label">Amount</label>
          <div className="col-sm-9">
            <input type="number" className="form-control" required />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-light px-4">
            Donate
          </button>
        </div>
      </form>
    </div>
  );
}

export default HowItWorks;
