import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

//Frontend Icons
import htmlIcon from '../assets/images/html icon.png';
import cssIcon from '../assets/images/css icon.png';
import BootIcon from '../assets/images/bootstrap.png';
import TailwindIcon from '../assets/images/tailwindcss.png';
import jsIcon from '../assets/images/js icon.png';
import reactIcon from '../assets/images/react-icon.png';
import jQIcon from "../assets/images/jQuery.png";
import viteIcon from "../assets/images/vite.png"

//Backend Icons
import nodeIcon from '../assets/images/node-black.png';
import expressIcon from '../assets/images/express-icon.png';
import mongoIcon from '../assets/images/mdb-icon.png';
import npmIcon from "../assets/images/NPM.png"
import mysqlIcon from "../assets/images/mysql.png";
import postIcon from '../assets/images/Postman.png';
import firebsIcon from '../assets/images/Firebase.png';

//Tools Icons
import vsIcon from '../assets/images/vscode-icon.png';
import verIcon from '../assets/images/Vercel.png';
import notionIcon from '../assets/images/Notion-icon.png';
import githubIcon from '../assets/images/github-icon.png';
import gitIcon from '../assets/images/Git-icon.png';
import gptIcon from "../assets/images/chatgpt.png";
import sublimeIcon from "../assets/images/sublime.png"
import canvaIcon from "../assets/images/canva.png"



function Skills() {
  // Initialize AOS for animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Frontend - Icons Array of Objects
  const frontendSkill = [
    { id: 1, title: "HTML", imageUrl: htmlIcon },
    { id: 2, title: "CSS", imageUrl: cssIcon },
    { id: 3, title: "Bootstrap", imageUrl: BootIcon },
    { id: 4, title: "Tailwind", imageUrl: TailwindIcon },
    { id: 5, title: "JavaScript", imageUrl: jsIcon },
    { id: 6, title: "JQuery", imageUrl: jQIcon },
    { id: 7, title: "React", imageUrl: reactIcon },
    { id: 8, title: "Vite", imageUrl: viteIcon },
    ];
  
   // Backend - Icons Array of Objects
  const backendSkills = [
    { id: 1, title: "JavaScript", imageUrl: jsIcon },
    { id: 2, title: "Node", imageUrl: nodeIcon },
    { id: 3, title: "Express", imageUrl: expressIcon },
    { id: 4, title: "NPM", imageUrl: npmIcon },
    { id: 5, title: "MongoDB", imageUrl: mongoIcon },
    { id: 6, title: "MySQL", imageUrl: mysqlIcon },
    { id: 7, title: "Postman", imageUrl: postIcon },
    { id: 8, title: "FireBase", imageUrl: firebsIcon },
  ];

   // Tools - Icons Array of Objects
  const tools = [
    { id: 1, title: "Vscode", imageUrl: vsIcon },
    { id: 2, title: "Sublime", imageUrl: sublimeIcon},
    { id: 3, title: "Git", imageUrl: gitIcon },
    { id: 4, title: "GitHub", imageUrl: githubIcon },
    { id: 5, title: "Vercel", imageUrl: verIcon },
    { id: 6, title: "ChatGPT", imageUrl: gptIcon },
    { id: 7, title: "Canva", imageUrl: canvaIcon },
    { id: 8, title: "Notion", imageUrl: notionIcon },
    
  ];

  // State to handle selected skill category
  const [activeSkill, setActiveSkill] = useState(frontendSkill); // Initially showing frontend skills

  // Function to set active skills based on button click
  const handleSkillChange = (skillType) => {
    if (skillType === 'frontend') {
      setActiveSkill(frontendSkill);
    } else if (skillType === 'backend') {
      setActiveSkill(backendSkills);
    } else if (skillType === 'tools') {
      setActiveSkill(tools);
    }
  };

  return (
    <div className='bg-[#F5F5F5]' >
      <h1 className='text-2xl pt-6 font-bold text-center md:text-4xl'>Skills</h1>

      {/* Buttons to change the skill display */}
      <div className='flex justify-center p-4'>
        <button 
          onClick={() => handleSkillChange('frontend')}
          className="text-gray-900 text-xs md:text-sm hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-4 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ml-2 mt-4"
        >
          Frontend
        </button>
        <button 
          onClick={() => handleSkillChange('backend')}
          className="text-gray-900 text-xs md:text-sm hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-4 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ml-2 mt-4"
        >
          Backend
        </button>
        <button 
          onClick={() => handleSkillChange('tools')}
          className="text-gray-900 text-xs md:text-sm hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-4 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ml-2 mt-4"
        >
          Tools
        </button>
      </div>

      {/* Display the active skills */}
      <div className='flex flex-col p-6 justify-center items-center md:flex-row md:justify-center md:items-start'>
        <div className="p-4  my-2 mx-2 grid grid-cols-4 gap-3 md:h-[60vh] md:w-[40%]">
          {activeSkill.map((item) => (
            <div key={item.id} className="p-4 flex flex-col justify-center items-center transform hover:scale-125">
              <img src={item.imageUrl} alt={item.title} className="w-full h-auto md:w-[80%]" data-aos="fade-up" />
              <h2 className="mt-3 text-xs md:text-sm md:font-semibold" data-aos="zoom-in-up">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
