import React from 'react'

function About() {
  return (
    <div 
    name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white '
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
            </div>
            <p className='text-xl mt-14'>
            My name is S.SRINIVASULU, and I am a recent graduate who is passionate about 
            frontend development. I have a strong foundation in programming languages
            such as C and C++, as well as expertise in React Js, JavaScript, HTML5, CSS3,
            and tailwind CSS.<br/><br/>
            During my studies, I worked on several projects that honed my skills in 
            frontend development, including designing responsive web layouts, implementing 
            user authentication systems, and building interactive user interfaces using React Js.<br/><br/>
           
            Thank you for your time and consideration, and I look forward to hearing from you soon.
            </p>
        </div>
      
    </div>
  )
}

export default About
