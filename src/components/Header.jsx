import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import React icons

function Header() {
  const [brandName, setBrandName] = useState("Sachin Gupta");
  const [menuLinks, setMenuLinks] = useState([
    { title: "About", link: "#about", id: 1 },
    { title: "Projects", link: "#projects", id: 2 },
    { title: "Experience", link: "#experience", id: 3 },
    { title: "Skills", link: "#skills", id: 4 },
    { title: "Contact", link: "#contact", id: 5 }
  ]);

  const [hireButton, setHireButton] = useState({
    title: "Hire Me",
    link: "mailto:sachingupta98925@gmail.com"
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className='h-20 flex justify-between items-center px-4 md:px-8 lg:px-14 bg-gray-100 relative'>
        <div className='brand logo'>
          {/* Brand Logo */}
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-rose-950'>{brandName}</h1>
        </div>
        <div className='hidden md:flex space-x-6 lg:space-x-9'>
          {/* Menu Links */}
          {menuLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className='hover:text-lime-400 transform hover:scale-110 hover:text-sm transition duration-300 ease-in-out'
            >
              {link.title}
            </a>
          ))}
          {/* Buttons */}
          <a
            href={hireButton.link}
            className='bg-orange-500 px-3 py-1 rounded-full text-white shadow-lg transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'
          >
            {hireButton.title}
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-3xl'>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-gray-100 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className='relative h-full flex flex-col items-center py-4'>
          {/* Close Button */}
          <button onClick={toggleMenu} className='absolute top-4 right-4 text-3xl'>
            <FaTimes />
          </button>
          {/* Menu Links */}
          <div className='flex flex-col items-center mt-12'>
            {menuLinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className='my-2 text-lg hover:text-lime-400 transform hover:scale-110 transition duration-300 ease-in-out'
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.title}
              </a>
            ))}
            <a
              href={hireButton.link}
              className='mt-4 bg-orange-500 px-4 py-2 rounded-full text-white shadow-lg transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'
              onClick={() => setIsMenuOpen(false)} // Close menu on button click
            >
              {hireButton.title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;































// import React, { useState } from 'react'

// function Header() {
//   const[brandName, setBrandName] = useState("Sachin Gupta");
//   const[menuLinks, setMenuLinks]=useState([
//     {
//         title:"About",
//         link:"#about",
//         id:1
//     },
//     {
//         title:"Projects",
//         link:"#projects",
//         id:2
//     },
//     {
//         title:"Experience",
//         link:"#experience",
//         id:3
//     },
//     {
//         title:"Skills",
//         link:"#skills",
//         id:4
//     },
//     {
//         title:"Contact",
//         link:"#contact",
//         id:5
//     }
//   ])

//   const[hireButton, setHireButton] = useState(
//         {
//             title:"Hire Me",
//             link:"mailto:sachingupta98925@gmail.com"
//         }
//   );
  
//     return (
//     <>
//     <div className='h-20 Main flex justify-between items-center px-14 bg-gray-100'>
//         <div className='brand logo'>
//             {/* Brand Logo */}
//             <h1 className='text-4xl font-sans font-bold text-rose-950'>{brandName} </h1>
//         </div>
//         <div className='space-x-9'>
//             {/* Menu Links */}
//             {menuLinks.map((link)=>(
//                 <a key={link.id} href={link.link} className='hover:text-lime-400 transform hover:scale-110 hover:text-sm transition duration-300 ease-in-out'> {link.title} </a>
//             ))}
//             {/* <a href="/about" className='hover:text-lime-400 transform hover:scale-110 hover:text-lg transition duration-200 ease-in-out'> About </a>
//             <a href="/skills" className='hover:text-lime-400 transform hover:scale-110 hover:text-lg transition duration-200 ease-in-out'> Skills </a>
//             <a href="/portfolio" className='hover:text-lime-400 transform hover:scale-110 hover:text-lg transition duration-200 ease-in-out'> Portfolio</a>
//             <a href="/contact" className='hover:text-lime-400 transform hover:scale-110 hover:text-lg transition duration-200 ease-in-out'> Contact </a> */}
//         </div>

// {/* Buttons */}
//         <div>
//               <a href={hireButton.link} className='bg-orange-500 px-3 py-1 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'> {hireButton.title} </a>
//         </div>
//     </div> 

//   </>

//   )
// }

// export default Header;
