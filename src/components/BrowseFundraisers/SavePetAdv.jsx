import React from "react";
import savePet from "../../assets/savePet.png";
import { useNavigate } from "react-router-dom";

function SavePetAdv() {
const navigate = useNavigate();
  const handleButton = () => {
    navigate('/how-it-works')
  }

  return (
    <div
      className="position-relative"
      style={{ height: "400px", overflow: "hidden" }}
    >
      <img
        src={savePet}
        alt="savePet"
        className="w-100 h-100"
        style={{ objectFit: "cover" }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
        }}
      />
      <h1
        className="position-absolute font-size-30 font-weight-bold text-white m-0"
        style={{
          top: "30%",
          left: "5%",
          transform: "translateY(-50%)",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        Save a pet every month
      </h1>
      <p
        className="col-3 position-absolute font-size-18 font-weight-bold text-white m-0"
        style={{
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        Join 421,908 monthly contributors with Social Impact Plan & start saving
        needy children every month
      </p>
      <button
        className="position-absolute font-size-18 font-weight-bold text-white m-0"
        style={{
          top: "70%",
          left: "5%",
          transform: "translateY(-50%)",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
        onClick={handleButton}
      >
        Start Giving Monthly
      </button>
    </div>
  );
}

export default SavePetAdv;
