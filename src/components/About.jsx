import mongo from '../assets/images/mdb-icon.png'
import exp from '../assets/images/express-icon.png'
import rct from '../assets/images/react-icon.png'
import nde from '../assets/images/node-black.png'



function About(){


    return(
        <div className=" bg-[#daffcf]  py-10 flex flex-col justify-evenly gap-8 items-center"> 
            <h1 className="text-2xl  font-bold md:text-4xl">About</h1>
            <div className=" w-[90%] p-4  md:w-[50%] md:leading-7 ">
                <h1 className="text-xl text-center pb-4 font-bold md:text-2xl">MERN STACK DEVELOPER</h1>
                <p className=" leading-6 pb-4 text-justify font-semibold md:my-6 md:text-xl">I am a passionate and creative MERN Stack developer, dedicated to building efficient, full-stack web applications.
                My focus is on writing clean, modular code while bringing innovative ideas to life in the digital world.</p>
                <div className='flex justify-center gap-5 py-4 md:gap-8'>
                    <img className='w-[10%] transform hover:-translate-y-1' src={mongo} alt="" />
                    <img className='w-[10%] transform hover:-translate-y-1'  src={exp} alt="" />
                    <img className='w-[10%] transform hover:-translate-y-1'  src={rct} alt="" />
                    <img className='w-[10%] transform hover:-translate-y-1'  src={nde} alt="" />
                </div>
                <div className='flex justify-center py-4'>
                    {/* <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 ml-2 mt-4">LinkedIn</button> */}
                    <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ml-2 mt-4">LinkedIn</button>
                    <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ml-2 mt-4">Github</button>
                </div>
            </div>
            

        </div>
    )
}

export default About

//bg-[#b5ffe4]