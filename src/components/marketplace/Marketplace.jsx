import React, { useState, useEffect } from 'react';
import { fetchMarketplaceProducts } from '../../data/marketplaceData';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

export default function Marketplace() {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list');

  useEffect(() => {
    fetchMarketplaceProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-[350px]">
        <div className="w-8 h-8 border-3 border-purple-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const handleProductClick = (product) => {
    setActiveProduct(product);
    setView('detail');
  };

  return (
    <>
      {view === 'list' ? (
        <ProductList products={products} onProductClick={handleProductClick} />
      ) : (
        <ProductDetail product={activeProduct} onBack={() => setView('list')} />
      )}
    </>
  );
}