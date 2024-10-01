import { useState } from "react";
import { Link } from "react-scroll";

function Navbar(){

  
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        
        <div className="bg-[#021526] z-10 text-white py-4 px-10 sticky top-0 shadow-lg flex justify-between items-center w-full">
            <div>
                <h1 className="text-xl font-bold">PORTFOLIO</h1>
            </div>

           
     
            <ul className="justify-around gap-12 font-bold hidden md:flex">
                <li className="p-2"><Link to="Home"  smooth={true} duration={500}>Home</Link></li>
                <li className="p-2"><Link to="About"  smooth={true} duration={500}>About</Link></li>
                <li className=" p-2"><Link to="Skills"  smooth={true} duration={500}>Skills</Link></li>
                <li className=" p-2"><Link to="Projects"  smooth={true} duration={500}>Projects</Link></li>
                <li className="p-2"><Link to="Contact"  smooth={true} duration={500}>Contacts</Link></li>
            </ul>

          
            
            <button onClick={toggleMenu} className="md:hidden" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>


        
        <div
          className={`fixed top-16 right-0 h-screen min-w-[40%]  bg-[#021526] text-white flex flex-col items-center gap-4 font-semibold transition-transform duration-500 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <li className="list-none w-full text-center p-2"><Link to="Home"  smooth={true} duration={500}>Home</Link></li>
          <li className="list-none w-full text-center p-2"><Link to="About"  smooth={true} duration={500}>About</Link></li>
          <li className="list-none w-full text-center p-2"><Link to="Skills"  smooth={true} duration={500}>Skills</Link></li>
          <li className="list-none w-full text-center p-2"><Link to="Projects"  smooth={true} duration={500}>Projects</Link></li>
          <li className="list-none w-full text-center p-2"><Link to="Contact"  smooth={true} duration={500}>Contacts</Link></li>
        </div>


        </div>
        
    )
}

export default Navbar
