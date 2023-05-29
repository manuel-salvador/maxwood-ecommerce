export interface IProduct {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  stock: number;
  categoria: string;
  subCategoria: string;
  material: string;
  color: string;
  dimensiones: Dimensions;
}

export interface Dimensions {
  alto: number;
  ancho: number;
  profundidad: number;
}

export interface IProductFilters {
  categorias: string[];
  subCategorias: string[];
  precioMinMax: number[];
  materiales: string[];
}
