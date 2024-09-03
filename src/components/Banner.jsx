import React from 'react';
import bannerImage from '../assets/image_sachin.png';
import bannerBackground from '../assets/banner_wallpaper.svg'
import Typed from "typed.js";
import { useEffect, useRef } from "react";


function Banner() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend developer", "Backend Developer", "Full Stack Developer", "Software developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 80,
      backDelay: 200,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={
      {
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize:"cover",
        height:"500px",
        // width:"1450px"
        
        // alignItems:"revert-layer",
        // borderRadius:"60px",
        // margin:"5px",
        // marginRight:"15px",
      }} className='main-component flex items-center py-2' >
        {/* {Text Area} */}
        <div className=" w-full flex items-center justify-around left-section" >
          <div className='w-2/3 mr-60 space-y-2 text-white'>
          <h3 className='text-3xl font-semibold'>Hi, I'M </h3>
            <h1 className='text-5xl font-bold'>Sachin Gupta</h1>
            <h2 className='text-3xl font-semibold'>And I'M a <span className='font-extrabold' ref={el} ></span></h2>
            <p className='text-wrap'>Hello! I'm Sachin Gupta, a passionate and driven web developer with a keen interest in creating dynamic and user-friendly web applications. With a solid foundation in the MERN stack, I specialize in building responsive, efficient, and scalable solutions that meet the needs of users and businesses alike.</p>
            <div className="icons-container space-x-5 flex text-white cursor-pointer">
              <a href="https://www.linkedin.com/in/sachin-gupta-086a51266/" className='hover:bg-orange-400 border w-14 h-14 rounded-full flex justify-center items-center bg-gray-900'>
              <i className="fa-brands text-4xl fa-linkedin"></i>
              </a>
              <a className='hover:bg-orange-400 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-900' href="https://github.com/sachin-gu">
              <i class="fa-brands text-4xl fa-github"></i>
              </a>
              <a className='hover:bg-orange-400 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-900' href="https://www.instagram.com/_mr_sachin_g?igsh=bWdycTlyczI4bnhj">
              <i class="fa-brands text-4xl fa-instagram"></i>
              </a>
              <a className='hover:bg-orange-400 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-900' href="">
              <i class="fa-brands text-4xl fa-whatsapp"></i>
              </a>
            </div>
            <br />
            <div className=' space-y-reverse-0.25'>
            <a className=' bg-orange-500 px-3 py-1 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out' href="mailto:sachingupta98925@gmail.com"> Contact me</a>
            <a className='ms-3 bg-orange-500 px-3 py-1 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1poo9NQ0jEVv4yv4Pjt_GJ_GfiAnIpHDA/view?usp=sharing"> Download CV</a>

            </div>
          </div>
        </div> 

        {/* {image area} */}
        <div className='flex justify-center right-section'>
        <img className="rounded-br-sm my-2 mr-56" src={bannerImage} alt="Sachin's Image" />
        </div> 
    </div> 
  )
}

export default Banner;
