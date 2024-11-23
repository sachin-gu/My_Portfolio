import React from 'react';

const projects = [
  {
    title: '\"Flavor Fleet\"- A food Delivery Website ',
    description: 'A food delivery website developed using the MERN stack. It features user authentication, dynamic content, and a responsive design.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://www.linkedin.com/posts/sachin-gupta-086a51266_geeksforgeeks-mernstack-activity-7127907227721474048-UeB_?utm_source=share&utm_medium=member_desktop',
    codeLink: 'https://github.com/sachin-gu/FlavorFleet',
  },
  {
    title: 'Blogging Website',
    description: 'Developed a responsive blogging platform with real-time data sync and user authentication using Firebase',
    technologies: ['React', 'Redux', 'APIs'],
    liveLink: 'https://blog-app-93201.web.app',
    codeLink: 'https://github.com/sachin-gu/blog-app',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills, built with React and Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS'],
    liveLink: 'https://sachin-gu.github.io/My_Portfolio/',
    codeLink: 'https://github.com/sachin-gu/My_Portfolio',
  },
];

function Projects() {
  return (
    <div id='projects' className='main-container mx-16 py-16'>
      <h1 className='text-center text-4xl underline font-semibold'>Projects</h1>
      
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-2'>{project.title}</h2>
            <p className='text-gray-700 mb-4'>{project.description}</p>
            <div className='flex flex-wrap mb-4'>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between'>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700'
              >
                View Project
              </a>
              <a
                href={project.codeLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;








































// import React from 'react'

// function Projects() {
//   return (
//     <div>
//       this is my projects
//     </div>
//   )
// }

// export default Projects;
