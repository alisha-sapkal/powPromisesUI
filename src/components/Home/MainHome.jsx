import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const MainHome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignInMessage, setShowSignInMessage] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      amount: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      setShowSignInMessage(true);
      toast.error(
        <div>
          <p>Please sign in or create an account to make your donation.</p>
        </div>
      );
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/donations",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setDonationAmount(formData.amount);

        resetForm();

        setShowThankYouModal(true);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setShowSignInMessage(true);
        toast.error("Please sign in to make a donation");
        navigate("/login");
      } else {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
    setDonationAmount("");
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: "#4a8f85" }}
    >
      {showThankYouModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">Thank You! 🎉</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeThankYouModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <div className="mb-4">
                  <i
                    className="fas fa-heart text-danger"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </div>
                <h4 className="mb-3">Your Donation is Appreciated!</h4>
                <p className="mb-2">
                  Thank you for your generous contribution of ${donationAmount}
                </p>
                <p className="text-muted">
                  Your support makes a real difference in the lives of animals
                  in need.
                </p>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={closeThankYouModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 text-white text-start">
            <h1 className="mb-4 text-start">
              Animal Crowdfunding is the easiest way to raise the funds for
              needy animals
            </h1>
            <div className="mt-3 w-75 border-bottom border-warning border-3 d-inline-block">
              Now with 0% platform fees
            </div>
          </div>

          <div className="col-lg-1 d-none d-lg-block"></div>
          <div className="col-lg-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-5 rounded-5 shadow"
            >
              <div className="text-center mb-4">
                <img src={logo} alt="Logo" height={100} />
                <h2>Wanna Donate?</h2>
                {showSignInMessage && (
                  <div className="alert alert-warning mt-2">
                    Please sign in to make a donation
                  </div>
                )}
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Phone</label>
                <div className="col-sm-9">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 row">
                <label className="col-sm-3 col-form-label">Amount</label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="form-control"
                    min="1"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-light px-4"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Donate"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
