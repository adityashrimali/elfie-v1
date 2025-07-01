
import React from 'react';
import { Button } from '@/components/ui/button';
import AnnotationPin from '../AnnotationPin';

const BreathingCTAScreen: React.FC = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-green-100 to-green-200">
    <div className="flex flex-col h-full items-center justify-center p-6">
      <div className="text-center mb-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Take a Breath</h2>
        <p className="text-gray-600 text-lg mb-8">
          Ready for a mindful moment?
        </p>
      </div>
      
      <div className="relative mb-12">
        <div className="w-32 h-32 bg-green-300 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-3xl">🌬️</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 w-full max-w-xs">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg animate-pulse">
          Start 2-min Breathing
        </Button>
        
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg animate-pulse">
          Quick Stretch Break
        </Button>
        
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg animate-pulse">
          Mindful Walking
        </Button>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Your stress levels seem elevated today</p>
      </div>
    </div>

    <AnnotationPin 
      x="calc(50% - 80px)" 
      y="calc(30%)" 
      text="Breathing animations create calm, meditative user experience"
    />
  </div>
);

export default BreathingCTAScreen;
