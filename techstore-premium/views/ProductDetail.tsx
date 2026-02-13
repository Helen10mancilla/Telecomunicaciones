
import React from 'react';
import { products } from '../data/productos';

interface ProductDetailProps {
  productId: number;
  onNavigate: (page: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate }) => {
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p>Producto no encontrado.</p>
        <button onClick={() => onNavigate('catalog')} className="text-blue-600 underline">Volver al catálogo</button>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12 pb-20">
      <button 
        onClick={() => onNavigate('catalog')}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 font-bold transition-colors"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Volver
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Gallery */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm aspect-square">
          <img 
            src={product.imagen} 
            alt={product.nombre} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">{product.marca} • {product.categoria}</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{product.nombre}</h1>
            <p className="text-3xl font-black text-slate-900">${product.precio.toFixed(2)}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Descripción</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{product.descripcion}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Especificaciones</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.especificaciones.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">
                  <span className="material-symbols-outlined text-blue-600 text-lg">check_circle</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="flex-1 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-3">
              Solicitar Compra
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <a 
              href={`https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20producto:%20${product.nombre}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-5 bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-900 font-black text-lg rounded-2xl transition-all flex items-center justify-center gap-3"
            >
              WhatsApp
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
