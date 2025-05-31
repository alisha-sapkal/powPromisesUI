import React from "react";
import { PiPiggyBank } from "react-icons/pi";
import { LuHandHelping } from "react-icons/lu";
import { TbClockHeart } from "react-icons/tb";
import { FaRegFaceTired } from "react-icons/fa6";

function WhyStarted() {
  const helps = [
    {
      img: <PiPiggyBank />,
      heading: "Cost Of Pet Surgery & Treatment Is Very High",
      description:
        "In India, Animals dont get medical insurance like us humans. However, when our pets fall ill and require immediate medical care, our savings are not enough to cover the expensive surgery and treatment costs. By starting an Animal Crowdfunding, pet owners can receive small contributions from a large group of people and ensure their pets get the needed medical care.",
    },
    {
      img: <LuHandHelping />,
      heading: "Volunteers Of Animal Shelters Are Unable To Get Adequate Funds",
      description:
        "Most animal shelters require constant financial help to provide food and primary healthcare facilities. However, the number of individuals volunteering at shelters is very low. Hence, they have to dedicate every moment to caring for the animals. Starting an animal crowdfunding campaign to support the animal shelter allows them to use social media and the power of the internet to raise awareness and get funding.",
    },
    {
      img: <TbClockHeart />,
      heading: "Rescuing And Rehabilitation Are Expensive",
      description:
        "Saving abandoned animals, rescuing injured and helpless animals require different types of equipment. Similarly, providing these animals with a haven and treating their injuries is expensive. Rehabilitation is costly, and the groups that conduct such activities are very few. Therefore, we urge rescue groups to start a crowdfunding campaign for animals on Ketto to ensure all their expenses can be taken care of through fundraising online for such causes.",
    },
    {
      img: <FaRegFaceTired />,
      heading: "Animal Conservation Projects",
      description:
        "Animal conservation Organisations work tirelessly to protect critical and endangered species, animals, and ecosystems of global importance. They need to collaborate with numerous local communities, government authorities, forest departments and other organisations. These efforts to protect the global ecosystem and animal species require funds. Animal Conservation Organisations and groups can receive contributions online through Ketto’s Online Crowdfunding Platform for Animal Fundraising.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FFFBED" }} className="col-lg-12">
      <h1 className="col-8 border-bottom border-warning border-3 d-inline-block p-5">
        Why Do Numerous Individuals, NGOs and Organisations Start Crowdfunding
        For Animals?
      </h1>
      <div>
        <div className="d-flex flex-wrap justify-content-center gap-5 p-5">
          {helps.map((item, index) => (
            <div
              key={index}
              className="text-center p-5"
              style={{ width: "45%" }}
            >
              <div
                className="color-warning"
                style={{
                  fontSize: "4rem",
                  height: "5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.img}
              </div>

              <h4>{item.heading}</h4>
              <p className="font-size-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyStarted;
