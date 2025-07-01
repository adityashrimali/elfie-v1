
import React from 'react';
import AnnotationPin from '../AnnotationPin';

const SpareScreen: React.FC = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
    <div className="flex flex-col h-full items-center justify-center p-6">
      <div className="text-center">
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h2>
        <p className="text-gray-600 text-lg">
          This feature is in development
        </p>
      </div>
    </div>

    <AnnotationPin 
      x="calc(50%)" 
      y="calc(70%)" 
      text="Placeholder for future feature development"
    />
  </div>
);

export default SpareScreen;
