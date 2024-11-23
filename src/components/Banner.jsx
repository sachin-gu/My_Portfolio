import React from 'react';
import bannerImage from '../assets/Sachin_Image.png';
import bannerBackground from '../assets/banner_wallpaper.svg';
import Typed from "typed.js";
import { useState,useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Using React Icons for social media

function Banner() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = new FormData();
    form.append('access_key', 'a7614622-a1f8-4530-9bf5-2fc639060fee');
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);
  
    try {
      const web3FormsAPI = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      });
  
      const data = await web3FormsAPI.json();
  
      if (data.success) {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsModalOpen(false); // Close modal on success
      } else {
        setStatusMessage('There was an issue sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatusMessage('Failed to send the message. Please try again later.');
    }
  };
  
  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setStatusMessage(''); // Clear status message when modal is toggled
  };
  




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

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
      className="relative flex flex-col lg:flex-row items-center lg:items-start py-4 lg:py-0 px-4"
    >
      {/* Text Area */}
      <div className="w-full lg:w-2/3 flex flex-col pt-12 items-center lg:items-start text-center lg:text-left lg:justify-center px-4 lg:px-8">
        <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-black lg:text-white">
          Hi, I'M
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black lg:text-white">
          Sachin Gupta
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-black lg:text-white">
          And I'M a <span className="font-extrabold" ref={el}></span>
        </h2>
        <p className="text-base md:text-lg lg:text-base mt-2 overflow-x-auto text-black lg:text-white">
          Hello! I'm Sachin Gupta, a passionate and driven web developer with a keen interest in <br/>creating dynamic and user-friendly web applications. With a solid foundation in the MERN <br/> stack, I specialize in building responsive, efficient, and scalable solutions that meet the <br/> needs of users and businesses alike.
        </p>
        <div className="icons-container space-x-4 lg:space-x-5 flex flex-wrap justify-center lg:justify-start mt-4">
          <a
            href="https://www.linkedin.com/in/sachin-gupta-086a51266/"
            className="hover:bg-orange-400 border w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl md:text-2xl" />
          </a>
          <a
            href="https://github.com/sachin-gu"
            className="hover:bg-orange-400 border w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 text-white"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl md:text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/_mr_sachin_g?igsh=bWdycTlyczI4bnhj"
            className="hover:bg-orange-400 border w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 text-white"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl md:text-2xl" />
          </a>
          <a
            href="#"
            className="hover:bg-orange-400 border w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 text-white"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-xl md:text-2xl" />
          </a>
        </div>
        <div className="mt-4 flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-start">

        <button
        onClick={toggleModal}
        className="bg-orange-500 px-4 py-2 rounded-full text-white shadow-lg transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out"
      >
        Contact ME
      </button>

      {/* Modal (Popup Form) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Success or error message */}
            {statusMessage && (
              <div className={`mt-4 text-center text-sm ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      )}




          {/* <a
            className="bg-orange-500 px-4 py-2 rounded-full text-white shadow-lg transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out"
            href="mailto:sachingupta98925@gmail.com"
          >
            Contact me
          </a> */}
          <a
            className="mt-2 lg:mt-0 bg-orange-500 px-4 py-2 rounded-full text-white shadow-lg transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out"
            href="https://drive.google.com/file/d/1poo9NQ0jEVv4yv4Pjt_GJ_GfiAnIpHDA/view?usp=sharing"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Image Area */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-4 hidden lg:mt-0 lg:flex">
        <img
          className="rounded-b-full w-2/4 lg:w-full max-w-xs flex justify-center items-center lg:max-w-sm mt-20"
          src={bannerImage}
          alt="Sachin's Image"
        />
      </div>
    </div>
  );
}

export default Banner;

































// import React from 'react';
// import bannerImage from '../assets/image_sachin.png';
// import bannerBackground from '../assets/banner_wallpaper.svg'
// import Typed from "typed.js";
// import { useEffect, useRef } from "react";


// function Banner() {
//   const el = useRef(null);
//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["Frontend developer", "Backend Developer", "Full Stack Developer", "Software developer"],
//       startDelay: 100,
//       typeSpeed: 50,
//       backSpeed: 80,
//       backDelay: 200,
//       loop: true,
//     });

//     // Destropying
//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div style={
//       {
//         backgroundImage: `url(${bannerBackground})`,
//         backgroundSize:"cover",
//         height:"500px",
//         // width:"1450px"
        
//         // alignItems:"revert-layer",
//         // borderRadius:"60px",
//         // margin:"5px",
//         // marginRight:"15px",
//       }} className='main-component flex items-center py-2' >
//         {/* {Text Area} */}
//         <div className=" w-full flex items-center justify-around left-section" >
//           <div className='w-2/3 mr-60 space-y-2 text-white'>
//           <h3 className='text-3xl font-semibold'>Hi, I'M </h3>
//             <h1 className='text-5xl font-bold'>Sachin Gupta</h1>
//             <h2 className='text-3xl font-semibold'>And I'M a <span className='font-extrabold' ref={el} ></span></h2>
//             <p className='text-wrap'>Hello! I'm Sachin Gupta, a passionate and driven web developer with a keen interest in creating dynamic and user-friendly web applications. With a solid foundation in the MERN stack, I specialize in building responsive, efficient, and scalable solutions that meet the needs of users and businesses alike.</p>
//             <div className="icons-container space-x-5 flex text-white cursor-pointer">
//               <a href="https://www.linkedin.com/in/sachin-gupta-086a51266/" className='hover:bg-orange-400 border w-14 h-14 rounded-full flex justify-center items-center bg-gray-900'>
//               <i className="fa-brands text-4xl fa-linkedin"></i>
//               </a>
//               <a className='hover:bg-orange-400 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-900' href="https://github.com/sachin-gu">
//               <i class="fa-brands text-4xl fa-github"></i>
//               </a>
//               <a className='hover:bg-orange-400 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-900' href="https://www.instagram.com/_mr_sachin_g?igsh=bWdycTlyczI4bnhj">
//               <i class="fa-brands text-4xl fa-instagram"></i>
//               </a>
//               <a className='hover:bg-orange-400 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-900' href="">
//               <i class="fa-brands text-4xl fa-whatsapp"></i>
//               </a>
//             </div>
//             <br />
//             <div className=' space-y-reverse-0.25'>
//             <a className=' bg-orange-500 px-3 py-1 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out' href="mailto:sachingupta98925@gmail.com"> Contact me</a>
//             <a className='ms-3 bg-orange-500 px-3 py-1 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1poo9NQ0jEVv4yv4Pjt_GJ_GfiAnIpHDA/view?usp=sharing"> Download CV</a>

//             </div>
//           </div>
//         </div> 

//         {/* {image area} */}
//         <div className='flex justify-center right-section'>
//         <img className="rounded-br-sm my-2 mr-56" src={bannerImage} alt="Sachin's Image" />
//         </div> 
//     </div> 
//   )
// }

// export default Banner;
