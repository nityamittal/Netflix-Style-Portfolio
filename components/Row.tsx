import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RowProps {
  title: string;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ title, children }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12 pl-4 sm:pl-12 group relative z-30">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4 transition-colors hover:text-white cursor-pointer inline-flex items-center gap-2">
        {title}
        <span className="text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-normal flex items-center">
          Explore All <ChevronRight className="w-4 h-4" />
        </span>
      </h2>
      
      <div className="relative group/row">
        <ChevronLeft 
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-12 w-12 cursor-pointer opacity-0 group-hover/row:opacity-100 transition hover:scale-125 group-active:scale-110 text-white bg-black/50 rounded-full p-2 ${!isMoved && 'hidden'}`} 
          onClick={() => handleClick('left')} 
        />
        
        <div 
          ref={rowRef}
          className="flex items-stretch space-x-4 overflow-x-scroll no-scrollbar py-4 pr-12"
        >
          {children}
        </div>

        <ChevronRight 
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-12 w-12 cursor-pointer opacity-0 group-hover/row:opacity-100 transition hover:scale-125 group-active:scale-110 text-white bg-black/50 rounded-full p-2" 
          onClick={() => handleClick('right')} 
        />
      </div>
    </div>
  );
};

export default Row;