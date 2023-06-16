import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useProductsContext } from '@/context/ProductsContext';
import ProductsLayout from '@/layouts/ProductsLayout';

export default function CategoryPage() {
  const router = useRouter();
  const category = router.query.category;
  const categoryString = typeof category === 'string' ? category : '';

  const { products, getProductsByCategory } = useProductsContext();

  useEffect(() => {
    getProductsByCategory(categoryString);
  }, [category]);

  return <ProductsLayout allProducts={products} query={categoryString} />;
}
