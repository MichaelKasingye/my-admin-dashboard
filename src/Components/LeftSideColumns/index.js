import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="col-lg-8">
      <div className="row">
        {/* Sales Card */}
        <div className="col-xxl-4 col-md-6">
          <div className="card info-card sales-card">
            <div className="filter">
              <Link className="icon" to="/" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Today
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    This Month
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    This Year
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Entries <span>| Register your company</span>
              </h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-cart" />
                </div>
                <div className="ps-3">
                  <h6>145</h6>
                  <span className="text-success small pt-1 fw-bold">
                    12%
                  </span>{" "}
                  <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sales Card */}
        
      </div>
    </div>
  );
}

export default index;
