import React from 'react';

export default function BottomNav({ activeBottomTab, onSelectBottomTab }) {
  const items = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'shop', label: 'Shop', icon: '🛍️' },
    { id: 'emi', label: 'EMI Dues', icon: '📑' },
    { id: 'limit', label: 'Limit', icon: '📈' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-30 px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
      {items.map((item) => {
        const isActive = activeBottomTab === item.id;
        return (
          <div
            key={item.id}
            onClick={() => onSelectBottomTab(item.id)}
            className={`flex flex-col items-center justify-center cursor-pointer transition-colors relative w-14 h-full ${
              isActive ? 'text-purple-700 font-bold' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <span className="text-[22px]">{item.icon}</span>
            <span className="text-[10px] mt-0.5">{item.label}</span>
            {isActive && (
              <div className="absolute bottom-1 w-1 h-1 bg-purple-700 rounded-full" />
            )}
          </div>
        );
      })}
    </nav>
  );
}