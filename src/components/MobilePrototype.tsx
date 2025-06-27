import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Screen = 'welcome' | 'streak' | 'health' | 'community' | 'saver' | 'faction' | 'community-challenge';

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
  const [selectedFaction, setSelectedFaction] = useState<'rise' | 'explore' | null>(null);

  const carouselImages = [
    '/lovable-uploads/ob1.png',
    '/lovable-uploads/ob2.png',
    '/lovable-uploads/ob3.png',
    '/lovable-uploads/ob4.png'
  ];

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
          {(['welcome', 'streak', 'health', 'community', 'saver', 'faction', 'community-challenge'] as Screen[]).map((screen) => (
            <button
              key={screen}
              onClick={() => setActiveScreen(screen)}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                activeScreen === screen
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-300'
              }`}
            >
              {screen === 'community-challenge' ? 'Community' : screen.charAt(0).toUpperCase() + screen.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const AnnotationPin = ({ x, y, text, className = "" }: { x: string; y: string; text: string; className?: string }) => (
    <div 
      className={`fixed z-50 ${className}`} 
      style={{ left: x, top: y }}
    >
      <div className="relative">
        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer group">
          !
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap max-w-48 text-center z-50">
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
        x="calc(50% + 200px)" 
        y="calc(20% + 100px)" 
        text="Instant reward builds day-0 trust"
        className=""
      />
    </div>
  );

  const StreakScreen = () => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/lovable-uploads/65d2c0fa-455a-4957-bc4c-0e366a58c1e2.png)` }}
      />
      
      <button
        onClick={triggerToast}
        className="absolute top-20 left-4 z-20 hover:scale-110 transition-transform"
      >
        <img 
          src="/lovable-uploads/e9c8b2f9-c142-4952-ac71-f55d4237bfcf.png" 
          alt="Fire streak" 
          className="w-12 h-12"
        />
        <span className="absolute -bottom-1 -right-1 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">5</span>
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
        style={{ backgroundImage: `url(/lovable-uploads/870a38a3-b07e-4652-9e70-5df6160196b9.png)` }}
      />
      
      <button
        onClick={() => openModal('health-check')}
        className="absolute top-20 right-4 w-9 h-9 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors z-20"
      >
        <Plus size={20} />
      </button>

      <AnnotationPin 
        x="calc(50% + 150px)" 
        y="calc(20% + 120px)" 
        text="Quick-add vitals → bonus"
      />
    </div>
  );

  const CommunityScreen = () => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/lovable-uploads/65d2c0fa-455a-4957-bc4c-0e366a58c1e2.png)` }}
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
        x="calc(50% + 100px)" 
        y="calc(50% + 200px)" 
        text="Tiered boards keep competition fair"
        className=""
      />
    </div>
  );

  const SaverScreen = () => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/lovable-uploads/home.png)` }}
      />
      
      <div className="absolute top-20 left-4 w-16 h-16 z-20">
        {streakIcon === 'broken' ? (
          <img 
            src="/lovable-uploads/8c610e46-3ecf-43e0-9743-f53055acc1aa.png" 
            alt="Broken streak" 
            className="w-full h-full"
          />
        ) : (
          <img 
            src="/lovable-uploads/e9c8b2f9-c142-4952-ac71-f55d4237bfcf.png" 
            alt="Active streak" 
            className="w-full h-full"
          />
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

  const FactionScreen = () => {
    if (selectedFaction) {
      return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
          <div className="flex flex-col h-full p-6">
            <button 
              onClick={() => setSelectedFaction(null)}
              className="self-start mb-4 text-gray-600 hover:text-gray-800"
            >
              ← Back
            </button>
            
            <div className="flex-1 flex flex-col">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <img 
                  src={selectedFaction === 'rise' ? '/lovable-uploads/rise.png' : '/lovable-uploads/explore.png'}
                  alt={selectedFaction}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-6">
                <div className="bg-gray-100 rounded-lg p-4 mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Week 1 Medal</span>
                    <span className="text-2xl">🥇</span>
                  </div>
                  <div className="text-sm text-gray-600">Resets in 4d 6h</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Coins this week</span>
                  <span className="font-semibold">1,250</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg coins/member</span>
                  <span className="font-semibold">87</span>
                </div>
                <div className="flex justify-between">
                  <span>Medals so far</span>
                  <span className="font-semibold">3</span>
                </div>
              </div>
              
              <Button className="mt-auto">View full rules</Button>
            </div>
          </div>
          
          <AnnotationPin 
            x="calc(50% + 120px)" 
            y="calc(30% + 60px)" 
            text="Medal resets weekly → fresh motivation, low fatigue"
          />
        </div>
      );
    }

    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
        <div className="flex flex-col h-full p-6">
          <h2 className="text-2xl font-bold text-center mb-8">Choose Your Faction</h2>
          
          <div className="flex gap-4 flex-1">
            <div 
              onClick={() => setSelectedFaction('rise')}
              className="flex-1 bg-gradient-to-b from-red-400 to-red-600 rounded-2xl p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/rise.png"
                  alt="Rise faction"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Rise</h3>
              <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                <div className="bg-yellow-400 h-2 rounded-full w-1/2"></div>
              </div>
              <span className="text-white text-sm">50% progress</span>
            </div>
            
            <div 
              onClick={() => setSelectedFaction('explore')}
              className="flex-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/explore.png"
                  alt="Explore faction"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Explore</h3>
              <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                <div className="bg-yellow-400 h-2 rounded-full w-1/2"></div>
              </div>
              <span className="text-white text-sm">50% progress</span>
            </div>
          </div>
        </div>
        
        <AnnotationPin 
          x="calc(50%)" 
          y="calc(80%)" 
          text="Pick a faction – collect coins together for weekly medals"
        />
      </div>
    );
  };

  const CommunityChallengeScreen = () => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
      <div className="flex flex-col h-full">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(/lovable-uploads/community_challenge.png)` }}>
        </div>
        
        <div className="flex-1 p-6">
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <h3 className="text-lg font-bold mb-2">Goal: 1 billion steps</h3>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '62%' }}></div>
              </div>
              <span className="text-sm font-semibold">62%</span>
            </div>
          </div>
          
          <Button 
            onClick={() => openModal('join-event')}
            className="w-full mb-6 bg-blue-500 hover:bg-blue-600"
          >
            Join local event
          </Button>
          
          <h4 className="font-semibold mb-4">Upcoming Events</h4>
          <div className="flex gap-3 overflow-x-auto">
            {[
              { name: 'Night Run HCMC', date: 'Jul 12' },
              { name: 'Mumbai Monsoon Ride', date: 'Jul 20' },
              { name: 'NYC Singles Run', date: 'Jul 25' }
            ].map((event, index) => (
              <div 
                key={index}
                onClick={() => openModal('event-details', event)}
                className="min-w-40 bg-gray-100 rounded-lg p-3 cursor-pointer hover:bg-gray-200"
              >
                <div className="font-semibold text-sm">{event.name}</div>
                <div className="text-xs text-gray-600">{event.date}</div>
              </div>
            ))}
          </div>
        </div>
        
        <AnnotationPin 
          x="calc(50% - 100px)" 
          y="calc(45%)" 
          text="Whole community cooperates toward one mega milestone"
        />
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
            <div className="w-full h-32 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/48aab7ab-d0af-4e9b-940d-8cbd7ab87968.png" 
                alt="Shopee Voucher" 
                className="w-full h-full object-cover"
              />
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
        const leaderboardData = {
          Newbie: [
            { name: "Sarah Chen", steps: "8,543", emoji: "🏃‍♀️", flavor: "Morning jogger" },
            { name: "Mike Rodriguez", steps: "7,892", emoji: "🚴‍♂️", flavor: "Weekend warrior" },
            { name: "Emma Thompson", steps: "7,234", emoji: "🏃‍♀️", flavor: "Dog walker pro" },
            { name: "James Wilson", steps: "6,789", emoji: "🏃‍♂️", flavor: "Lunch break hiker" },
            { name: "Lisa Park", steps: "6,456", emoji: "🏃‍♀️", flavor: "Stair climber" }
          ],
          Core: [
            { name: "Alex Chen", steps: "12,543", emoji: "🏃‍♂️", flavor: "Marathon trainer" },
            { name: "Sarah Kim", steps: "11,892", emoji: "🏃‍♀️", flavor: "Fitness coach" },
            { name: "Mike Wilson", steps: "10,756", emoji: "🏃‍♂️", flavor: "Running club leader" },
            { name: "Jennifer Lee", steps: "10,234", emoji: "🏃‍♀️", flavor: "Daily commuter" },
            { name: "David Brown", steps: "9,876", emoji: "🏃‍♂️", flavor: "Gym enthusiast" }
          ],
          Power: [
            { name: "Elena Martinez", steps: "18,765", emoji: "🏃‍♀️", flavor: "Ultra runner" },
            { name: "Marcus Johnson", steps: "17,432", emoji: "🏃‍♂️", flavor: "Triathlete" },
            { name: "Sofia Adams", steps: "16,891", emoji: "🏃‍♀️", flavor: "Mountain hiker" },
            { name: "Ryan Cooper", steps: "15,654", emoji: "🏃‍♂️", flavor: "CrossFit athlete" },
            { name: "Nina Patel", steps: "14,987", emoji: "🏃‍♀️", flavor: "Dance instructor" }
          ]
        };
        
        const users = leaderboardData[tier as keyof typeof leaderboardData];
        const medals = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];
        
        content = (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">{tier} Tier Leaderboard</h3>
            <div className="space-y-3 mb-6">
              {users.map((user, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                  index === 0 ? 'bg-yellow-100' : 
                  index === 1 ? 'bg-gray-100' : 
                  index === 2 ? 'bg-orange-100' : 'bg-blue-50'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{medals[index]}</span>
                    <span className="text-lg">{user.emoji}</span>
                  </div>
                  <div className="flex-1 text-left ml-3">
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-xs text-gray-600">{user.flavor}</div>
                  </div>
                  <span className="text-blue-600 font-bold">{user.steps} steps</span>
                </div>
              ))}
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

      case 'join-event':
        content = (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Join Local Event</h3>
            <p className="text-gray-600 mb-6">Connect with your local community and work together towards the 1 billion step goal!</p>
            <Button onClick={closeModal} className="w-full">Find Events Near Me</Button>
          </div>
        );
        break;

      case 'event-details':
        const event = modal.content;
        content = (
          <div className="text-center">
            <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{event?.name}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{event?.name}</h3>
            <p className="text-gray-600 mb-2">Date: {event?.date}</p>
            <p className="text-gray-600 mb-2">Distance: 5km</p>
            <p className="text-gray-600 mb-6">Meeting Point: Central Park</p>
            <Button onClick={closeModal} className="w-full bg-green-500 hover:bg-green-600">RSVP</Button>
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
      case 'faction': return <FactionScreen />;
      case 'community-challenge': return <CommunityChallengeScreen />;
      default: return <WelcomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-sm mx-auto">
        <NavigationBar />
        
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden relative" style={{ width: '390px', height: '844px' }}>
          {renderScreen()}
        </div>
        
        {renderModal()}
      </div>
    </div>
  );
};

export default MobilePrototype;
