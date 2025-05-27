'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

function Hero() {
  const fullText = 'Welcome to Alware';
  const fullSubText = 'Join us in making a difference!';

  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const [isTypingMainDone, setIsTypingMainDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const typeTitle = () => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
        setTimeout(typeTitle, 80);
      } else {
        setIsTypingMainDone(true);
      }
    };
    typeTitle();
  }, []);

  useEffect(() => {
    if (!isTypingMainDone) return;

    let subIndex = 0;
    const typeSubtitle = () => {
      if (subIndex <= fullSubText.length) {
        setSubText(fullSubText.slice(0, subIndex));
        subIndex++;
        setTimeout(typeSubtitle, 40);
      }
    };
    typeSubtitle();
  }, [isTypingMainDone]);

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        fill
        quality={100}
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/30 to-black/80 z-0" />

      {/* Foreground Illustration */}
      <Image
        src="/images/Frame.svg"
        alt="Foreground"
        className="absolute bottom-0 left-0 w-full h-full object-cover z-1 opacity-30"
        fill
        quality={80}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            {text}
            <span className="animate-blink">|</span>
          </h1>
          {isTypingMainDone && (
            <p className="mt-4 text-lg md:text-xl text-gray-200">{subText}</p>
          )}

          
        </div>
      </div>
    </div>
  );
}

export default Hero;
