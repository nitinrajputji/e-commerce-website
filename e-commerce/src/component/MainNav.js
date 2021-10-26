import React, { useState } from "react";

const MainNav = ({ filterItems, unique }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {unique.map((curElem, index) => {
            return (
              <button
                className="btn-group__item"
                key={index}
                onClick={() => filterItems(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MainNav;
