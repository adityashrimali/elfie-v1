
import React from 'react';
import { Button } from '@/components/ui/button';
import AnnotationPin from '../AnnotationPin';

const AdaptiveTargetsScreen: React.FC = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-purple-100 to-purple-200">
    <div className="flex flex-col h-full p-6">
      <h2 className="text-2xl font-bold text-center mb-8 mt-16">Smart Targets</h2>
      
      <div className="flex-1">
        <div className="bg-white/90 rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">This Week's Goal</span>
            <span className="text-sm text-gray-600">Adjusted</span>
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-2">7,500 steps/day</div>
          <div className="text-sm text-gray-600">Usually 10,000 • Reduced for recovery week</div>
        </div>
        
        <div className="bg-white/90 rounded-xl p-4 mb-4">
          <div className="font-semibold mb-3">Why the adjustment?</div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-red-500 mr-2">•</span>
              Lower sleep quality (5.2h avg)
            </div>
            <div className="flex items-center">
              <span className="text-orange-500 mr-2">•</span>
              Higher stress levels detected
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              Previous week exceeded targets
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Progress</span>
            <span className="text-sm font-bold text-green-600">86%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '86%' }}></div>
          </div>
        </div>
        
        <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg">
          Accept Smart Goal
        </Button>
      </div>
    </div>

    <AnnotationPin 
      x="calc(50% + 80px)" 
      y="calc(35%)" 
      text="AI adjusts goals based on recovery data to prevent burnout"
    />
  </div>
);

export default AdaptiveTargetsScreen;
