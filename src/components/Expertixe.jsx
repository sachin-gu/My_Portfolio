import React from 'react';
import bannerBackground from '../assets/banner_wallpaper.svg';

function Expertixe() {
  return (
    <div id="skills" className='my-8 px-4 sm:px-8'>
      <h1 className='mb-12 text-center text-3xl sm:text-4xl underline font-semibold text-black'>
        My Expertise
      </h1>

      {/* Box Section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="box-container flex flex-col lg:flex-row items-start lg:items-start py-8 lg:py-16"
      >
        {/* Text Section */}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-black'>
            I Love These Technologies
          </h1>
          <p className='text-sm sm:text-base lg:text-lg mt-4 text-black'>
            I am always eager to explore and understand emerging tools and techniques in the tech industry. This drive fuels my curiosity and pushes me to stay up-to-date with the latest advancements. I actively seek out opportunities for continuous learning, whether through online courses, workshops, or hands-on projects.
          </p>
          <button
            onClick={() => window.location.href = 'mailto:sachingupta98925@gmail.com'}
            className='bg-orange-500 px-4 py-2 mt-4 rounded-full text-white shadow-lg transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'
          >
            Contact Me
          </button>
        </div>

        {/* Skill Container */}
        <div className='w-fit lg:w-1/2 flex flex-wrap lg:justify-start lg:pl-8 mt-8 lg:mt-0'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {[
              'Java', 'JavaScript', 'ReactJS', 'NodeJs', 'ExpressJS', 'MongoDb', 'Firebase', 'SQL', 'HTML5', 'Tailwind CSS', 'Vite', 'AWS', 'Github', 'OOP\'s', 'Data Structure', 'SDLC'
            ].map(skill => (
              <p key={skill} className='bg-gray-300 px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full text-sm sm:text-base text-black'>
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertixe;


































// import React from 'react'
// import bannerBackground from '../assets/banner_wallpaper.svg'

// function Expertixe() {
//   return (
//     <>
//     <div id="skills" className='my-8'>
//         <h1 className='mb-12 text-center text-4xl underline font-semibold'> My Expertise</h1>


//         {/* Box Section */}
//         <div 
//         style={
//             {
//               backgroundImage: `url(${bannerBackground})`,
//               backgroundSize:"cover",
//               // alignItems:"revert-layer",
//               // borderRadius:"60px",
//               // margin:"5px",
//               // marginRight:"15px",
//             }} className="box-container items-center flex py-16">
//             <div className='flex justify-center'>
//                 <div className='w-2/3 text-white text-center space-y-4'>
//                 <h1 className='text-3xl font-bold mt-4'>I Love These Technologies</h1>
//                 <p className='text-start'> I am always eager to explore and understand emerging tools and techniques in the tech industry. This drive fuels my curiosity and pushes me to stay up-to-date with the latest advancements. I actively seek out opportunities for continuous learning, whether through online courses, workshops, or hands-on projects.</p>
//                 <button onClick={() => window.location.href = 'mailto:sachingupta98925@gmail.com'} className='bg-orange-500 px-3 py-1 mt-4 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'>Contact Me</button>   
//                 </div>

//             </div>
// {/* Skill Container */}
//         <div className=' flex justify-center  '>
//             <div className='flex w-2/3 justify-center h-fit space-x-3 flex-wrap'>
//                 <p className='bg-gray-300 w-fit px-3 cursor-pointer hover:bg-gray-500 hover:text-white  py-2 mt-3 rounded-full'>
//                     Java
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     JavaScript
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     ReactJS
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     NodeJs
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     ExpressJS
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     MongoDb
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     Firebess
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     SQL
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     HTML5
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     Tailwind CSS
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     Vite
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     AWS
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     Github
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     OOP's
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     Data Structure
//                 </p>
//                 <p className='bg-gray-300 w-fit px-3 py-2 mt-3 cursor-pointer hover:bg-gray-500 hover:text-white rounded-full'>
//                     SDLC
//                 </p>
//             </div>
//         </div>

//         </div>
//     </div>
    
//     </>
//   )
// }
// export default Expertixe
