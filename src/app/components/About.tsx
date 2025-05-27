import React from 'react';

function About() {
  return (
    <div id='about' className="flex flex-col md:flex-row  justify-center px-6 md:px-16 py-12 bg-white">
      {/* Images */}
      <div className=" grid grid-cols-2 grid-rows-2 gap-2 md:w-1/2 mb-8 md:mb-0">
        <img
          src="/images/about1.svg" // replace with your image paths
          alt="img1"
          className="rounded-xl w-full h-full translate-y-[15%] object-cover"
        />
        <img
          src="/images/about3.svg"
          alt="img2"
          className="border rounded-lg"
        />
       
        <img
          src="/images/about2.svg"
          alt="img3"
          className="rounded-xl w-full h-1/2 translate-y-[-22%] object-cover row-start-2 col-start-2"
        />
      
      </div>

      {/* Text */}
      
      <div className="md:w-1/2 text-center md:text-left px-4 ">
        <h2 className="title mb-4">
          About <span className="text-mainBlue">US</span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Alware is a leading Algerian company in the field of designing,
          managing and securing information systems, especially in the health
          sector. Main products include Alhis (Hospital Information Management),
          Alris (Radiology Information System), Alprint, Aldisk, and Allis.
        </p>
      </div>
    </div>
  );
}

export default About;
