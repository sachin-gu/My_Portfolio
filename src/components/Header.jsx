import React, { useState } from 'react'

function Header() {
  const[brandName, setBrandName] = useState("Sachin Gupta");
  const[menuLinks, setMenuLinks]=useState([
    {
        title:"About",
        link:"#about",
        id:1
    },
    {
        title:"Projects",
        link:"#projects",
        id:2
    },
    {
        title:"Experience",
        link:"#experience",
        id:3
    },
    {
        title:"Skills",
        link:"#skills",
        id:4
    },
    {
        title:"Contact",
        link:"#contact",
        id:5
    }
  ])

  const[hireButton, setHireButton] = useState(
        {
            title:"Hire Me",
            link:"mailto:sachingupta98925@gmail.com"
        }
  );
  
    return (
    <>
    <div className='h-20 Main flex justify-between items-center px-14 bg-gray-100'>
        <div className='brand logo'>
            {/* Brand Logo */}
            <h1 className='text-4xl font-sans font-bold text-rose-950'>{brandName} </h1>
        </div>
        <div className='space-x-9'>
            {/* Menu Links */}
            {menuLinks.map((link)=>(
                <a key={link.id} href={link.link} className='hover:text-lime-400 transform hover:scale-110 hover:text-sm transition duration-300 ease-in-out'> {link.title} </a>
            ))}
            {/* <a href="/about" className='hover:text-lime-400 transform hover:scale-110 hover:text-lg transition duration-200 ease-in-out'> About </a>
            <a href="/skills" className='hover:text-lime-400 transform hover:scale-110 hover:text-lg transition duration-200 ease-in-out'> Skills </a>
            <a href="/portfolio" className='hover:text-lime-400 transform hover:scale-110 hover:text-lg transition duration-200 ease-in-out'> Portfolio</a>
            <a href="/contact" className='hover:text-lime-400 transform hover:scale-110 hover:text-lg transition duration-200 ease-in-out'> Contact </a> */}
        </div>

{/* Buttons */}
        <div>
              <a href={hireButton.link} className='bg-orange-500 px-3 py-1 rounded-full text-white shadow-lg  transform hover:scale-110 hover:text-lg hover:bg-orange-700 transition duration-300 ease-in-out'> {hireButton.title} </a>
        </div>
    </div> 

  </>

  )
}

export default Header;
