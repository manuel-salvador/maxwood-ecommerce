export interface IProduct {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  imagenes: Imagenes[];
  precio: number;
  stock: number;
  categoria: string;
  subCategoria: string;
  material: string;
  color: string;
  dimensiones: Dimensions;
}

interface Imagenes {
  alt: string;
  url: string;
}

interface Dimensions {
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

export interface IProductContextType {
  allProducts: IProduct[];
  products: IProduct[];
  categories: string[];
  getProductsByCategory: (category: string) => void;
  loadingData: boolean;
  getProductsBySearch: (query: string) => void;
}
