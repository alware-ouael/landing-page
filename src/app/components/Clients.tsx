'use client';

import Image from 'next/image';

const clientLogos = [
    '/images/clients/client1.png',
    '/images/clients/client2.png',
    '/images/clients/client3.png',
    '/images/clients/client4.png',
    '/images/clients/client5.png',
    '/images/clients/client6.png',
    '/images/clients/client7.png',
    '/images/clients/client8.png',
    '/images/clients/client9.png',
    '/images/clients/client10.png',
    '/images/clients/client11.png',
    '/images/clients/client12.png',
    '/images/clients/client13.png',
    '/images/clients/client14.png',
    '/images/clients/client15.png',
    '/images/clients/client16.png',
    '/images/clients/client17.png',
    '/images/clients/client18.png',
];

function Clients() {
    const logosRepeated = [...clientLogos, ...clientLogos];

    return (
        <section id='clients' className="translate-y-[-70%] bg-white rounded-3xl py-6 px-4 mx-[6%] my-10 shadow-md overflow-hidden">
            <div className="overflow-hidden">
                <div
                    className="flex gap-8 min-w-max h-[100px] items-center animate-scroll"
                >
                    {logosRepeated.map((logo, index) => (
                        <div
                            key={index}
                            className="min-w-[120px] h-[100px] flex items-center justify-center"
                        >
                            <Image
                                src={logo}
                                alt={`Client ${index + 1}`}
                                width={120}
                                height={60}
                                className="object-contain"
                                priority={index < clientLogos.length}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Clients;
