import React from "react";

//Slick React Carousel Library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import images from assets
import udemySlide from "../assets/images/udemy-slide.jpg"
import tripSlide from "../assets/images/tripadivisor-tile.jpg"
import greenSlide from "../assets/images/Greenden-slide.jpg"
import nostraSlide from "../assets/images/nostra-tile.jpg"
import plistSlide from "../assets/images/productlist-tile.jpg"
import coffeeSlide from "../assets/images/coffee-slide.jpg"
import actodoSlide from "../assets/images/Actodo-slide.jpg"
import cafe4uSlide from "../assets/images/cafe4u-slide.jpg"
import wappSlide from "../assets/images/wapp-tile.jpg"
import todoSlide from "../assets/images/todo-slide.jpg"



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
    { id: 1, name: "Udemy", img: udemySlide, Skills: "React JS", link:"https://udemy-react-webpage.vercel.app/" },
    { id: 2, name: "TripAdvisor", img: tripSlide, Skills: "JavaScript", link:"https://naveensivakumar14.github.io/Tripadviser-clone/" },
    { id: 3, name: "Nostra", img: nostraSlide, Skills: "React JS", link:"https://naveensivakumar14.github.io/Nostra-Ecomm/" },
    // { id: 4, name: "Greenden", img: greenSlide, Skills: "Tailwind CSS", link:"https://naveensivakumar14.github.io/Greenden-Tailwind/" },
    { id: 5, name: "Ezcart", img: plistSlide, Skills: "React JS", link:"https://product-list-app-react-js.vercel.app/ProductList" },
    { id: 6, name: "Coffaine Corner", img: coffeeSlide, Skills: "React JS", link: "https://coffeeshop-react-one.vercel.app/#blogs" },
    { id: 7, name: "Actodo", img: actodoSlide, skill: "API Axios", link:"https://actodo-react-mu.vercel.app/"},
    { id: 8, name: "Cafe 4u", img: cafe4uSlide , skill: "CSS", link:"https://naveensivakumar14.github.io/Cafe4u-clone/"},
    { id: 9, name: "Weather APP", img: wappSlide, skill: "React JS", link:"https://weather-app-react-mu.vercel.app/"},
    { id: 10, name: "Todo List", img: todoSlide, skill: "JavScript", link:"https://naveensivakumar14.github.io/todo-list/"}

    
  ];



  return (
    <div className="slider-container px-14 py-10 md:py-20 bg-[#1f2b36] text-white">
        <h1 className="text-3xl font-bold mb-3 md:mb-6 text-center ">My Projects</h1>
      <Slider {...settings}>
        {
            slideData.map(function(item){
                return(
                      <div key={item.id} className="py-10">
                      <img className="h-[200px] md:h-[300px]" src={item.img} alt={item.name} />
                      <div className="flex gap-4 items-center mt-4">
                          <h2 className="text-xl py-4 font-semibold">{item.name}</h2>
                          <button class="bg-white hover:bg-slate-300 text-gray-800 font-semibold text-sm py-1 px-2 border focus:ring-4 border-slate-200 rounded shadow"><a href={item.link} target="_blank">View</a></button>
                      </div>
                        
                    </div>
                )
            })
        }

            
      </Slider>

      {/* <div className="flex justify-center items-center mt-14">
      <button className="bg-white px-4 py-2 text-lg font-semibold border-none rounded-sm text-black">Explore</button>
      </div> */}

      
    </div>
  );
}

export default MultipleItems;
