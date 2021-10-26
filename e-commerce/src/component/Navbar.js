import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [searchTerm, setsearchTerm] = useState("");
  const [switchToggle, setswitchToggle] = useState(false);
  const toggle = () => {
    switchToggle ? setswitchToggle(false) : setswitchToggle(true);
  };

  return (
    <>
      <div className="header-main">
        {/* <!-- header --> */}
        <div className="container-main">
          <nav className="main-nav">
            <div className="logo">
              <NavLink to="/" className="main-logo">
                SH<span className="nav-logo">O</span>P
              </NavLink>
            </div>

            <div className="nav-list">
              <ul className={switchToggle ? "toggle" : "notToggle"}>
                <li className="nav-item">
                  <NavLink to="/" className="nav-list-anker">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/product" className="nav-list-anker">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/account" className="nav-list-anker">
                    Account
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-list-anker">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="icon">
              <span>
                <Link to="/cart">
                  <img src="/image/imgi1.jpg" className="cart-icon" alt="" />
                </Link>

                <img
                  src="/image/imgi.png"
                  className="togle-icon"
                  onClick={toggle}
                  alt=""
                />
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
