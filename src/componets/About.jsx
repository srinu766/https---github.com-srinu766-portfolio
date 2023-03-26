import React from 'react'

function About() {
  return (
    <div 
    name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-14'>
            What Is An "About Me" Section On A Resume? An "about me" section is the 
            introductory segment of your resume. It briefly explains your professional 
            background, skills and accomplishments. This section is typically between 
            three and four lines of text and is like a resume summary but has a more 
            conversational tone.
            What Is An "About Me" Section On A Resume? An "about me" section is the 
            introductory segment of your resume. It briefly explains your professional 
            background, skills and accomplishments. This section is typically between 
            three and four lines of text and is like a resume summary but has a more 
            conversational tone.
            </p>
            <br/>
            {/* <p className='text-xl'>
            What Is An "About Me" Section On A Resume? An "about me" section is the 
            introductory segment of your resume. It briefly explains your professional 
            background, skills and accomplishments. This section is typically between 
            three and four lines of text and is like a resume summary but has a more 
            conversational tone.
            What Is An "About Me" Section On A Resume? An "about me" section is the 
            introductory segment of your resume. It briefly explains your professional 
            background, skills and accomplishments. This section is typically between 
            three and four lines of text and is like a resume summary but has a more 
            conversational tone.
            </p> */}
        </div>
      
    </div>
  )
}

export default About
