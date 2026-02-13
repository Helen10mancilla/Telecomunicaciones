
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    producto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatear el mensaje para WhatsApp
    const message = `*Nuevo Mensaje de Contacto - TechStore*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Correo:* ${formData.correo}%0A` +
      `*Producto:* ${formData.producto || 'No especificado'}%0A%0A` +
      `*Mensaje:*%0A${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-20 text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto shadow-2xl shadow-blue-600/30">
          <span className="material-symbols-outlined text-5xl">verified</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-slate-900">¡Mensaje Enviado!</h2>
          <p className="text-slate-500 max-w-md mx-auto text-lg">Gracias por contactarnos, {formData.nombre.split(' ')[0]}. Un asesor se pondrá en contacto contigo muy pronto.</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
        >
          Cerrar
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 pb-20 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">Hablemos de tu próximo <span className="text-blue-600">Upgrade</span></h1>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            ¿Tienes dudas sobre algún equipo o necesitas asesoramiento personalizado? Nuestro equipo de expertos está listo para ayudarte a tomar la mejor decisión.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                <p className="font-bold">ventas@techstore.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Teléfono</p>
                <p className="font-bold">+1 (555) 000-TECH</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Nombre Completo</label>
              <input
                required
                type="text"
                placeholder="Ej. Juan Pérez"
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Teléfono</label>
                <input
                  required
                  type="tel"
                  placeholder="+54..."
                  className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:ring-blue-600 outline-none"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email</label>
                <input
                  required
                  type="email"
                  placeholder="juan@mail.com"
                  className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:ring-blue-600 outline-none"
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Producto de Interés</label>
              <input
                type="text"
                placeholder="Ej. iPhone 15 Pro Max"
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:ring-blue-600 outline-none"
                value={formData.producto}
                onChange={(e) => setFormData({ ...formData, producto: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Mensaje</label>
              <textarea
                rows={4}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:ring-blue-600 outline-none resize-none"
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20">
        <div className="bg-white p-4 rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.41941552244246!3d37.774929511942634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050c58!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1707838942943!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '1.5rem' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-500 font-medium">Visitamos en nuestra tienda física para una experiencia personalizada.</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-blue-600 font-bold hover:underline"
          >
            Ver en Google Maps
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
