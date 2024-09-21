import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import udemySlide from "../assets/images/udemy-slide.jpg"
import tripSlide from "../assets/images/tripadivisor-tile.jpg"
import greenSlide from "../assets/images/Greenden-slide.jpg"
import nostraSlide from "../assets/images/nostra-tile.jpg"
import plistSlide from "../assets/images/productlist-tile.jpg"
import coffeeSlide from "../assets/images/coffee-slide.jpg"


function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive:[
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
  };


  const slideData = [
    { id: 1, name: "Udemy", img: udemySlide, Skills: "React JS" },
    { id: 2, name: "TripAdvisor", img: tripSlide, Skills: "JavaScript" },
    { id: 3, name: "Nostra", img: nostraSlide, Skills: "React JS" },
    { id: 4, name: "Greenden", img: greenSlide, Skills: "Tailwind CSS" },
    { id: 5, name: "Ezcart", img: plistSlide, Skills: "React JS" },
    { id: 6, name: "Coffaine", img: coffeeSlide, Skills: "React JS" },
    
  ];



  return (
    <div className="slider-container px-14 py-10 md:py-20 bg-[#1f2b36] text-white">
        <h1 className="text-3xl font-bold mb-6 text-center ">My Projects</h1>
      <Slider {...settings}>
        {
            slideData.map(function(item){
                return(
                    <div key={item.id} className="py-12">
                    <img src={item.img} alt={item.name} />
                    <div>
                        <h2 className="text-xl py-4 font-semibold">{item.name}</h2>
                    </div>
                        
                    </div>
                )
            })
        }

            
      </Slider>

      <div className="flex justify-center items-center mt-14">
      <button className="bg-white px-4 py-2 text-lg font-semibold border-none rounded-sm text-black">Explore</button>
      </div>

      
    </div>
  );
}

export default MultipleItems;
