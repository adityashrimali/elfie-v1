
import React from 'react';

type Screen = 'welcome' | 'streak' | 'health' | 'saver' | 'leaderboards' | 'community-challenge' | 'faction' | 'quick-log' | 'snap-meals' | 'adaptive-targets' | 'partner-store' | 'dynamic-loading' | 'breathing-cta' | 'spare';

interface NavigationBarProps {
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
  category: 'quick-wins' | 'growth-loops' | 'experimental';
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeScreen, onScreenChange, category }) => {
  const getScreensForCategory = (cat: string) => {
    switch (cat) {
      case 'quick-wins':
        return [
          { id: 'welcome', label: 'Welcome Win' },
          { id: 'streak', label: 'Streak Booster' },
          { id: 'health', label: 'Health Check' },
          { id: 'saver', label: 'Streak Saver' }
        ];
      case 'growth-loops':
        return [
          { id: 'leaderboards', label: 'Leaderboards' },
          { id: 'community-challenge', label: 'Community' },
          { id: 'faction', label: 'Faction Battle' },
          { id: 'quick-log', label: 'Quick-Log' },
          { id: 'snap-meals', label: 'Snap Meals' },
          { id: 'adaptive-targets', label: 'Adaptive' }
        ];
      case 'experimental':
        return [
          { id: 'partner-store', label: 'Partner Store' },
          { id: 'dynamic-loading', label: 'Dynamic Loading' },
          { id: 'breathing-cta', label: 'Breathing CTA' },
          { id: 'spare', label: 'Spare' }
        ];
      default:
        return [];
    }
  };

  const screens = getScreensForCategory(category);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white px-4 py-3 shadow-sm">
      <div className="flex justify-center max-w-sm mx-auto">
        <div className="flex bg-gray-200 rounded p-1 gap-1 overflow-x-auto">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => onScreenChange(screen.id as Screen)}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors whitespace-nowrap ${
                activeScreen === screen.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-300'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
