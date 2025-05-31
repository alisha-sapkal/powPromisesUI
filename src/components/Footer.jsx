import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  const links = [
    {
      title: "Causes",
      links: [
        {
          text: "Medical crowdfunding",
          href: "https://www.ketto.org/cause/medical-fundraising",
        },
        {
          text: "Cancer Crowdfunding",
          href: "https://www.ketto.org/cause/cancer-crowdfunding",
        },
        {
          text: "Transplant Crowdfunding",
          href: "https://www.ketto.org/cause/transplant-crowdfunding",
        },
        {
          text: "Education Crowdfunding",
          href: "https://www.ketto.org/cause/fundraising-for-education",
        },
        {
          text: "Sports Crowdfunding",
          href: "https://www.ketto.org/cause/sports-crowdfunding",
        },
        {
          text: "Child Welfare",
          href: "https://www.ketto.org/cause/help-children",
        },
        {
          text: "Animal Fundraisers",
          href: "https://www.ketto.org/cause/animal-fundraising",
        },
      ],
    },
    {
      title: "How it works?",
      links: [
        {
          text: "Fundraising for NGOs",
          href: "https://www.ketto.org/how_it_works/fundraising-ideas-for-ngos.php",
        },
        {
          text: "Sponsor A Child",
          href: "https://www.ketto.org/new/sip?utm_source=internal_Ketto&utm_term=footer",
        },
        {
          text: "Fundraising Tips",
          href: "https://www.ketto.org/support/fundraising-tips-ideas.php",
        },
        {
          text: "What is Crowdfunding?",
          href: "https://www.ketto.org/crowdfunding",
        },
        {
          text: "Corporates",
          href: "https://www.ketto.org/how_it_works/fundraising-ideas-for-corporates.php",
        },
        {
          text: "Withdraw Funds",
          href: "https://customerhappiness.ketto.org/portal/en/kb/funds-withdrawal",
        },
        {
          text: "Browse Fundraiser",
          href: "https://www.ketto.org/crowdfunding/fundraisers",
        },
        { text: "Find Hospitals", href: "https://www.ketto.org/hospitals" },
      ],
    },
    {
      title: "About Us",
      links: [
        {
          text: "Team Ketto",
          href: "https://www.ketto.org/new/about/about-us",
        },
        { text: "In The News", href: "https://www.ketto.org/new/press-club" },
        { text: "Web Stories", href: "https://www.ketto.org/web-stories" },
        { text: "Careers", href: "https://ketto.kekahire.com/" },
        { text: "Ketto Blog", href: "https://www.ketto.org/blog" },
        {
          text: "Success Stories",
          href: "https://www.ketto.org/new/success-stories",
        },
        {
          text: "Is Ketto Genuine?",
          href: "https://www.ketto.org/blog/is-ketto-genuine",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          text: "Medical Finance",
          href: "https://www.ketto.org/medical-finance-loans",
        },
        {
          text: "FAQs & Help Center",
          href: "https://customerhappiness.ketto.org/portal/en/kb",
        },
        {
          text: "Are Ketto Campaigns Genuine?",
          href: "https://www.ketto.org/blog/are-campaigns-in-ketto-genuine",
        },
        {
          text: "Fundraiser Video",
          href: "https://www.ketto.org/support/campaign-video.php",
        },
        {
          text: "Trust & Safety",
          href: "https://customerhappiness.ketto.org/portal/en/kb/trust-safety-queries",
        },
        {
          text: "Plans & Pricing",
          href: "https://www.ketto.org/support/plans-and-pricing.php",
        },
        {
          text: "Contact Us",
          href: "https://www.ketto.org/support/contact-us.php",
        },
      ],
    },
  ];

  return (
    <footer className="text-light" style={{ backgroundColor: "#0B4341" }}>
      <div className="container py-5">
        <div className="row border-bottom border-secondary border-1 p-3">
          <div className="col-md-3 col-lg-3 col-12 col-sm-7 mb-4 text-start">
            <p className="don fw-bold">DONATE</p>
            <div className="d-flex gap-3 mb-3 fs-4">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="followers mb-3">
              <h2 className="mb-0">2.5M +</h2>
              <span>Followers</span>
            </div>
            <div className="reach-out">
              <b>For any queries</b>
              <br />
              <b>Email: info@ketto.org</b>
              <br />
              <b>Contact No: +91 9930088522</b>
            </div>
          </div>

          {links.map((section, idx) => (
            <div key={idx} className="col-md-2 col-sm-6 col-12 mb-4">
              <h4>{section.title}</h4>
              <ul className="list-unstyled">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      className="text-light text-decoration-none"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 small fw-light text-white">
          <p>
            Copyright © 2025 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
            Terms of Use | Privacy Policy | AML Policy | Use of cookies
          </p>
          <p>
            Ketto is a private limited company operating an online intermediary
            platform providing crowdfunding services for medical, social and
            charitable causes. We facilitate transactions between contributors
            and campaigners. Ketto does not provide any financial benefits in
            any form whatsoever to any person making contributions on its
            platform.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
