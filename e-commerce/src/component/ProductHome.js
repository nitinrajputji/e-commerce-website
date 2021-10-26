import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const ProductHome = ({ productData, filterInfo }) => {
  return (
    <>
      <section className="main-card--container">
        {productData.map((val, index) => {
          const { id, title, price, image, category } = val;

          return (
            <>
              <Link to={`/information/${id}`}>
                <div className="small-container" key={index}>
                  <div className="card">
                    <div className="col-4">
                      <img src={image} alt="product" />

                      <h4>{title}</h4>
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p className="price">{price}</p>
                      <span className="card-author ">{category} </span>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ProductHome;
