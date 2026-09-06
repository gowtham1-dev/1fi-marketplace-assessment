import React from 'react';

export default function TabNav({ activeTab, onSelectTab }) {
  const tabs = [
    { id: 'brands', label: 'Top Brands' },
    { id: 'stores', label: 'Nearby Stores' },
    { id: 'marketplace', label: '1Fi Marketplace' }
  ];

  return (
    <div className="px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-20">
      <div className="flex bg-gray-100/90 p-1 rounded-full text-xs font-semibold">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex-1 py-2 text-center rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-white text-purple-900 shadow-sm font-bold'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}