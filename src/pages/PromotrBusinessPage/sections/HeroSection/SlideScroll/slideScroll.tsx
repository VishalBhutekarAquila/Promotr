import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import a from "../../../../../assets/businesspage/HeroSection/1.svg";
import b from "../../../../../assets/businesspage/HeroSection/2.svg";
import c from "../../../../../assets/businesspage/HeroSection/3.svg";
import d from "../../../../../assets/businesspage/HeroSection/4.svg";
import e from "../../../../../assets/businesspage/HeroSection/5.svg";
import f from "../../../../../assets/businesspage/HeroSection/6.svg";
import g from "../../../../../assets/businesspage/HeroSection/7.svg";
import h from "../../../../../assets/businesspage/HeroSection/8.svg";

function AutoPlay() {
  const [slider, setSlider] = useState([
    {
      img: a,
    },
    {
      img: b,
    },
    {
      img: c,
    },
    {
      img: d,
    },
    {
      img: e,
    },
    {
      img: f,
    },
    {
      img: g,
    },
    {
      img: h,
    },
  ]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 2000,
    autoplaySpeed: 1,
    cssEase: "linear",
  };
  return (
    <div className="slider-container mt-20">
      <Slider {...settings}>
        {slider.map((slide) => {
          return (
            <div>
              <img src={slide.img} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default AutoPlay;
