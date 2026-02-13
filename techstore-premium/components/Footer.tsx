
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-blue-600 text-2xl font-bold">devices</span>
            <span className="text-lg font-black tracking-tight">TechStore</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Líderes en tecnología móvil y laptops. Ofrecemos los mejores productos con garantía oficial y soporte técnico especializado.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-slate-900 uppercase tracking-widest text-xs">Productos</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Smartphones</li>
            <li className="hover:text-blue-600 cursor-pointer">Laptops</li>
            <li className="hover:text-blue-600 cursor-pointer">Accesorios</li>
            <li className="hover:text-blue-600 cursor-pointer">Gaming</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-slate-900 uppercase tracking-widest text-xs">Soporte</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Envíos</li>
            <li className="hover:text-blue-600 cursor-pointer">Garantía</li>
            <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
            <li className="hover:text-blue-600 cursor-pointer">FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-slate-900 uppercase tracking-widest text-xs">Contacto</h4>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 mb-2 block hover:text-blue-600 transition-colors"
          >
            Av. Tecnológica 123, Silicon Valley
          </a>
          <p className="text-sm text-slate-500 mb-2">+1 (555) 000-0000</p>
          <p className="text-sm text-slate-500">hola@techstore.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400">© 2024 TechStore. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-slate-400 hover:text-blue-600 cursor-pointer">public</span>
          <span className="material-symbols-outlined text-slate-400 hover:text-blue-600 cursor-pointer">alternate_email</span>
          <span className="material-symbols-outlined text-slate-400 hover:text-blue-600 cursor-pointer">share</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
