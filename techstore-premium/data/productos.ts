
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    nombre: "iPhone 15 Pro",
    categoria: "Teléfonos",
    marca: "Apple",
    precio: 999.00,
    imagen: "https://picsum.photos/seed/iphone/600/600",
    descripcion: "El iPhone más potente hasta la fecha con acabado en titanio de grado aeroespacial.",
    especificaciones: ["Chip A17 Pro", "Pantalla Super Retina XDR", "Sistema de cámaras Pro", "Botón de Acción"],
    destacado: true
  },
  {
    id: 2,
    nombre: "Samsung S24 Ultra",
    categoria: "Teléfonos",
    marca: "Samsung",
    precio: 1199.00,
    imagen: "https://picsum.photos/seed/s24/600/600",
    descripcion: "Inteligencia artificial integrada para una experiencia móvil sin precedentes.",
    especificaciones: ["Snapdragon 8 Gen 3", "Pantalla QHD+ de 6.8\"", "Cámara de 200MP", "S Pen integrado"],
    destacado: true
  },
  {
    id: 3,
    nombre: "Xiaomi 14 Ultra",
    categoria: "Teléfonos",
    marca: "Xiaomi",
    precio: 1099.00,
    imagen: "https://picsum.photos/seed/xiaomi14/600/600",
    descripcion: "La culminación de la fotografía móvil con óptica Leica.",
    especificaciones: ["Sensor de 1 pulgada", "Carga rápida 90W", "Pantalla AMOLED 120Hz", "Snapdragon 8 Gen 3"],
    destacado: true
  },
  {
    id: 4,
    nombre: "Google Pixel 8 Pro",
    categoria: "Teléfonos",
    marca: "Google",
    precio: 899.00,
    imagen: "https://picsum.photos/seed/pixel8/600/600",
    descripcion: "El teléfono diseñado por Google para ser más personal y útil.",
    especificaciones: ["Chip Google Tensor G3", "Cámara Triple Avanzada", "IA Fotográfica", "VPN Integrada"]
  },
  {
    id: 5,
    nombre: "MacBook Pro M3",
    categoria: "Laptops",
    marca: "Apple",
    precio: 1599.00,
    imagen: "https://picsum.photos/seed/macbook/600/600",
    descripcion: "Potencia profesional con la eficiencia revolucionaria de los chips M3.",
    especificaciones: ["Chip M3", "Pantalla Liquid Retina XDR", "Hasta 22 horas de batería", "Cámara 1080p"]
  },
  {
    id: 6,
    nombre: "Asus ROG Zephyrus",
    categoria: "Gaming",
    marca: "Asus",
    precio: 1899.00,
    imagen: "https://picsum.photos/seed/rog/600/600",
    descripcion: "Rendimiento gaming extremo en un chasis ultradelgado y elegante.",
    especificaciones: ["RTX 4080", "Pantalla 240Hz Nebula", "Refrigeración líquida", "Teclado RGB"],
    destacado: true
  },
  {
    id: 7,
    nombre: "Sony WH-1000XM5",
    categoria: "Accesorios",
    marca: "Sony",
    precio: 349.00,
    imagen: "https://picsum.photos/seed/sony/600/600",
    descripcion: "La mejor cancelación de ruido de la industria con sonido excepcional.",
    especificaciones: ["Cancelación de ruido líder", "30 horas de batería", "Llamadas ultranítidas", "Carga rápida"]
  },
  {
    id: 8,
    nombre: "Apple Watch Ultra 2",
    categoria: "Accesorios",
    marca: "Apple",
    precio: 799.00,
    imagen: "https://picsum.photos/seed/watch/600/600",
    descripcion: "El reloj de aventura más capaz y robusto, llevado al siguiente nivel.",
    especificaciones: ["Caja de titanio de 49mm", "Pantalla de 3000 nits", "GPS de doble frecuencia", "Botón de acción personalizable"]
  }
];
