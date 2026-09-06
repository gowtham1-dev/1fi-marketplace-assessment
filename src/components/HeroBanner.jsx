import React from 'react';

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#1b0947] via-[#2d1264] to-[#4c1d95] text-white p-5 pt-7 pb-6">
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />

      <div className="relative z-10 w-[60%]">
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-purple-200">
          ✨ NO-COST EMIs
        </span>
        <h2 
          style={{ fontFamily: '"Inter Tight", sans-serif' }} 
          className="text-3xl font-extrabold leading-tight mt-3"
        >
          Shop today, <br />
          <span className="italic font-medium tracking-tight">Pay later using</span> <br />
          <span className="text-purple-300">Mutual funds.</span>
        </h2>
        <p className="text-[12px] text-purple-200/80 mt-2 pr-2">
          No credit score required. No interest. Backed by your investments.
        </p>
      </div>

      {/* The Floating Image */}
      <div className="absolute -bottom-4 -right-6 w-60 h-60 pointer-events-none">
        <img 
          src="/top-banner-bg.png"
          alt="1Fi Marketplace Assets" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}