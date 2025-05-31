import React, { useState } from "react";
import surgery from "../../assets/Home/petsurgery.png";
import vaterinaryBills from "../../assets/Home/vat.png";
import shelter from "../../assets/Home/animalshelter.png";
import rescue from "../../assets/Home/animalrescue.png";
import kennels from "../../assets/Home/4.png";
import other from "../../assets/Home/paw.png";

function CauseForFund() {
  const causes = [
    { img: surgery, cause: "PET SURGERIES", description: "START A CROWNFUNDING CAMPAIGN TO COVER THE COST OF YOUR PET'S SURGERY." },
    { img: vaterinaryBills, cause: "EXPENSIVE VETERINARIAN BILLS", description: "ANIMAL VET BILLING CAN BE GET EXPENSIVE. CROWDFUNDING HERE CAN HELP YOU PAY HIGH VATENARY BILLS." },
    { img: shelter, cause: "ANIMAL SHELTERS", description: "RAISE MONEY THROUGH ONLINE CROWDFUNDING TO SUPPROT YOUR LOCAL ANIMAL SHELTER." },
    { img: rescue, cause: "STRAY ANIMALS RESCUE GROUPS", description: "INJURED, ABANDONED ANIMAL NEEDS HELP. SUPPORT ANIMAL RESCUE GROUPS BY STARTING A CROWDFINDING CAMPAIGN HERE." },
    { img: kennels, cause: "ANIMAL KENNELS AND ADOPTION CENTERS", description: "PROVIDING FOOD, SHELTER AND MEDICAL CARE TO ANIMALS AND PETS IS COSTLY. CROWDFUNDING HELP YOU COVER THIS COST." },
    { img: other, cause: "OTHER ANIMAL CAUSES", description: "THERE ARE MANY ANIMAL CAUSES THAT REQUIRE URGENT FUNDS. START AN ANIMAL CROWDFINDING CAMPAIGN HERE TODAY!" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="text-center">
      <div className="my-5">
        <h1 className="border-bottom border-warning border-3 d-inline-block">
          What Pet And Animal Causes Need Funds?
        </h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
        {causes.map((item, index) => (
          <div
            key={index}
            className="rounded-3 text-center px-4 py-4 position-relative"
            style={{
              backgroundColor: "#EFECEC",
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="border-bottom border-warning border-3 p-3">
              <img
                src={item.img}
                alt={item.cause}
                height="100"
                className="rounded-2 shadow-lg"
              />
            </div>
            <h6 className="mt-3 fw-semibold">{item.cause}</h6>

            <div
              className={`mt-2 text-muted small transition-opacity lowercase  ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                height: hoveredIndex === index ? "auto" : 0,
                overflow: "hidden",
                transition: "opacity 0.4s ease",
              }}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CauseForFund;
