
import React from 'react';
import { Button } from '@/components/ui/button';
import AnnotationPin from '../AnnotationPin';

const PartnerStoreScreen: React.FC = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(/lovable-uploads/48aab7ab-d0af-4e9b-940d-8cbd7ab87968.png)` }}
    />
    
    <div className="absolute inset-0 bg-black/40" />
    
    <div className="absolute inset-0 flex flex-col p-6 z-20">
      <h2 className="text-white text-2xl font-bold text-center mb-8 mt-16">Partner Store</h2>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">👟</div>
            <div className="text-sm font-semibold">Nike Air</div>
            <div className="text-xs text-gray-600">500 coins</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">⌚</div>
            <div className="text-sm font-semibold">Apple Watch</div>
            <div className="text-xs text-gray-600">2,000 coins</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🥤</div>
            <div className="text-sm font-semibold">Protein Shake</div>
            <div className="text-xs text-gray-600">150 coins</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🎧</div>
            <div className="text-sm font-semibold">AirPods</div>
            <div className="text-xs text-gray-600">800 coins</div>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center mb-4">
          <div className="text-lg font-bold">Your Coins: 1,250</div>
        </div>
        
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg">
          Browse All Rewards
        </Button>
      </div>
    </div>

    <AnnotationPin 
      x="calc(50% - 80px)" 
      y="calc(45%)" 
      text="Partner rewards create real-world value for virtual achievements"
    />
  </div>
);

export default PartnerStoreScreen;
