# 1Fi Marketplace Assessment

A mobile-responsive React application built to integrate a dynamic "1Fi Marketplace" into the existing 1Fi App's Shop interface, fulfilling all core and evaluation criteria for the SDE internship assignment.

🔗 **Live Demo:** [https://1fi-marketplace-assessment-gowtham.vercel.app/](https://1fi-marketplace-assessment-gowtham.vercel.app/)

---

## 🚀 Tech Stack
* **Frontend:** React.js, Tailwind CSS
* **Build Tool:** Vite
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Data Architecture:** Decoupled mock API service simulating real backend product retrieval

---

## 🎯 Assignment Implementation & Features
* **UI/UX Consistency:** Replicated the exact branding, colors, background styling, spacing, and typography of the original 1Fi Android application.
* **Functional Navigation:** 
  * Features a fully interactive bottom navigation bar with active state indicators and fallback "Coming Soon" screens for unrequired sections.
  * Includes the required 3-way top tab switcher (**Top Brands**, **Nearby Stores**, and **1Fi Marketplace**).
* **Dynamic Product Catalog:** 
  * Product details, images, available color finishes, and mutual-fund-backed EMI plans are fetched dynamically from a mock data service (`src/data/marketplaceData.js`).
  * Includes a live, real-time search bar filter on the main listing view.
* **Advanced Detail & EMI Flow:** 
  * Selecting a product opens a detailed view with RAM/Storage variant buttons that **dynamically recalculate** prices and monthly EMI installments.
  * Interactive color finish selectors and selectable EMI tenure plans with zero-cost interest indicators and cashback highlights.
  * Confirmation checkout modal workflow upon clicking the CTA button.

---

## 🛠️ Local Setup & Installation

To run this project locally on your machine:

1. **Clone the repository**
   ```
   git clone [https://github.com/gowtham1-dev/1fi-marketplace-assessment.git](https://github.com/gowtham1-dev/1fi-marketplace-assessment.git)
   cd 1fi-marketplace-assessment
   ```

2. **Install dependencies**

    ` npm install `

3. **Start the development server**

   ` npm run dev`

4. **Open in browser**
    Navigate to http://localhost:5173 (Best viewed using mobile responsive dimensions/device toolbar).

   
