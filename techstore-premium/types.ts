
export interface Product {
  id: number;
  nombre: string;
  categoria: string;
  marca: string;
  precio: number;
  imagen: string;
  descripcion: string;
  especificaciones: string[];
  destacado?: boolean;
}

export type Category = 'Todos' | 'Teléfonos' | 'Laptops' | 'Accesorios' | 'Gaming';
