import React from 'react'
import Avatar from '../assests/Avatar.png'

const About = () => {
  return (
<div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
   
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Abhishek Tiwari, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Having a MERN stack developer at your fingertips allows you to create tailored software solutions, 
                ensuring high-quality and scalable applications for individuals, small businesses, 
                and large enterprises.Benefit from their expertise in full-stack development, security, 
                and continuous maintenance to achieve your software goals efficiently and effectively.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
