
import React from 'react';
import { Button } from '@/components/ui/button';
import AnnotationPin from '../AnnotationPin';

const PartnerStoreScreen: React.FC = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
    <div className="flex flex-col h-full p-6">
      <h2 className="text-2xl font-bold text-center mb-8 mt-8 text-gray-800">Partner Gear Store</h2>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 rounded-xl p-4 text-center border">
            <div className="text-3xl mb-2 font-bold text-black">NIKE</div>
            <div className="text-xs text-gray-600">Sports gear</div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 text-center border">
            <div className="text-lg mb-2 font-bold text-blue-600">Decathlon</div>
            <div className="text-xs text-gray-600">Equipment</div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 text-center border">
            <div className="text-lg mb-2 font-bold text-red-600">UNIQLO</div>
            <div className="text-xs text-gray-600">Activewear</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">👟</div>
            <div className="text-sm font-semibold">Nike Air</div>
            <div className="text-xs text-gray-600">500 coins</div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">⌚</div>
            <div className="text-sm font-semibold">Apple Watch</div>
            <div className="text-xs text-gray-600">2,000 coins</div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-xl p-4 text-center mb-4">
          <div className="text-lg font-bold text-green-700">Your Coins: 1,250</div>
        </div>
        
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg animate-breathe">
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
