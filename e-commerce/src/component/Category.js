import React from "react";

function Category() {
  return (
    <>
      <div className="category">
        <div className="row">
          <div className="col-3">
            <a href="#oppo">
              <img src="./image/img9.jpg" alt="catagory" />
            </a>
          </div>
          <div className="col-3">
            <a href="#vivo">
              <img src="./image/img10.jpg" alt="catagory" />
            </a>
          </div>
          <div className="col-3">
            <a href="#samsung">
              <img src="./image/img13.jpg" alt="catagory" />
            </a>
          </div>
          <div className="col-3">
            <a href="#redmi">
              <img src="./image/img12.jpg" alt="catagory" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
