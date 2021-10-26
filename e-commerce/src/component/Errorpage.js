import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div className="error">
        <div className="error-page">
          <h1>404</h1>
          <p>sorry page not found</p>
          <NavLink to="/" className="btn">
            GO To Back
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
