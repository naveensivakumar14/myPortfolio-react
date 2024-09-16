import heroimg from "../assets/images/heroimg.jpg";  // Update the extension accordingly

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Hero(){


    return(

        <div className=" bg-[#F5F5F5]  py-10 flex flex-col justify-evenly items-center md:h-screen md:flex-row md:justify-center">

            <div className="w-[80%] md:w-1/2 ">
                <p className="text-2xl p-2 font-bold">Hi, I am</p>
                <h1 className="text-4xl p-2 font-bold md:text-6xl">Naveenkumar</h1>
                

                <h3 className="text-xl p-2 font-bold md:text-2xl ">MERN Stack Developer</h3>
                
            </div>


            <div className="w-[80%] h-auto my-5 rounded-sm md:w-1/3">
                <img className="w-fit border rounded-md" src={heroimg} alt="profile" />
            </div>
        </div>

    )

}

export default Hero