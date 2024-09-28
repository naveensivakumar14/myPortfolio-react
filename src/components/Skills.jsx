import htmlIcon from '../assets/images/html icon.png'
import cssIcon from '../assets/images/css icon.png'
import BootIcon from '../assets/images/bootstrap.png'
import TailwindIcon from '../assets/images/tailwindcss.png'
import jsIcon from '../assets/images/js icon.png'
import reactIcon from '../assets/images/react-icon.png'
import nodeIcon from '../assets/images/node-black.png'
import expressIcon from '../assets/images/express-icon.png'
import mongoIcon from '../assets/images/mdb-icon.png'
import githubIcon from '../assets/images/github-icon.png'
import gitIcon from '../assets/images/Git-icon.png'
import vsIcon from '../assets/images/vscode-icon.png'
import postIcon from '../assets/images/Postman.png'
import verIcon from '../assets/images/Vercel.png'
import notionIcon from '../assets/images/Notion-icon.png'
import firebsIcon from '../assets/images/Firebase.png'


//Animation on Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Skills(){
    
//useEffect hook for aos 
   useEffect(()=>{
    AOS.init({duration:2000});
    },[])

    //Icon Array of Objects
    const frontendSkill = [
            { id: 1, title: "HTML", imageUrl: htmlIcon },
            { id: 2, title: "CSS", imageUrl: cssIcon },
            { id: 3, title: "Bootstrap", imageUrl: BootIcon },
            { id: 4, title: "Tailwind", imageUrl: TailwindIcon },
            { id: 5, title: "JavaScript", imageUrl: jsIcon },
            { id: 6, title: "React", imageUrl: reactIcon },
            { id: 7, title: "Node", imageUrl: nodeIcon },
            { id: 8, title: "Express", imageUrl: expressIcon },
            { id: 9, title: "MongoDB", imageUrl: mongoIcon },
            { id: 10, title: "Git", imageUrl: gitIcon },
            { id: 11, title: "GitHub", imageUrl: githubIcon },
            { id: 12, title: "Vercel", imageUrl: verIcon },
            { id: 13, title: "Postman", imageUrl: postIcon },
            { id: 14, title: "VScode", imageUrl: vsIcon },
            { id: 15, title: "Notion", imageUrl: notionIcon },
            { id: 16, title: "FireBase", imageUrl: firebsIcon },
    ];

      
    return(
        <div className='bg-[#F5F5F5]' data-aos="fade-up">
         <h1 className='text-2xl pt-6 font-bold text-center md:text-4xl'>Skills</h1>
            <div className='flex flex-col p-6 justify-center items-center md:flex-row md:justify-center '>
                <div className="p-4 my-2 mx-2  grid grid-cols-4 gap-3 md:w-[40%] ">
                    {frontendSkill.map((item) => (
                    <div key={item.id} className="p-4 flex flex-col justify-center items-center transform hover:scale-125"  >
                        <img src={item.imageUrl} alt={item.title} className="w-full z-0 h-auto md:w-[60%]" data-aos="zoom-in-up"/>
                        <h2 className=" mt-1  text-xs md:font-semibold" data-aos="zoom-in-up">{item.title}</h2>
                    </div>
                    ))}
                </div>
            </div> 
       </div>
       
    )
}

export default Skills
