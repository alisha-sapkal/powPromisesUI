import React from "react";
import vatDog from "../../assets/Home/vaterinary.png";
import logo from "../../assets/logo.png";
import dogPet from "../../assets/Home/imge3.png";

function Section() {
  return (
    <div className="bg-light min-vh-100" style={{ backgroundColor: "#EFECEC" }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="pb-2 border-bottom border-warning border-3 d-inline-block">
            Animal Fundraising and Crowdfunding
          </h1>
        </div>

        <div className="row justify-content-center mb-5">
          <div
            className="col-lg-10 text-center fw-light"
            style={{ fontSize: "1.2rem" }}
          >
            <p>
              Crowdfunding and Fundraising for Animal-related causes is an
              alternative method for individuals, NGOs, and corporate
              organisations to collect funds for costly medical treatments of
              pets and animals. Similarly, rescue organisations, animal
              shelters, and animal adoption groups can receive funds from
              numerous individuals to sustain daily expenses, including
              providing nutritious food, adequate hygiene and daily veterinary
              care.
            </p>
          </div>
        </div>

        <div className="fw-light">
          <div className="row align-items-center justify-content-center g-5 p-5">
            <div className="col-md-6 text-start">
              <h4 className="mb-3">
                Veterinary Expenses and Pet Surgeries Can Be Very Expensive for
                Many Individuals and NGOs.
              </h4>
              <p>
                The pain and suffering that pets and animals experience is
                heart-wrenching. The sight of these animals suffering makes
                everyone want to provide them with care and assistance to
                relieve this pain. Unfortunately, the cost of surgeries and vet
                bills are very expensive. The infrastructure is not adequate.
                Numerous individuals, NGOs and corporate organisations
                constantly seek funds to support these animals. Ketto's Animal
                Fundraising and Animal Crowdfunding can help!
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={vatDog}
                alt="Veterinary Care"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

          <div className="row align-items-center justify-content-center g-5 p-5">
            <div className="col-md-4">
              <img
                src={logo}
                alt="Veterinary Care"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6 text-start">
              <h4 className="mb-3">Use Animal Crowdfunding.</h4>
              <p>
                Don't be disheartened about the recurring expenses and being
                unable to provide the basic needs of these loving animals and
                pets. Instead, Start an Animal Crowdfunding Campaign with Ketto
                Today! Ketto is rated the Ketto is a Crowdfunding Platform based
                out of India In Asia for Animal Fundraising. Animal Crowdfunding
                is the simplest and quickest way to support individuals who want
                to assist such animal fundraising causes. Similarly, friends,
                family and numerous corporate entities are waiting to contribute
                funds to animal-related charities and fundraisers on Ketto's
                Online Crowdfunding Platform.
              </p>
            </div>
          </div>

          <div className="row align-items-center justify-content-center g-5 p-5">
            <div className="col-md-6 text-start">
              <h4 className="mb-3">
                Start An Animal Fundraising Campaign For Pet Or Any Animal.
              </h4>
              <p>
                On Ketto, you can Start A Fundraiser Campaign in minutes to
                assist or pay for vet bills and pet surgery costs. You can also
                help bring in funds by sharing ongoing animal campaigns that you
                feel require mentioning in your friend circles and corporate
                network. Animal and Pet Fundraising Campaigns can give countless
                individuals a means to express their support in a monetary form.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={dogPet}
                alt="Veterinary Care"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
