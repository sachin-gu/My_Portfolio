import React from 'react'

function Services() {
     
  return (
    <>

    <div className='main-container py-12'>

        <h1 className='text-center text-4xl underline font-semibold'>My Services</h1>
        <div className="servicer-container space-x-5 px-10 flex mt-12 ">

            <div className=' cursor-pointer overflow-auto size-96 hover:bg-gray-300 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl'>
                <i className="text-5xl fa-solid fa-globe"></i>
                <h1 className='text-3xl font-bold text-gray-700 mt-4'>Frontend Development</h1>
                <p>I specialize in creating responsive and visually appealing web interfaces that provide seamless user experiences. With expertise in HTML, CSS, JavaScript, and the MERN stack, I build dynamic and intuitive websites that cater to both user needs and business goals. Whether you're looking for a sleek landing page or a complex web application, I ensure that every element is optimized for performance, accessibility, and aesthetic appeal.</p>
                <button className='bg-orange-500 px-3 py-1 mt-4 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'>Check</button>
            </div>



            <div className=' overflow-auto size-96 cursor-pointer hover:bg-gray-300 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl'>
                <i className="text-5xl fa-brands fa-app-store-ios"></i>
                <h1 className='text-3xl font-bold text-gray-700 mt-4'>Software Development</h1>
                <p className=''>I offer a wide range of software development services tailored to meet your specific needs. From custom web development using modern technologies like HTML, CSS, JavaScript, and the MERN stack, to creating dynamic mobile applications and robust backend solutions with Node.js and MongoDB, I provide comprehensive solutions. I also specialize in API integration, cloud solutions with AWS, and UI/UX design to enhance user experience. Additionally, I offer ongoing software maintenance to ensure your applications remain efficient and up-to-date. My goal is to deliver high-quality, user-centric solutions that drive success for your projects.</p>
                <button className='bg-orange-500 px-3 py-1 mt-4 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'>Check</button>

            </div>



            <div className='cursor-pointer overflow-auto size-96 hover:bg-gray-300 text-wrap space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl'>
                <i className="text-5xl cursor-pointer hover:bg-gray-100  fa-solid fa-server"></i>
                <h1 className='text-3xl font-bold text-gray-700 mt-4'>Backend Developer</h1>
                <p>I offer robust backend development services leveraging Node.js, Express.js, and MongoDB to build scalable, efficient, and high-performance server-side applications. Using Node.js, I create fast and reliable server environments capable of handling large volumes of data with minimal latency. Express.js simplifies the development of RESTful APIs and streamlines routing and middleware integration, ensuring smooth and maintainable code. With MongoDB, I provide flexible and scalable NoSQL database solutions that cater to diverse data storage needs, enabling rapid development and seamless data management. My backend development approach focuses on delivering secure, efficient, and well-structured solutions tailored to meet your project’s specific requirements.</p>
                <button className='bg-orange-500 px-3 py-1 mt-4 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'>Check</button>

            </div>

        </div>





    </div>
    
    
    
    
    </>
  )
}

export default Services
