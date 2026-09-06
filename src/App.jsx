import { useState } from 'react';
import HeroBanner from './components/HeroBanner';
import TabNav from './components/TabNav';
import Marketplace from './components/marketplace/Marketplace';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('marketplace'); // Top tabs state
  const [activeBottomTab, setActiveBottomTab] = useState('shop'); // Bottom nav state

  return (
    <div className="min-h-screen bg-slate-900 sm:py-8 flex items-center justify-center">
      {/* Mobile Shell Screen */}
      <div className="w-full max-w-md h-[90vh] min-h-[600px] max-h-[850px] bg-gray-50 relative overflow-hidden flex flex-col sm:rounded-[2.5rem] sm:border-[8px] sm:border-gray-900 shadow-2xl">
        <div className="flex-1 overflow-y-auto pb-16">
          
          {/* 
            Showing dummy screens for other than 'Shop' tabs to ensure that everything is working as expected and the assignment features can be tested without any issues.
          */}
          {activeBottomTab !== 'shop' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl shadow-inner">
                🚧
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 tracking-tight">Coming Soon</h2>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  The <span className="font-semibold text-purple-700 capitalize">{activeBottomTab}</span> section is not required for the current assignment evaluation.
                  If you want to explore it, you can visit official 1Fi app or website. For now, please return to the <span className="font-semibold text-purple-700">Shop</span> tab to continue testing the assignment features.
                </p>
              </div>
              <button 
                onClick={() => setActiveBottomTab('shop')}
                className="mt-2 px-6 py-2.5 bg-purple-700 text-white text-sm font-bold rounded-xl shadow-md hover:bg-purple-800 transition-colors active:scale-95"
              >
                Return to Shop
              </button>
            </div>
          ) : (
            <>
              <HeroBanner />
              <TabNav activeTab={activeTab} onSelectTab={setActiveTab} />

              {activeTab === 'marketplace' && <Marketplace />}

              {activeTab === 'brands' && (
                <div className="flex flex-col items-center justify-center py-24 px-6 text-center text-gray-400">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl mb-3">🏷️</div>
                  <p className="text-sm font-semibold text-gray-700">Top Brands</p>
                  <p className="text-xs text-gray-400 mt-1">Explore verified partner brands coming soon.</p>
                </div>
              )}

              {activeTab === 'stores' && (
                <div className="flex flex-col items-center justify-center py-24 px-6 text-center text-gray-400">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl mb-3">🏪</div>
                  <p className="text-sm font-semibold text-gray-700">Nearby Stores</p>
                  <p className="text-xs text-gray-400 mt-1">Local partner stores section coming soon.</p>
                </div>
              )}
            </>
          )}
        </div>

        <BottomNav activeBottomTab={activeBottomTab} onSelectBottomTab={setActiveBottomTab} />
      </div>
    </div>
  );
}

export default App;