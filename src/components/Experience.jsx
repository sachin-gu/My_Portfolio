import React, { useState } from 'react';

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState('job');

  const experiences = {
    job: {
      title: 'MERN STACK TRAINING AND INTERNSHIP at GeeksforGeeks',
      duration: 'June 2024 - August 2024',
      description:
        'Worked on developing scalable web applications using the MERN stack. Gained hands-on experience with front-end and back-end technologies, collaborating with a team to deliver high-quality projects.',
      link: 'https://media.geeksforgeeks.org/certificates/1692611743/d589e12a838a5c0892f9ab20f85a6dd4.pdf',
    },
    project: {
      title: 'Flavor Fleet - Food Delivery Website',
      duration: 'March 2024 - May 2024',
      description:
        'Developed a full-fledged food delivery website using the MERN stack. Focused on front-end development, creating an intuitive UI/UX design, and integrated APIs for real-time order tracking.',
      link: 'https://www.linkedin.com/posts/sachin-gupta-086a51266_geeksforgeeks-mernstack-activity-7127907227721474048-UeB_?utm_source=share&utm_medium=member_desktop',
    },
    current: {
      title: 'HUCHSTAR',
      duration: 'August 2024 - Present',
      description:
        'Worked with various clients to build responsive and dynamic websites using HTML, CSS, JavaScript, and React. Focused on delivering user-centric designs and ensuring cross-browser compatibility.',
      link: 'https://huchstar.com/#',
    },
  };

  return (
    <div id='experience' className="py-16 px-8 bg-gray-100">
      <h1 className="text-center text-4xl font-semibold underline">Experience</h1>

      <div className="flex justify-center mt-8">
        <div className="max-w-3xl">
          <div className="mb-4">
          <button
              onClick={() => setSelectedExperience('current')}
              className={`px-4 py-2 m-2 rounded-lg ${
                selectedExperience === 'current' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
              } hover:bg-blue-700`}
            >
              Job Experience
            </button>
            <button
              onClick={() => setSelectedExperience('job')}
              className={`px-4 py-2 m-2 rounded-lg ${
                selectedExperience === 'job' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
              } hover:bg-blue-700`}
            >
              Internship Experience
            </button>
            <button
              onClick={() => setSelectedExperience('project')}
              className={`px-4 py-2 m-2 rounded-lg ${
                selectedExperience === 'project' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
              } hover:bg-blue-700`}
            >
              Projects
            </button>

          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">{experiences[selectedExperience].title}</h2>
            <p className="text-gray-600">{experiences[selectedExperience].duration}</p>
            <p className="mt-4">{experiences[selectedExperience].description}</p>
            <a
              href={experiences[selectedExperience].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 underline hover:text-blue-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;







































// import React from 'react'

// function Experience() {
//   return (
//     <div>
//       this is my experience 
//     </div>
//   )
// }

// export default Experience;
