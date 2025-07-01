
import React, { useState, useEffect } from 'react';
import AnnotationPin from '../AnnotationPin';

const dynamicText = [
  "Refilling your electrolytes… 🥤",
  "Stretch break? Touch your toes! 🤸‍♂️",
  "Syncing steps from Saigon streets… 🚶",
  "Hydration check — bottoms up! 💧",
  "Loading coins – spend them wisely 💰",
  "Lacing up virtual sneakers… 👟",
  "Your heart's in training mode ❤️",
  "Counting bánh mì calories… 🥪",
  "Charging motivation batteries 🔋",
  "Breath in… out… you've got this 🌬️",
  "Calling the fitness dragons… 🐉",
  "Good vibes loading for you 🌞"
];

const DynamicLoadingScreen: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicText.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="flex flex-col h-full items-center justify-center p-6">
        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-8"></div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading Your Experience</h2>
          <p className="text-gray-600 text-lg min-h-[3rem] flex items-center justify-center">
            {dynamicText[currentTextIndex]}
          </p>
        </div>
        
        <div className="w-full max-w-xs">
          <div className="bg-white/50 rounded-full h-2 mb-4">
            <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
          </div>
          <div className="text-center text-sm text-gray-600">65% complete</div>
        </div>
      </div>

      <AnnotationPin 
        x="calc(50% + 100px)" 
        y="calc(60%)" 
        text="Contextual loading messages keep users engaged during wait times"
      />
    </div>
  );
};

export default DynamicLoadingScreen;
