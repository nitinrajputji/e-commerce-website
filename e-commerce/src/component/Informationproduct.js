import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Informationproduct = ({ addData, productData }) => {
  let { id } = useParams();
  const update = productData.filter((val) => val.id === parseInt(id));
  console.log(update[0].image);

  const [imageData, setimageData] = useState(update[0].image);

  return (
    <>
      {productData
        .filter((curVal) => curVal.id === parseInt(id))
        .map((val) => {
          const {
            id,

            title,
            price,

            details,
            image1,
            image2,
            image3,
            image4,
          } = val;
          const changeImg1 = () => {
            setimageData(image1);
          };
          const changeImg2 = () => {
            setimageData(image2);
          };

          const changeImg3 = () => {
            setimageData(image3);
          };

          const changeImg4 = () => {
            setimageData(image4);
          };

          return (
            <>
              <div className="small-container single-product">
                <div className="row">
                  <div className="col-2 one">
                    <img
                      src={imageData}
                      alt=""
                      className="main-img"
                      onChange={(e) => setimageData(e.target.src)}
                    />

                    <div className="small-img-row">
                      <div className="small-img-col">
                        <img
                          src={image1}
                          alt=""
                          className="small-img"
                          onMouseOver={changeImg1}
                        />
                      </div>
                      <div className="small-img-col">
                        <img
                          src={image2}
                          alt=""
                          className="small-img"
                          onMouseOver={changeImg2}
                        />
                      </div>
                      <div className="small-img-col">
                        <img
                          src={image3}
                          alt=""
                          className="small-img"
                          onMouseOver={changeImg3}
                        />
                      </div>
                      <div className="small-img-col">
                        <img
                          src={image4}
                          alt=""
                          className="small-img"
                          onMouseOver={changeImg4}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-2 two">
                    <h1>{title}</h1>
                    <h4>{price}</h4>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>

                    <button className="btn" onClick={() => addData(val)}>
                      Add to cart
                    </button>
                    <h3>product details</h3>
                    <p>{details}</p>
                  </div>
                </div>
              </div>
              ;
            </>
          );
        })}
    </>
  );
};

export default Informationproduct;
