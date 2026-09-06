import React, { useState } from 'react';

export default function ProductList({ products, onProductClick }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering the products array based on the search (case-insensitive)
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f8f9fa] flex-1 min-h-full pb-20">
      <div className="px-4 pt-4 pb-2">
        <div className="bg-white rounded-full flex items-center px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/50">
          <span className="text-gray-400 mr-2.5 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder="Search online stores..." 
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="px-4 py-2 space-y-3">
        <h3 className="text-base font-bold text-gray-900 mb-3 tracking-tight">
          {searchQuery ? 'Search Results' : 'Trending Products'}
        </h3>
        
        {/* Rendering the filtered list, or a "Not Found" message if empty */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => {
            const baseVariant = item.variants[0];
            return (
              <div 
                key={item.id}
                onClick={() => onProductClick(item)}
                className="bg-white rounded-2xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex gap-4 cursor-pointer hover:border-purple-300 border border-transparent transition-all active:scale-[0.98]"
              >
                <div className="w-24 h-24 bg-white rounded-xl border border-gray-200 flex shrink-0 items-center justify-center p-2 shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded w-max mb-1.5 uppercase tracking-wide">
                    {item.tag}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{baseVariant.label}</p>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-base font-black text-gray-900">
                      ₹{baseVariant.discountedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center text-gray-500">
            <span className="text-3xl mb-2">🤷‍♂️</span>
            <p className="text-sm font-semibold">No products found</p>
            <p className="text-xs mt-1">Try searching for "iPhone", "Samsung", or "PS5"</p>
          </div>
        )}
      </div>
    </div>
  );
}