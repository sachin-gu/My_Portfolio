import React, { useState } from 'react';
// import BgImage from "../assets/main-violet.jpg";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [section, setSection] = useState('');
  // const sectionHeading = {
  //   intro: 'Intro',
  //   skills: 'Skills',
  //   experience:'dgv',
  //   hobbies:'gh',
  // }

  const renderContent = () => {
    switch (section) {
      case 'skills':
        return "I am proficient in HTML, CSS, JavaScript, and the MERN stack, with a strong passion for solving problems and creating intuitive, user-friendly web applications. My expertise in these technologies allows me to build dynamic and responsive interfaces that enhance user experience. I thrive in environments that challenge me to think critically and innovate, consistently delivering high-quality solutions that meet both user needs and business objectives. In addition to my front-end skills, I have a solid foundation in software development, SQL, and MongoDB for robust database management. My experience with Java enables me to handle backend programming effectively, while my knowledge of AWS allows me to deploy and manage scalable cloud-based applications. This comprehensive skill set empowers me to manage full-stack development projects seamlessly, ensuring smooth integration between front-end interfaces and backend functionalities. I am committed to continuous learning and staying updated with the latest technologies to deliver innovative and efficient web applications.";
      case 'experience':
        return "I have completed my 2-month training and internship at GeeksforGeeks, I worked on projects like Flavor Fleet, a food delivery website where I focused on the frontend development using React.js, creating responsive designs and optimizing user experience. My skills include HTML, CSS, JavaScript/ES6, and API integration, which I used to develop interactive components and manage data efficiently. I am proficient in version control with Git and have experience deploying applications on platforms like Heroku and Netlify. I continuously seek to expand my knowledge and stay updated with the latest industry trends, ensuring that my work is both innovative and of high quality.";
      case 'hobbies':
        return "Beyond coding, I enjoy reading tech blogs, playing chess, and keeping up with the latest trends in technology.";
      // case 'back':
      //   return {abou}
      default:
        return "Hi, I'm Sachin Gupta from Gorakhpur, Uttar Pradesh. I recently completed my B.Tech in Information Technology, where I developed a strong passion for web development. My expertise lies in the MERN stack, which I utilized in projects like \" Flavor Fleet \", a dynamic food delivery website. I'm constantly exploring new technologies and enhancing my skills to create user-friendly and efficient web applications. I am eager to contribute my knowledge and continue growing as a developer.";
    }
  };

  return (
    <>
      <div className='main-container bg-gray-50 py-16' id="about">
        <h1 className='text-center text-4xl underline font-semibold'>About Me</h1>

        <div className='flex justify-center'>
        {/* Image section */}
        {/* <div className='mt-8 ms-12 w-1/3 '>
          <img src={BgImage} alt="Background" className='rounded-lg shadow-lg' />
        </div> */}

        {/* Dynamic Text Section */}

        {isExpanded && (

          <div className='text-section mt-8 px-4 max-w-3xl mx-auto'>
            <p className='text-lg leading-relaxed'>
              {renderContent()}
            </p>

            {/* Buttons to change content */}
            <div className='text-center mt-6'>
              <button 
                onClick={() => setSection('intro')} 
                className={`bg-orange-500 text-white px-4 py-2 m-2 rounded-lg hover:bg-orange-700 ${
                  section === 'intro' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                Intro
              </button>
              <button 
                onClick={() => setSection('skills')} 
                className={`bg-orange-500 text-white px-4 py-2 m-2 rounded-lg hover:bg-orange-700 ${
                  section === 'skills' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                Skills
              </button>
              <button 
                onClick={() => setSection('experience')} 
                className='bg-orange-500 text-white px-4 py-2 m-2 rounded-lg hover:bg-orange-700'
              >
                Experience
              </button>
              <button 
                onClick={() => setSection('hobbies')} 
                className='bg-orange-500 text-white px-4 py-2 m-2 rounded-lg hover:bg-orange-700'
              >
                Hobbies
              </button>
              <button 
                onClick={() => setIsExpanded(false)} 
                className='bg-cyan-700 text-white px-4 py-2 m-2 rounded-lg hover:bg-cyan-500'
              >
                Back to Main
              </button>
            </div>
          </div>
        )}

        {/* Read More Button */}

        </div>
        {!isExpanded && (
        <div className='text-center mt-8 px-16'>
        <h1 className='text-3xl font-bold text-gray-700 mt-4 text-center'>Website And Software Developer</h1>
        <p className='pt-6 text-start'>Hello! I'm Sachin Gupta, a passionate and driven web developer with a keen interest in creating dynamic and user-friendly web applications. With a solid foundation in the MERN stack, I specialize in building responsive, efficient, and scalable solutions that meet the needs of users and businesses alike. <br />  What excites me the most about development is the constant learning and problem-solving it requires. I'm always eager to take on new challenges, whether it's mastering a new technology or finding innovative ways to enhance user experience. Outside of coding, I enjoy exploring the latest tech trends, playing chess, and diving into tech blogs. I'm always looking for opportunities to collaborate on exciting projects and contribute to meaningful solutions that can make a difference.</p>
            <button 
              onClick={() => setIsExpanded(true)} 
              className='bg-green-500 text-white px-6 py-3 mt-4 rounded-lg hover:bg-green-700'
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default About;










































// import React from 'react'
// import BgImage from "../assets/main-violet.jpg";

// function About() {
//   return (
//     <>
//     <div className='main-cointainer py-16'>
//         <h1 className='text-center text-4xl underline font-semibold'>About Me</h1>

//         {/* Image section */}
//         <div>
//           <img src={BgImage} alt="" />
//           <h1>Website And Software Developer</h1>
//         </div>

//         {/* Text Section */}
//         <div>
          
//         </div>
//     </div>
//     </>
//   )
// }

// export default About
