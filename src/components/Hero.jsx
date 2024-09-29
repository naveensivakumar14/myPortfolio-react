import heroimg from "../assets/images/heroimg.jpg";  // Update the extension accordingly

import "../index.css"

import Resume from "../assets/images/Naveen S.pdf"

import Lottie from "lottie-react";
import Cycle from "../Cycle.json";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function Hero(){

    //useEffect hook for aos 
   useEffect(()=>{
    AOS.init({duration:3000});
},[])


    return(

        <div className=" bg-[#F5F5F5] h-[80vh]  flex flex-col justify-evenly items-center md:h-screen md:flex-row md:justify-center">

            <div className="w-24 animate-slide  absolute top-[40%] left-[0] md:w-40 md:top-[30%] md:left-[15%]">
                <Lottie loop={true} animationData={Cycle}/>
            </div>
            
            <div className="w-[80%] text-center md:w-1/2 md:text-left" data-aos="fade-up">
                <p className="text-xl p-2 font-bold">Hi, I am</p>
                <h1 className="text-3xl p-2 font-bold md:text-6xl">Naveenkumar</h1>
                <h3 className=" p-2 font-bold md:text-2xl ">I build things for Web</h3>
                <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 me-2 my-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"><a href={Resume} download='Naveenkumar'>Resume</a></button>
            </div>

            <div className="w-[70%] h-auto my-5 rounded-sm md:w-1/3" data-aos="fade-up">
                <img className="w-fit border rounded-md" src={heroimg} alt="profile" />
            </div>

            
        </div>

    )

}

export default Hero
