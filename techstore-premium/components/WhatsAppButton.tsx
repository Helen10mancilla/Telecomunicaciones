
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="flex items-center">
        <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-200 text-sm font-bold text-slate-700 pointer-events-none">
          ¿Dudas? Chat con expertos
        </span>
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-3xl">chat</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
