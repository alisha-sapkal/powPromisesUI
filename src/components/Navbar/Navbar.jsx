import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="navbar d-flex justify-content-between align-items-center px-4 py-2 bg-light w-100">
      <Link to="/"><img src={logo} alt="Logo" height="80" /></Link>

      <ul className="nav d-flex flex-row gap-4 mb-0 position-relative">
        <li className="nav-item">
          <Link to="/browse-fundraisers" className="nav-link text-black">Browse Fundraisers</Link>
        </li>

        <li className="nav-item position-relative">
          <span
            className="nav-link text-black d-flex align-items-center"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Fundraise To
            <ChevronDown className="ms-1" size={16} style={{ cursor: 'pointer' }} />
          </span>

          {showDropdown && (
            <div
              className="dropdown-menu show mt-1"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="dropdown-item">Medical</span>
              <span className="dropdown-item">Education</span>
              <span className="dropdown-item">Emergency</span>
            </div>
          )}
        </li>

        <li className="nav-item">
            <Link to="/how-it-works" className="nav-link text-black">How it Works</Link>
        </li>
      </ul>

      <div className="d-flex gap-3">
        <button className="btn btn-dark"><Link to="/start-fundraising" className="nav-link text-white">Start Fundraising</Link></button>
        <button className="btn btn-outline-dark"><Link to="/auth" className="nav-link text-black">Sign In</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
