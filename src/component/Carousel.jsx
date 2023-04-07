import React, { useState } from "react";
import "./carousel.css";
import { images } from "../Helpers/CarouseData";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
    const [currImg, setCurrImg] = useState(0);

    const prevSlide = () => {
        const newIndex = currImg === 0 ? images.length - 1 : currImg - 1;
        setCurrImg(newIndex);
      };
    
      const nextSlide = () => {
        const newIndex = currImg === images.length - 1 ? 0 : currImg + 1;
        setCurrImg(newIndex);
      };

    return (
        <div className="carousel">
            <div
                className="carouselInner"
                style={{ backgroundImage: `url(${images[currImg].img})` }}
            >
                <div
                    className="left"
                    onClick={prevSlide}
                >
                    <ArrowBackIosIcon style={{ fontSize: 30 }} />
                </div>
                <div className="center">
                    <h1>{images[currImg].title}</h1>
                </div>
                <div
                    className="right"
                    onClick={nextSlide}
                >
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    );
}
export default Carousel