
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import AnnotationPin from '../AnnotationPin';

const SnapMealsScreen: React.FC = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-orange-100 to-orange-200">
    <div className="flex flex-col h-full p-6">
      <h2 className="text-2xl font-bold text-center mb-8 mt-16">Snap & Log Meals</h2>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-32 h-32 bg-orange-300 rounded-full flex items-center justify-center mb-6">
          <Camera size={48} className="text-orange-600" />
        </div>
        
        <p className="text-gray-700 text-center mb-6 px-4">
          Take a photo of your meal and we'll automatically log calories and nutrients
        </p>
        
        <Button className="w-full max-w-xs bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4">
          📸 Snap Photo
        </Button>
        
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-6">
          <div className="bg-white/80 rounded-lg p-3 text-center">
            <div className="text-sm font-semibold">Today's Meals</div>
            <div className="text-lg font-bold text-orange-600">3</div>
          </div>
          <div className="bg-white/80 rounded-lg p-3 text-center">
            <div className="text-sm font-semibold">Calories</div>
            <div className="text-lg font-bold text-orange-600">1,240</div>
          </div>
        </div>
      </div>
    </div>

    <AnnotationPin 
      x="calc(50% - 60px)" 
      y="calc(40%)" 
      text="Photo recognition removes manual entry friction"
    />
  </div>
);

export default SnapMealsScreen;
