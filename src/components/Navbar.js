import React from "react";
import logo from "../assets/pos.png";  

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white  shdow ">
      <div className="container d-flex justify-content-between">
        <div>
                <img
                src={logo}
                alt="Logo"
                style={{ height: "65px", objectFit: "contain" }}
                />
        </div>
        
        <div>
            <div className="d-flex align-items-center justify-content-between">

                    {/* 🔍 Search Box */}
                    <div className="input-group w-50">
                  
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                    />
                      <span className="input-group-text bg-white">
                        <i className="bi bi-search text-danger font-bold"></i>
                    </span>
                    </div>

                    {/* 👤 User + Icons */}
                    <div className="d-flex align-items-center gap-4">

                            {/* Username */}
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-person-circle fs-5"></i>
                                <span className="fw-semibold">Hello, User</span>
                            </div>

                            {/* Wishlist */}
                            <div style={{ cursor: "pointer" }}>
                                <i className="bi bi-heart text-danger fs-5"></i>
                            </div>

                            {/* Cart */}
                            <div style={{ cursor: "pointer" }}>
                                <i className="bi bi-cart fs-5"></i>
                            </div>

                    </div>

                </div>
        </div>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Billing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Reports</a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
