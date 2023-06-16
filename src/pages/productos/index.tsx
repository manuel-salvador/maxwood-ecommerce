import { useProductsContext } from '@/context/ProductsContext';
import ProductsLayout from '@/layouts/ProductsLayout';

export default function ProductosPage() {
  const { allProducts } = useProductsContext();

  return <ProductsLayout allProducts={allProducts} query="Productos" />;
}
