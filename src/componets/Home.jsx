import React from 'react'
import HeroImage from "../asserts/Hero.jpg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name='home' 
    className='h-screen w-full bg-gradient-to-b from-black via-black
     to-gray-900 pt-20 '
     >
        <div className='max-w-screen-lg mx-auto flex  flex-col
        items-center justify-center h-full px-4 md:flex-row lg:flex-row sm:flex-row  sm:flex-cols-2 sm:px-0'>
        {/* grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 */}
            <div className='flex flex-col justify-center h-full'>
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
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            
            <div className=''>
                <img src={HeroImage} alt="my profile"  className='rounden-2xl mx-auto w-2/3  h-2/3   md:w-full'/>
            </div>

        </div>
    </div>
  )
}

export default Home
