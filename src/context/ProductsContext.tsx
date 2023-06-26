import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

import { ICartItem, IProduct, IProductContextType } from '@/types';
import useLocalStorage from '@/hooks/useLocalStorage';
import CustomToast from '@/components/CustomToast';

const ProductsContext = createContext<IProductContextType>({
  allProducts: [],
  products: [],
  categories: [],
  getProductsByCategory: () => ({}),
  loadingData: false,
  getProductsBySearch: () => ({}),
  cartItems: [],
  addToCart: () => ({}),
  removeFromCart: () => ({}),
  updateCartItemQuantity: () => ({}),
  isCartModalOpen: false,
  openCartModal: () => ({}),
  closeCartModal: () => ({}),
  favoriteProducts: [],
  handleFavorite: () => ({}),
});

function ProductsProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>('CART_ITEMS_V1', []);
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage<IProduct[]>(
    'FAVORITE_PRODUCTS_V1',
    [],
  );

  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { status } = useSession();

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

  const addToCart = ({ productId, quantity = 1 }: { productId: number; quantity?: number }) => {
    const existingCartItem = cartItems.find((item) => item.product.id === productId);
    let newCartItems: ICartItem[];

    if (existingCartItem) {
      newCartItems = cartItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: quantity } : item,
      );

      setCartItems(newCartItems);
    } else {
      const product = allProducts.find((product) => product.id === productId);
      if (!product) return;
      newCartItems = [...cartItems, { product, quantity }];
      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (productId: number) => {
    const newCartItems = [...cartItems].filter((item) => item.product.id !== productId);
    setCartItems(newCartItems);
  };

  const updateCartItemQuantity = ({
    productId,
    quantity,
  }: {
    productId: number;
    quantity: number;
  }) => {
    const newCartItems = cartItems.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item,
    );

    setCartItems(newCartItems);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  const handleFavorite = (productId: number) => {
    if (status !== 'authenticated') {
      toast.custom((t) => (
        <CustomToast
          msg="Para agregar favoritos, ingresá a tu cuenta"
          linkBtn={{ href: '/login', label: 'Ingresá', extraFunction: () => toast.dismiss(t) }}
          closeBtn={<button onClick={() => toast.dismiss(t)}>Cerrar</button>}
        />
      ));
      return;
    }

    const isAlreadyFavorite = favoriteProducts.find((product) => product.id === productId);

    if (isAlreadyFavorite) {
      const newFavorites = favoriteProducts.filter((product) => productId !== product.id);
      setFavoriteProducts(newFavorites);
    } else {
      const newFavoriteProduct = allProducts.find((product) => product.id === productId);
      if (!newFavoriteProduct) return;
      setFavoriteProducts([...favoriteProducts, newFavoriteProduct]);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        products,
        categories,

        getProductsByCategory,
        getProductsBySearch,

        loadingData,

        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,

        isCartModalOpen,
        openCartModal,
        closeCartModal,

        favoriteProducts,
        handleFavorite,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

const useProductsContext = () => useContext(ProductsContext);

export { ProductsProvider, useProductsContext };
