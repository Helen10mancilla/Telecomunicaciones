
import React, { useState, useMemo } from 'react';
import { products } from '../data/productos';
import ProductCard from '../components/ProductCard';
import { Category } from '../types';

interface CatalogProps {
  onNavigate: (page: string, id?: number) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const categories: Category[] = ['Todos', 'Teléfonos', 'Laptops', 'Gaming', 'Accesorios'];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') return products;
    return products.filter(p => p.categoria === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pb-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black mb-4">Catálogo General</h1>
        <p className="text-slate-500 max-w-xl mx-auto">Explora toda nuestra gama de tecnología de última generación.</p>
      </div>

      <div className="flex justify-center gap-4 mb-12 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
              activeCategory === cat 
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={(id) => onNavigate('detail', id)} 
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">inventory_2</span>
          <p className="text-slate-500">No encontramos productos en esta categoría por ahora.</p>
        </div>
      )}
    </div>
  );
};

export default Catalog;
