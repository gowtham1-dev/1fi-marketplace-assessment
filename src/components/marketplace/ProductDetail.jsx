import React, { useState } from 'react';

export default function ProductDetail({ product, onBack }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedPlanId, setSelectedPlanId] = useState(product.emiPlans[0].id);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const currentVariant = product.variants[selectedVariant] || product.variants[0];
  const selectedPlan = product.emiPlans.find((p) => p.id === selectedPlanId);

  const getMonthlyAmount = (plan, price) => {
    if (plan.monthlyAmount) return plan.monthlyAmount;
    const interestMultiplier = plan.interestRate > 0 ? 1 + (plan.interestRate / 100) : 1;
    return Math.round((price * interestMultiplier) / plan.tenureMonths);
  };

  const selectedMonthly = selectedPlan ? getMonthlyAmount(selectedPlan, currentVariant.discountedPrice) : 0;

  return (
    <div className="bg-gray-50 flex-1 p-4 space-y-3">
      <button onClick={onBack} className="text-sm text-purple-700 font-semibold flex items-center gap-1 mb-2">
        ← Back to products
      </button>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <span className="self-start text-[11px] font-bold text-red-500 tracking-wider bg-red-50 px-2 py-0.5 rounded uppercase">
          {product.tag}
        </span>
        
        <div className="w-40 h-48 my-3 flex items-center justify-center overflow-hidden rounded-2xl bg-white border border-gray-200 p-3 shadow-sm">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
        </div>
        
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">
            ₹{currentVariant.discountedPrice.toLocaleString('en-IN')}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹{currentVariant.originalPrice.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="mt-4 w-full">
          <span className="text-[11px] font-semibold text-gray-500 mb-2 block uppercase tracking-wide">Select Variant:</span>
          <div className="flex flex-wrap gap-2 justify-center">
            {product.variants.map((variant, idx) => (
              <button
                key={variant.label}
                onClick={() => setSelectedVariant(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  selectedVariant === idx
                    ? 'border-purple-600 bg-purple-50 text-purple-700 shadow-sm ring-1 ring-purple-200'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-gray-100'
                }`}
              >
                {variant.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 w-full flex flex-col items-center">
          <span className="text-[11px] text-gray-500 mb-2 block">
            Available in {product.finishes.length} finishes ({product.finishes[selectedFinish].name})
          </span>
          <div className="flex gap-2.5">
            {product.finishes.map((finish, idx) => (
              <button
                key={finish.name}
                onClick={() => setSelectedFinish(idx)}
                style={{ backgroundColor: finish.colorHex }}
                className={`w-7 h-7 rounded-full border-2 transition-transform ${
                  selectedFinish === idx ? 'border-purple-600 scale-110 shadow-md' : 'border-white hover:scale-105 shadow-sm'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-sm">
        <h4 className="font-bold text-gray-800 mb-2">Relevant Details</h4>
        <ul className="text-gray-600 space-y-1.5 text-xs list-disc pl-4">
          {product.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold text-gray-800 mb-2 mt-4">{product.emiSubtitle}</h4>
        <div className="space-y-2.5">
          {product.emiPlans.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            const monthly = getMonthlyAmount(plan, currentVariant.discountedPrice);
            
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`cursor-pointer rounded-xl p-3.5 border-2 transition-all ${
                  isSelected 
                    ? 'border-purple-600 bg-purple-50/70 shadow-sm' 
                    : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-base font-bold text-gray-900">
                      ₹{monthly.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 ml-1">× {plan.tenureMonths} months</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    plan.interestRate === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {plan.interestRate}% interest
                  </span>
                </div>
                {plan.cashback > 0 && (
                  <p className="text-[11px] text-emerald-600 font-medium mt-1.5 flex items-center gap-1">
                    <span>✨</span> Additional cashback of ₹{plan.cashback.toLocaleString('en-IN')}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="sticky bottom-0 pt-2 pb-3 bg-gray-50 z-10 border-t border-gray-100/50 mt-4">
        <button
          onClick={() => setIsSuccessModalOpen(true)}
          className="w-full bg-purple-700 hover:bg-purple-800 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
        >
          <span>Proceed with ₹{selectedMonthly.toLocaleString('en-IN')}/mo</span>
          <span>→</span>
        </button>
      </div>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl p-6 max-w-[280px] w-full text-center space-y-4 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-inner">
              ✓
            </div>
            <h3 className="text-lg font-bold text-gray-900">Plan Selected!</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Proceeding with <b className="text-gray-900">{product.name} ({currentVariant.label})</b> on the {selectedPlan.tenureMonths}-month EMI plan at <b className="text-purple-700">₹{selectedMonthly.toLocaleString('en-IN')}/mo</b>.
            </p>
            <button 
              onClick={() => setIsSuccessModalOpen(false)} 
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl text-sm transition-colors mt-2"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}