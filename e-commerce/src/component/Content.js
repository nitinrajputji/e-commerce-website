import React from "react";

import { Slide } from "react-slideshow-image";

const slideImages = [
  "./image/slide4.jpg",
  "./image/slide2.jpg",
  "./image/slide1.jpg",
];

function content() {
  return (
    <>
      <Slide easing="ease">
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              backgroundSize: `100% 100%`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>
      </Slide>
    </>
  );
}

export default content;
