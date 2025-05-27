'use client';

import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return   (
    <footer className='relative bg-mainBlue text-white w-full h-fit p-8 overflow-hidden'>
      {/* Background wave image */}
      <div className='absolute inset-0 z-0 opacity-30'>
        <Image
          src="/images/Frame.svg"
          alt="footer-foreground"
          layout="fill"
          objectFit="cover"
          quality={10}
          priority 
          
        />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-10'>
        
        {/* Logo and Description */}
        <div className='flex-1 max-w-xl'>
          <div className='relative mx-auto md:mx-0 w-[217px] h-[80px] mb-4'>
            <Image
              src="/images/footerLogo.svg"
              alt="footer-logo"
              fill
              quality={10}
              priority
            />
          </div>
          <p className='text-white text-sm leading-relaxed'>
            Alware is a leading Algerian company in the field of designing, managing and securing information systems, especially in the health sector. Main products: Alhis (Hospital Information Management), Alris (Radiology Information system), Alprint, Aldisk, Allis.
          </p>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col gap-2 text-sm'>
          <span className='font-semibold'>About</span>
          <span className='font-semibold'>Client</span>
          <span className='font-semibold'>Contact</span>
        </div>

        {/* Social Icons */}
        <div className='flex flex-col items-start gap-3'>
          <div className='flex gap-4 text-white text-xl'>
            <FaFacebook className='hover:text-green-400 transition' />
            <FaInstagram className='hover:text-green-400 transition' />
            <FaTwitter className='hover:text-green-400 transition' />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
