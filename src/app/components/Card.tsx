import Image from 'next/image';
import React from 'react';
import { ArrowRight } from 'lucide-react';

type CardProps = {
  image: string;
  title: string;
  isFirst: boolean;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
};

function Card({
  image,
  title,
  isFirst,
  index,
  hoveredIndex,
  setHoveredIndex,
}: CardProps) {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  const footerBgClass = isFirst
    ? isOtherHovered
      ? 'bg-gray-200'
      : 'bg-[#3F3F3F]'
    : isHovered
    ? 'bg-[#3F3F3F]'
    : 'bg-gray-200';

  const textColorClass =
    isFirst && !isOtherHovered
      ? 'text-white'
      : isHovered
      ? 'text-white'
      : 'text-black';

  return (
    <div
      className="max-w-xs h-fit rounded-xl overflow-hidden shadow-md bg-white flex-1 group transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={image + title}
          fill
          className="object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* Footer Section */}
      <div className={`${footerBgClass} px-4 py-4 rounded-b-xl relative transition-colors duration-300`}>
        <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-right"
          style={{ backgroundImage: 'url(/images/brush.svg)' }}
        ></div>

        <div className="relative z-10 flex justify-between items-center">
          <p className={`${textColorClass} font-semibold text-sm leading-tight`}>
            {title}
          </p>
          <button className="bg-green-500 hover:bg-green-600 rounded-full p-2 text-white">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
