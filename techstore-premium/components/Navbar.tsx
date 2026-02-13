
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Productos', id: 'catalog' },
    { name: 'Teléfonos', id: 'phones' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="material-symbols-outlined text-blue-600 text-3xl font-bold">devices</span>
            <span className="text-xl font-black tracking-tight">TechStore</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  currentPage === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 font-bold text-slate-700 hover:text-blue-600"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
