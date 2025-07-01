
import React from 'react';
import { Button } from '@/components/ui/button';

interface LaunchHubProps {
  onCategorySelect: (category: 'quick-wins' | 'growth-loops' | 'experimental') => void;
}

const LaunchHub: React.FC<LaunchHubProps> = ({ onCategorySelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Launch HUB</h1>
        <p className="text-gray-600 mb-12 text-lg">Tap any bucket to explore the live screens.</p>
        
        <div className="space-y-6">
          <Button
            onClick={() => onCategorySelect('quick-wins')}
            className="w-full py-6 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            QUICK WINS
          </Button>
          
          <Button
            onClick={() => onCategorySelect('growth-loops')}
            className="w-full py-6 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            GROWTH LOOPS
          </Button>
          
          <Button
            onClick={() => onCategorySelect('experimental')}
            className="w-full py-6 text-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            EXPERIMENTAL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LaunchHub;
