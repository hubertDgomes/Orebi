import React, { useEffect, useState } from "react";
import Container from "../Container";
import Products from "./Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Images from "../Images";
import add4 from "/src/assets/add4.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const NewArrival = () => {
  function SampleNextArrow({onClick}) {
   
    return (
      <div onClick={onClick} className="absolute top-1/2 -translate-y-[90%] right-0">
        <FaArrowCircleRight className="text-[50px]" />
      </div>
    );
  }

  function SamplePrevArrow({onClick}) {
    
    return (
      <div className="absolute top-1/2 -translate-y-[90%] left-0 z-20" onClick={onClick}>
        <FaArrowAltCircleLeft className="text-[50px]" />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data.products);
      });
  }, []);
  return (
    <>
      <Container className={"py-[50px]"}>
        <h1 className="font-DM font-bold text-[39px] mb-[20px]">
          New Arrivals
        </h1>
        <Slider {...settings}>
          {items.map((item) => (
            <Products
              src={item.thumbnail}
              proName={item.title}
              proPrice={item.price}
            />
          ))}
        </Slider>
      </Container>

      <Container className={"py-[50px]"}>
        <h1 className="font-DM font-bold text-[39px] mb-[20px]">
          Our Bestsellers
        </h1>
        <Slider {...settings}>
          {items.map((item) => (
            <Products
              src={item.thumbnail}
              proName={item.title}
              proPrice={item.price}
            />
          ))}
        </Slider>
        <Images className={"py-[50px]"} src={add4} />
      </Container>

      <Container className={"py-[50px]"}>
        <h1 className="font-DM font-bold text-[39px] mb-[20px]">
          Special Offers
        </h1>
        <Slider {...settings}>
          {items.map((item) => (
            <Products
              src={item.thumbnail}
              proName={item.title}
              proPrice={item.price}
            />
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default NewArrival;
