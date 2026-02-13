
import React, { useState, useMemo } from 'react';
import { products } from '../data/productos';
import ProductCard from '../components/ProductCard';

interface PhonesProps {
  onNavigate: (page: string, id?: number) => void;
}

const Phones: React.FC<PhonesProps> = ({ onNavigate }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');

  const brands = useMemo(() => {
    const allBrands = products.filter(p => p.categoria === 'Teléfonos').map(p => p.marca);
    return ['Todas', ...new Set(allBrands)];
  }, []);

  const filteredPhones = useMemo(() => {
    const phones = products.filter(p => p.categoria === 'Teléfonos');
    if (selectedBrand === 'Todas') return phones;
    return phones.filter(p => p.marca === selectedBrand);
  }, [selectedBrand]);

  return (
    <div className="pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-4">Smartphones</h1>
          <p className="text-slate-500">Encuentra el equipo que mejor se adapta a tu estilo de vida.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Filtrar por Marca:</label>
          <select 
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-white border-slate-200 rounded-xl px-4 py-2 text-sm font-bold focus:ring-blue-600 outline-none"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredPhones.map(phone => (
          <ProductCard 
            key={phone.id} 
            product={phone} 
            onClick={(id) => onNavigate('detail', id)} 
          />
        ))}
      </div>

      {filteredPhones.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
           <p className="text-slate-400">No hay teléfonos disponibles para esta marca.</p>
        </div>
      )}
    </div>
  );
};

export default Phones;
