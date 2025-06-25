
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Screen = 'welcome' | 'streak' | 'health' | 'community' | 'saver';

interface ModalState {
  isOpen: boolean;
  type: string;
  content?: any;
}

const MobilePrototype = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('welcome');
  const [modal, setModal] = useState<ModalState>({ isOpen: false, type: '' });
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [streakIcon, setStreakIcon] = useState('broken');
  const [healthData, setHealthData] = useState({ weight: '', bpSys: '', bpDia: '', glucose: '' });

  const carouselImages = Array.from({ length: 10 }, (_, i) => 
    `https://images.unsplash.com/photo-${1581091226825 + i}-a6a2a5aee158?w=390&h=844&fit=crop`
  );

  const openModal = (type: string, content?: any) => {
    setModal({ isOpen: true, type, content });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: '' });
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    openModal('coins', { amount: 50 });
  };

  const reviveStreak = () => {
    setStreakIcon('full');
    openModal('streak-revived');
  };

  const NavigationBar = () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white px-4 py-3 shadow-sm">
      <div className="flex justify-center max-w-sm mx-auto">
        <div className="flex bg-gray-200 rounded p-1 gap-1">
          {(['welcome', 'streak', 'health', 'community', 'saver'] as Screen[]).map((screen) => (
            <button
              key={screen}
              onClick={() => setActiveScreen(screen)}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                activeScreen === screen
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-300'
              }`}
            >
              {screen.charAt(0).toUpperCase() + screen.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const AnnotationPin = ({ x, y, text, className = "" }: { x: string; y: string; text: string; className?: string }) => (
    <div 
      className={`absolute z-40 ${className}`} 
      style={{ left: x, top: y }}
    >
      <div className="relative">
        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer group">
          !
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap max-w-48 text-center">
            {text}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-600"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const WelcomeScreen = () => (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ 
          backgroundImage: `url(${carouselImages[carouselIndex]})`,
          transform: `translateX(${carouselIndex * -100}%)`
        }}
      />
      
      <button 
        onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        disabled={carouselIndex === 0}
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={() => setCarouselIndex(Math.min(carouselImages.length - 1, carouselIndex + 1))}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        disabled={carouselIndex === carouselImages.length - 1}
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 z-20">
        <h2 className="text-white text-2xl font-bold mb-4">🎁 Welcome Voucher</h2>
        <Button 
          onClick={() => openModal('voucher')}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Redeem now
        </Button>
      </div>

      <AnnotationPin 
        x="78%" 
        y="14%" 
        text="Instant reward builds day-0 trust"
        className="-translate-x-1/2"
      />
    </div>
  );

  const StreakScreen = () => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=390&h=844&fit=crop)' }}
      />
      
      <button
        onClick={triggerToast}
        className="absolute top-20 left-4 bg-orange-600 text-white px-3 py-2 rounded-lg font-bold text-sm z-20 hover:bg-orange-700 transition-colors"
      >
        🔥 5
      </button>

      {showToast && (
        <div className="absolute top-20 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm z-30 animate-slide-in-right">
          +50
        </div>
      )}
    </div>
  );

  const HealthScreen = () => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=390&h=844&fit=crop)' }}
      />
      
      <button
        onClick={() => openModal('health-check')}
        className="absolute top-20 right-4 w-9 h-9 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors z-20"
      >
        <Plus size={20} />
      </button>

      <AnnotationPin 
        x="70%" 
        y="25%" 
        text="Quick-add vitals → bonus"
      />
    </div>
  );

  const CommunityScreen = () => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=390&h=844&fit=crop)' }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 z-20">
        <h3 className="text-white text-xl font-bold mb-4">Pick your tier</h3>
        <div className="flex gap-3">
          {['Newbie', 'Core', 'Power'].map((tier) => (
            <Button
              key={tier}
              onClick={() => openModal('leaderboard', { tier })}
              className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              {tier}
            </Button>
          ))}
        </div>
      </div>

      <AnnotationPin 
        x="50%" 
        y="70%" 
        text="Tiered boards keep competition fair"
        className="-translate-x-1/2"
      />
    </div>
  );

  const SaverScreen = () => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=390&h=844&fit=crop)' }}
      />
      
      <div className="absolute top-20 left-4 w-16 h-16 z-20">
        {streakIcon === 'broken' ? (
          <div className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center text-2xl">💔</div>
        ) : (
          <div className="w-full h-full bg-orange-500 rounded-full flex items-center justify-center text-2xl">🔥</div>
        )}
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-2xl max-w-xs text-center z-20">
        <p className="text-gray-800 mb-4 font-medium">Missed a day? Revive for 50 coins</p>
        <Button 
          onClick={reviveStreak}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg"
          disabled={streakIcon === 'full'}
        >
          {streakIcon === 'full' ? 'Streak Active!' : 'Use 50 coins'}
        </Button>
      </div>
    </div>
  );

  const renderModal = () => {
    if (!modal.isOpen) return null;

    let content;
    switch (modal.type) {
      case 'voucher':
        content = (
          <div className="text-center">
            <div className="w-full h-32 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">SHOPEE</span>
            </div>
            <h3 className="text-xl font-bold mb-4">You earned a Shopee voucher!</h3>
            <Button onClick={closeModal} className="w-full">OK</Button>
          </div>
        );
        break;
      
      case 'coins':
        content = (
          <div className="text-center">
            <div className="text-6xl mb-4">🪙</div>
            <h3 className="text-xl font-bold mb-4">+{modal.content?.amount} coins added to wallet!</h3>
            <Button onClick={closeModal} className="w-full">Awesome!</Button>
          </div>
        );
        break;
      
      case 'health-check':
        content = (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center mb-6">Quick Health Check</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input 
                  id="weight"
                  value={healthData.weight}
                  onChange={(e) => setHealthData(prev => ({ ...prev, weight: e.target.value }))}
                  placeholder="70"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Label htmlFor="bp-sys">BP Systolic</Label>
                  <Input 
                    id="bp-sys"
                    value={healthData.bpSys}
                    onChange={(e) => setHealthData(prev => ({ ...prev, bpSys: e.target.value }))}
                    placeholder="120"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="bp-dia">BP Diastolic</Label>
                  <Input 
                    id="bp-dia"
                    value={healthData.bpDia}
                    onChange={(e) => setHealthData(prev => ({ ...prev, bpDia: e.target.value }))}
                    placeholder="80"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="glucose">Glucose (mg/dL)</Label>
                <Input 
                  id="glucose"
                  value={healthData.glucose}
                  onChange={(e) => setHealthData(prev => ({ ...prev, glucose: e.target.value }))}
                  placeholder="90"
                />
              </div>
            </div>
            <Button onClick={() => { closeModal(); openModal('coins', { amount: 20 }); }} className="w-full bg-green-500 hover:bg-green-600">
              Collect coins (20%)
            </Button>
          </div>
        );
        break;
      
      case 'leaderboard':
        const tier = modal.content?.tier || 'Newbie';
        content = (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">{tier} Tier Leaderboard</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-yellow-100 rounded-lg">
                <span className="text-2xl">🥇</span>
                <span className="font-semibold">Alex Chen</span>
                <span className="text-blue-600 font-bold">12,543 steps</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                <span className="text-2xl">🥈</span>
                <span className="font-semibold">Sarah Kim</span>
                <span className="text-blue-600 font-bold">11,892 steps</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-100 rounded-lg">
                <span className="text-2xl">🥉</span>
                <span className="font-semibold">Mike Wilson</span>
                <span className="text-blue-600 font-bold">10,756 steps</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Top 3 win grocery coupons!</p>
            <Button onClick={closeModal} className="w-full">Close</Button>
          </div>
        );
        break;
      
      case 'streak-revived':
        content = (
          <div className="text-center">
            <div className="text-6xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-4">Streak revived for 50 coins!</h3>
            <Button onClick={closeModal} className="w-full">Great!</Button>
          </div>
        );
        break;
      
      default:
        content = <div>Modal content</div>;
    }

    return (
      <Dialog open={modal.isOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-sm mx-auto">
          {content}
        </DialogContent>
      </Dialog>
    );
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'welcome': return <WelcomeScreen />;
      case 'streak': return <StreakScreen />;
      case 'health': return <HealthScreen />;
      case 'community': return <CommunityScreen />;
      case 'saver': return <SaverScreen />;
      default: return <WelcomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-sm mx-auto">
        <NavigationBar />
        
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden" style={{ width: '390px', height: '844px' }}>
          {renderScreen()}
        </div>
        
        {renderModal()}
      </div>
    </div>
  );
};

export default MobilePrototype;
