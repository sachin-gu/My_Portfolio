import React from 'react'
import bannerBackground from '../assets/banner_wallpaper.svg'

function Expertixe() {
  return (
    <>
    <div id="skills" className='my-8'>
        <h1 className='mb-12 text-center text-4xl underline font-semibold'> My Expertise</h1>


        {/* Box Section */}
        <div 
        style={
            {
              backgroundImage: `url(${bannerBackground})`,
              backgroundSize:"cover",
              // alignItems:"revert-layer",
              // borderRadius:"60px",
              // margin:"5px",
              // marginRight:"15px",
            }} className="box-container items-center flex py-16">
            <div className='flex justify-center'>
                <div className='w-2/3 text-white text-center space-y-4'>
                <h1 className='text-3xl font-bold mt-4'>I Love These Technologies</h1>
                <p className='text-start'> I am always eager to explore and understand emerging tools and techniques in the tech industry. This drive fuels my curiosity and pushes me to stay up-to-date with the latest advancements. I actively seek out opportunities for continuous learning, whether through online courses, workshops, or hands-on projects.</p>
                <button onClick={() => window.location.href = 'mailto:sachingupta98925@gmail.com'} className='bg-orange-500 px-3 py-1 mt-4 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'>Contact Me</button>   
                </div>

            </div>
{/* Skill Container */}
        <div className=' flex justify-center  '>
            <div className='flex w-2/3 justify-center h-fit space-x-3 flex-wrap'>
                <p className='bg-gray-300 w-fit px-3 cursor-pointer hover:bg-gray-500 hover:text-white  py-2 mt-3 rounded-full'>
                    Java
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    JavaScript
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    ReactJS
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    NodeJs
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    ExpressJS
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    MongoDb
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    Firebess
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    SQL
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    HTML5
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    Tailwind CSS
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    Vite
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    AWS
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    Github
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    OOP's
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    Data Structure
                </p>
                <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
                    SDLC
                </p>
            </div>
        </div>

        </div>
    </div>
    
    
    
    
    
    
    
    
    </>

  )
}

export default Expertixe
