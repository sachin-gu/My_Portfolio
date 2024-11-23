import React from 'react';

function Footer() {
  return (
    <div id='about' className='py-5 border bg-slate-100 px-4 sm:px-8'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left max-w-screen-lg'>
        {/* Footer Text */}
        <div className='mb-4 sm:mb-0'>
          <p className='text-sm sm:text-base'>
            @2024 Sachin Gupta <span className='text-gray-600'>All Rights Reserved</span>
          </p>
        </div>
        {/* Links Container */}
        <div className='flex flex-wrap justify-center sm:justify-end gap-4 max-w-full'>
          <a href="" className='hover:underline text-sm sm:text-base'>About</a>
          <a href="" className='hover:underline text-sm sm:text-base'>Privacy Policy</a>
          <a href="" className='hover:underline text-sm sm:text-base'>Licensing</a>
          <a href="" className='hover:underline text-sm sm:text-base'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;































// import React from 'react'

// function Footer() {
//   return (
// <>
// <div id ='about' className='py-5 border bg-slate-100 flex justify-between px-72'>
//     <div>
//         <p>
//             @2024 Sachin Gupta <span>All Rights Reserved</span>
//         </p>
//     </div>
//     <div className='space-x-5'>
//         <a href="" className='hover:underline'>About</a>
//         <a href="" className='hover:underline'>Privacy Policy</a>
//         <a href="" className='hover:underline'>Licensing</a>
//         <a href="" className='hover:underline'>Contact</a>
//     </div>

// </div>


// </>
//   )
// }

// export default Footer;
