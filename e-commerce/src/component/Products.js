import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

function Products({ productData }) {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const [searchTerm, setsearchTerm] = useState(query || "");

  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchTerm}`);
    e.preventDefault();
  };

  return (
    <>
      <form
        action="/"
        method="get"
        className="search-main"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <label htmlFor="header-search"></label>
        <input
          type="text"
          id="header-search"
          placeholder="search..."
          className="search-text"
          value={searchTerm}
          name="s"
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <section className="main-card--container">
        {productData
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, index) => {
            const { id, title, price, image, category } = val;

            return (
              <>
                <Link to={`/information/${id}`}>
                  <div className="small-container" key={id}>
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
}

export default Products;
