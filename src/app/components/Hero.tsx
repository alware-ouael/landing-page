'use client'; // if needed in app directory

import Image from 'next/image';

function Hero() {
    return (
        <div className="relative min-h-screen w-screen">
            {/* Background Image */}
            <Image
                src="/images/hero.jpg"
                alt="Background"
                className="absolute top-0 left-0 w-full h-screen object-cover z-[-2]"
                fill
                quality={10}
            />

            {/* Gray Blur Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30 backdrop-blur-xs z-0" />
            <Image
                src="/images/Frame.svg"
                alt="Forground"
                className="absolute bottom-10 left-30 w-full h-screen object-cover z-1 opacity-40"
                fill
                quality={10}
            />
            {/* Add your content here */}
            <div className="relative z-10 p-8 text-white">
                <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
                <p className="mt-4 text-lg">Join us in making a difference!</p>
            </div>
        </div>
    );
}

export default Hero;
