import React from 'react'
import HeroImage from "../asserts/Hero5.jpg";
import {BiRightArrowAlt} from "react-icons/bi";
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name='home' 
    className='h-screen w-full bg-gradient-to-b from-black via-black
     to-gray-900 ' 
     >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
                <p className='text-gray-500 py-4 mx-w-md'>
                    I'm a fresher looking For Frontend Developer.
                     <br/>My skills are React JS, JavaScript, HTML5, CSS3 
                    and Tailwind CSS.
                </p>
                <div> 
                    <Link 
                    to="portfolio" 
                    smooth 
                    duration={500} 
                    className='group text-white w-fit px-6 py-3 my-2
                     flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <BiRightArrowAlt size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            
            <div className=' '>
                <img src={HeroImage}  
                alt="my profile"  
                className='rounded-2xl mx-auto w-2/3 md:w-full object-cover h-80'/>
            </div>
        </div>
    </div>
  );
};

export default Home
