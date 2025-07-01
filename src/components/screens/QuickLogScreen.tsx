
import React from 'react';
import AnnotationPin from '../AnnotationPin';

const QuickLogScreen: React.FC = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(/lovable-uploads/home.png)` }}
    />
    
    <div className="absolute inset-0 bg-black/20" />
    
    <div className="absolute top-20 left-4 right-4 grid grid-cols-2 gap-3 z-20">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
        <div className="text-2xl mb-2">🚶‍♂️</div>
        <div className="text-sm font-semibold">Steps</div>
        <div className="text-xs text-gray-600">8,234 today</div>
      </div>
      
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
        <div className="text-2xl mb-2">💧</div>
        <div className="text-sm font-semibold">Water</div>
        <div className="text-xs text-gray-600">6/8 glasses</div>
      </div>
      
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center col-span-2">
        <div className="text-2xl mb-2">🍎</div>
        <div className="text-sm font-semibold">Quick Meal Log</div>
        <div className="text-xs text-gray-600">Tap to add meal</div>
      </div>
    </div>

    <AnnotationPin 
      x="calc(50% + 60px)" 
      y="calc(30%)" 
      text="Homescreen widgets make logging instant and frictionless"
    />
  </div>
);

export default QuickLogScreen;
