import React from 'react'
import './Works.css'


const Work = () => {
  return (
    <div id='work' name= 'work' className=' w-full  md: h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'> Work</p>
                <p className='py-6'>//Check out some of my recent works </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div id='Image1' 

                className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effect*/}
                    <div  className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font bold text-white tracking-wider ">
                            React js Applictaion

                        </span>
                        <div>
                            <a href='/'>

                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                            </a>

                            <a href='https://github.com/Abhi6392561407/commerce'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                        
                    </div>
                </div>
                <div  id='Image2'
                className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effect*/}
                    <div  className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font bold text-white tracking-wider ">
                            React js Applictaion

                        </span>
                        <div>
                            <a href='/'>

                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                            </a>

                            <a href='https://github.com/Abhi6392561407/commerce'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                        
                    </div>
                </div>
                <div id='Image3'
                className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effect*/}
                    <div  className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font bold text-white tracking-wider ">
                            React js Applictaion

                        </span>
                        <div>
                            <a href='/'>

                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                            </a>

                            <a href='https://github.com/Abhi6392561407/GithubRespository-Seacrh.git'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                        
                    </div>
                </div>
                <div id='Image5'
                className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effect*/}
                    <div  className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font bold text-white tracking-wider ">
                            React js Applictaion

                        </span>
                        <div>
                            <a href='/'>

                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                            </a>

                            <a href='https://github.com/Abhi6392561407/'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Work
