
import React from 'react';

interface AnnotationPinProps {
  x: string;
  y: string;
  text: string;
  className?: string;
}

const AnnotationPin: React.FC<AnnotationPinProps> = ({ x, y, text, className = "" }) => (
  <div 
    className={`fixed z-50 ${className}`} 
    style={{ left: x, top: y }}
  >
    <div className="relative">
      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer group">
        !
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity min-w-max max-w-64 text-center z-50 whitespace-normal">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-600"></div>
        </div>
      </div>
    </div>
  </div>
);

export default AnnotationPin;
