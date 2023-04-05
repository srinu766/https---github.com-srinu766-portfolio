import React from 'react'
import calculater from '../asserts/portfolio/calci2.png';
import polindrome from '../asserts/portfolio/polindrome.png';
import weather from '../asserts/portfolio/weather.png';
import toDoList from '../asserts/portfolio/todo.png';
import login from '../asserts/portfolio/login.png';
import flipingcard from '../asserts/portfolio/flipingcard.png';

const Portfolio = () => {

  const portfolios=[
    {
      id:1,
      src:calculater,
    },
    {
      id:2,
      src:toDoList,
    },
    {
      id:3,
      src:login,
    },
    {
      id:4,
      src:polindrome,
    },
    {
      id:5,
      src:weather,
    },
    {
      id:6,
      src:flipingcard,
    },
  ]

  return (
    <div name='portfolio' 
    className="bg-gradient-to-b from-black via-black to-gray-900 w-full text-white md:h-screen">
    
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 '>Portfolio</p>
          <p className='py-6'>Check out some of my works here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        { portfolios.map(({id,src})=>(
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white'>Code</button>
            </div>
          </div>
          ))
        }
        </div>
      </div>
   </div>
  )
}

export default Portfolio
