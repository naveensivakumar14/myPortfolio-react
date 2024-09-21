

//Animation on Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Details(){

    //useEffect hook for aos 
   useEffect(()=>{
    AOS.init({duration:2000});
    },[])


    return(
        <>
        <section class="bg-white"  data-aos="fade-up">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-black sm:text-lg  ">
                    <h2 class="mb-4 text-2xl text-center md:text-4xl md:text-left tracking-tight font-semibold">Education and Experience</h2>
                    <p class="font-semibold text-justify mb-3 p-4 md:p-0 md:text-left ">I am an Engineering Graduate specialising in Electrical and Electronics, now transitioning my passion into the exciting field of web development. With 3 years of experience in the customer service domain, I bring a unique blend of technical expertise and client-focused problem-solving to my projects.</p>
                    <p className=" font-semibold px-4 md:py-4 md:px-0">"Your feedback drives innovation—let’s learn from each other and build something extraordinary together.</p>
                
                    <div className="flex justify-center md:justify-start">
                    <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-6 ml-2"><a href="https://www.linkedin.com/in/naveenksivakumar/" target='_blank'>Let's Connect</a></button>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8 p-4">
                    <img class=" rounded-lg w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                    <img class="mt-4 lg:mt-10 rounded-lg w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                </div>
            </div>
        </section>
        </>

    )
}

export default Details
