
import React from 'react';
import { products } from '../data/productos';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onNavigate: (page: string, id?: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featured = products.filter(p => p.destacado).slice(0, 4);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 rounded-[2rem] mx-4 md:mx-0 p-8 md:p-16 text-white">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Nuevo: Serie 2024</span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
             El Futuro de la <span className="text-blue-600">Tecnología</span> está Aquí
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Explora nuestra colección curada de los dispositivos más avanzados del mercado. Rendimiento, diseño y vanguardia en un solo lugar.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('catalog')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-2"
            >
              Comprar Ahora
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
            <button 
              onClick={() => onNavigate('phones')}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-lg transition-all border border-slate-700"
            >
              Ver Teléfonos
            </button>
          </div>
        </div>
        {/* Background Image Placeholder */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 md:opacity-50 pointer-events-none">
           <img src="https://picsum.photos/seed/techhero/1000/1000" className="w-full h-full object-cover" alt="Hero background" />
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-end justify-between mb-8 px-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900">Productos Destacados</h2>
            <p className="text-slate-500 mt-2">Los favoritos de nuestra comunidad este mes</p>
          </div>
          <button onClick={() => onNavigate('catalog')} className="text-blue-600 font-bold hover:underline flex items-center gap-1">
            Ver Todo <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {featured.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={(id) => onNavigate('detail', id)} 
            />
          ))}
        </div>
      </section>

      {/* Brand Experience Banner */}
      <section className="bg-blue-600 rounded-[2rem] p-12 text-center text-white mx-4 md:mx-0">
        <h2 className="text-3xl font-black mb-6">¿Buscas una marca específica?</h2>
        <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto">Filtrado inteligente por marcas líderes para que encuentres exactamente lo que necesitas en segundos.</p>
        <button 
          onClick={() => onNavigate('phones')}
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-black hover:bg-slate-50 transition-colors shadow-lg shadow-black/10"
        >
          Explorar por Marca
        </button>
      </section>
    </div>
  );
};

export default Home;
