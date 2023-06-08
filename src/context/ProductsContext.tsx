import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { IProduct, IProductContextType } from '@/types';

const ProductsContext = createContext<IProductContextType>({
  allProducts: [],
  products: [],
  categories: [],
  getProductsByCategory: () => {
    return {};
  },
  loadingData: false,
  getProductsBySearch: () => {
    return {};
  },
});

function ProductsProvider({ children }: { children: ReactNode }) {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // Obtener todos los productos
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getAllProducts();
  }, []);

  // Obtener productos por categoría
  const getProductsByCategory = async (category: string) => {
    setLoadingData(true);
    try {
      const response = await fetch(`/api/products/${category}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error filtering products by category:', error);
    } finally {
      setLoadingData(false);
    }
  };

  // Obtener productos por query search
  const getProductsBySearch = async (query: string) => {
    try {
      const response = await fetch(`/api/products?search=${query}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  // Obtener las categorías disponibles
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        const uniqueCategories: string[] = Array.from(
          new Set(data.map((product: IProduct) => product.categoria)),
        );

        const uniqueSubcategories: string[] = Array.from(
          new Set(data.map((product: IProduct) => product.subCategoria)),
        );
        setCategories([...uniqueCategories, ...uniqueSubcategories]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getCategories();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        products,
        categories,
        getProductsByCategory,
        loadingData,
        getProductsBySearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

const useProductsContext = () => useContext(ProductsContext);

export { ProductsProvider, useProductsContext };
