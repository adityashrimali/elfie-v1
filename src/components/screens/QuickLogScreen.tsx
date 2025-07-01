
import React from 'react';
import { Camera, Moon, Footprints } from 'lucide-react';
import AnnotationPin from '../AnnotationPin';

const QuickLogScreen: React.FC = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(/lovable-uploads/c920371e-1179-4f9b-a6f1-70889cedfb57.png)` }}
    />
    
    <div className="absolute inset-0 bg-black/20" />
    
    <div className="absolute top-20 left-4 right-4 grid grid-cols-2 gap-3 z-20">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center animate-breathe cursor-pointer hover:scale-105 transition-transform">
        <div className="text-2xl mb-2">
          <Footprints className="mx-auto text-blue-500" size={32} />
        </div>
        <div className="text-sm font-semibold">Log Run</div>
        <div className="text-xs text-gray-600">Quick entry</div>
      </div>
      
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center animate-breathe cursor-pointer hover:scale-105 transition-transform">
        <div className="text-2xl mb-2">
          <Camera className="mx-auto text-green-500" size={32} />
        </div>
        <div className="text-sm font-semibold">Snap Meal</div>
        <div className="text-xs text-gray-600">Photo log</div>
      </div>
      
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center col-span-2 animate-breathe cursor-pointer hover:scale-105 transition-transform">
        <div className="text-2xl mb-2">
          <Moon className="mx-auto text-purple-500" size={32} />
        </div>
        <div className="text-sm font-semibold">Log Sleep</div>
        <div className="text-xs text-gray-600">Track rest</div>
      </div>
    </div>

    <AnnotationPin 
      x="calc(50%)" 
      y="calc(80%)" 
      text="1-tap widgets = zero friction"
    />
  </div>
);

export default QuickLogScreen;
