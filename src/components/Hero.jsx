import heroimg from "../assets/images/heroimg.jpg";  // Update the extension accordingly

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


import Resume from "../assets/images/Naveen S.pdf"

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function Hero(){

    //useEffect hook for aos 
   useEffect(()=>{
    AOS.init({duration:2000});
},[])


    return(

        <div className=" bg-[#F5F5F5]  py-10 flex flex-col justify-evenly items-center md:h-screen md:flex-row md:justify-center" data-aos="fade-up">

            <div className="w-[80%] md:w-1/2 ">
                <p className="text-2xl p-2 font-bold">Hi, I am</p>
                <h1 className="text-4xl p-2 font-bold md:text-6xl">Naveenkumar</h1>
                <h3 className="text-xl p-2 font-bold md:text-2xl ">MERN Stack Developer</h3>
                <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 me-2 my-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"><a href={Resume} download='Naveenkumar'>Resume</a></button>

                

               
            </div>


            <div className="w-[80%] h-auto my-5 rounded-sm md:w-1/3">
                <img className="w-fit border rounded-md" src={heroimg} alt="profile" />
            </div>
        </div>

    )

}

export default Hero
