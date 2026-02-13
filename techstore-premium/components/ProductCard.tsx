
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => onClick(product.id)}
    >
      <div className="aspect-square relative overflow-hidden bg-slate-50">
        <img 
          src={product.imagen} 
          alt={product.nombre} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
           <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-800 border border-slate-200">
             {product.marca}
           </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{product.categoria}</p>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">{product.nombre}</h3>
        <p className="text-xl font-black text-slate-900 mb-6">${product.precio.toFixed(2)}</p>
        <button className="w-full py-3 bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2">
           Ver Detalles
           <span className="material-symbols-outlined text-lg">info</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
