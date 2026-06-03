import { useState } from 'react';

interface PhotoCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export default function PhotoCard({ image, title, description, delay = 0 }: PhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="elegant-card overflow-hidden group cursor-pointer fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 sm:h-72">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-60'
          }`}
        ></div>

        {/* Decorative corners on hover */}
        {isHovered && (
          <>
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-purple-400 animate-pulse"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-purple-400 animate-pulse"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-playfair font-bold text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400 font-lora line-clamp-3">
          {description}
        </p>
        
        {/* Decorative line */}
        <div className="h-px bg-gradient-to-r from-purple-600 via-purple-400 to-transparent"></div>
        
        {/* View More indicator */}
        <div className={`flex items-center gap-2 text-xs font-montserrat text-purple-400 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
        }`}>
          <span></span>
          <span className="text-lg"></span>
        </div>
      </div>
    </div>
  );
}
