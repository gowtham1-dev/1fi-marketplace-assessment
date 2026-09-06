export const productsData = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    tag: "NEW",
    variants: [
      { label: "12GB RAM · 256GB", originalPrice: 134900, discountedPrice: 127400 },
      { label: "12GB RAM · 512GB", originalPrice: 154900, discountedPrice: 147400 },
      { label: "12GB RAM · 1TB", originalPrice: 174900, discountedPrice: 167400 }
    ],
    finishes: [
      { name: "Silver", colorHex: "#E2E4E1" },
      { name: "Desert Titanium", colorHex: "#C48A58" },
      { name: "Deep Blue", colorHex: "#3A3F58" }
    ],
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
    emiSubtitle: "EMI plans backed by mutual funds",
    emiPlans: [
      { id: "plan-3m", tenureMonths: 3, interestRate: 0, cashback: 7500 },
      { id: "plan-6m", tenureMonths: 6, interestRate: 0, cashback: 7500 },
      { id: "plan-12m", tenureMonths: 12, interestRate: 0, cashback: 7500 },
      { id: "plan-24m", tenureMonths: 24, interestRate: 0, cashback: 7500 },
      { id: "plan-36m", tenureMonths: 36, interestRate: 10.5, cashback: 7500 },
      { id: "plan-48m", tenureMonths: 48, interestRate: 10.5, cashback: 7500 },
      { id: "plan-60m", tenureMonths: 60, interestRate: 10.5, cashback: 7500 }
    ],
    details: ["A18 Pro chip with 6-core GPU", "48MP Fusion camera system", "Titanium design with latest Ceramic Shield"]
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    tag: "TRENDING",
    variants: [
      { label: "12GB RAM · 256GB", originalPrice: 134999, discountedPrice: 124999 },
      { label: "12GB RAM · 512GB", originalPrice: 144999, discountedPrice: 134999 },
      { label: "12GB RAM · 1TB", originalPrice: 164999, discountedPrice: 154999 }
    ],
    finishes: [
      { name: "Titanium Gray", colorHex: "#7a7975" },
      { name: "Titanium Black", colorHex: "#282828" },
      { name: "Titanium Violet", colorHex: "#534b62" }
    ],
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=80",
    emiSubtitle: "EMI plans backed by mutual funds",
    emiPlans: [
      { id: "plan-3m", tenureMonths: 3, interestRate: 0, cashback: 5000 },
      { id: "plan-6m", tenureMonths: 6, interestRate: 0, cashback: 5000 },
      { id: "plan-12m", tenureMonths: 12, interestRate: 0, cashback: 5000 },
      { id: "plan-24m", tenureMonths: 24, interestRate: 0, cashback: 5000 }
    ],
    details: ["Snapdragon 8 Gen 3 Processor", "200MP Main Camera with AI zoom", "Built-in S Pen included"]
  },
  {
    id: "ps5-pro",
    name: "Sony PlayStation 5 Pro",
    tag: "HOT",
    variants: [
      { label: "16GB GDDR6 · 2TB SSD (Digital)", originalPrice: 69990, discountedPrice: 64990 },
      { label: "16GB GDDR6 · 2TB SSD + Disc Drive", originalPrice: 79990, discountedPrice: 74990 }
    ],
    finishes: [
      { name: "Glacier White", colorHex: "#F2F2F2" },
      { name: "Midnight Black", colorHex: "#1F1F1F" }
    ],
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80",
    emiSubtitle: "EMI plans backed by mutual funds",
    emiPlans: [
      { id: "plan-3m", tenureMonths: 3, interestRate: 0, cashback: 2500 },
      { id: "plan-6m", tenureMonths: 6, interestRate: 0, cashback: 2500 },
      { id: "plan-12m", tenureMonths: 12, interestRate: 0, cashback: 2500 }
    ],
    details: ["PlayStation Spectral Super Resolution (PSSR)", "Upgraded GPU with 67% more Compute Units", "Advanced Ray Tracing"]
  },
  {
    id: "macbook-pro-m3",
    name: "Apple MacBook Pro 14\"",
    tag: "PRO",
    variants: [
      { label: "18GB Unified RAM · 512GB SSD", originalPrice: 199900, discountedPrice: 189900 },
      { label: "36GB Unified RAM · 1TB SSD", originalPrice: 239900, discountedPrice: 227900 }
    ],
    finishes: [
      { name: "Space Black", colorHex: "#2E3033" },
      { name: "Silver", colorHex: "#E2E4E1" }
    ],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    emiSubtitle: "EMI plans backed by mutual funds",
    emiPlans: [
      { id: "plan-6m", tenureMonths: 6, interestRate: 0, cashback: 10000 },
      { id: "plan-12m", tenureMonths: 12, interestRate: 0, cashback: 10000 },
      { id: "plan-24m", tenureMonths: 24, interestRate: 0, cashback: 10000 },
      { id: "plan-36m", tenureMonths: 36, interestRate: 10.5, cashback: 10000 }
    ],
    details: ["Apple M3 Pro Chip with 11-core CPU", "Liquid Retina XDR display with ProMotion", "Up to 18 hours battery life"]
  },
  {
    id: "pixel-9-pro",
    name: "Google Pixel 9 Pro XL",
    tag: "AI FIRST",
    variants: [
      { label: "16GB RAM · 128GB", originalPrice: 124999, discountedPrice: 114999 },
      { label: "16GB RAM · 256GB", originalPrice: 134999, discountedPrice: 124999 },
      { label: "16GB RAM · 512GB", originalPrice: 149999, discountedPrice: 138999 }
    ],
    finishes: [
      { name: "Obsidian", colorHex: "#2B2D2F" },
      { name: "Porcelain", colorHex: "#F0EFEA" },
      { name: "Hazel", colorHex: "#777C74" }
    ],
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    emiSubtitle: "EMI plans backed by mutual funds",
    emiPlans: [
      { id: "plan-3m", tenureMonths: 3, interestRate: 0, cashback: 6000 },
      { id: "plan-6m", tenureMonths: 6, interestRate: 0, cashback: 6000 },
      { id: "plan-12m", tenureMonths: 12, interestRate: 0, cashback: 6000 }
    ],
    details: ["Google Tensor G4 Chip with Gemini Nano", "Triple rear camera system with 30x Super Res Zoom", "7 years of OS and security updates"]
  },
  {
    id: "ipad-pro-m4",
    name: "Apple iPad Pro 11\" (M4)",
    tag: "OLED",
    variants: [
      { label: "8GB RAM · 256GB (Wi-Fi)", originalPrice: 99900, discountedPrice: 94900 },
      { label: "8GB RAM · 512GB (Wi-Fi)", originalPrice: 119900, discountedPrice: 113900 },
      { label: "16GB RAM · 1TB (Wi-Fi + Cellular)", originalPrice: 179900, discountedPrice: 169900 }
    ],
    finishes: [
      { name: "Space Black", colorHex: "#252728" },
      { name: "Silver", colorHex: "#E5E5E7" }
    ],
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80",
    emiSubtitle: "EMI plans backed by mutual funds",
    emiPlans: [
      { id: "plan-3m", tenureMonths: 3, interestRate: 0, cashback: 4500 },
      { id: "plan-6m", tenureMonths: 6, interestRate: 0, cashback: 4500 },
      { id: "plan-12m", tenureMonths: 12, interestRate: 0, cashback: 4500 },
      { id: "plan-24m", tenureMonths: 24, interestRate: 0, cashback: 4500 }
    ],
    details: ["Ultra Retina XDR display with tandem OLED", "Apple M4 chip with Next-Gen Neural Engine", "Incredibly thin 5.3 mm design"]
  }
];

export const fetchMarketplaceProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 300);
  });
};