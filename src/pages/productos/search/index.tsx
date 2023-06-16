import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useProductsContext } from '@/context/ProductsContext';
import ProductsLayout from '@/layouts/ProductsLayout';

export default function SearchPage() {
  const router = useRouter();
  const query = router.query.query;
  const queryString = typeof query === 'string' ? query : '';

  const { products, getProductsBySearch } = useProductsContext();

  useEffect(() => {
    getProductsBySearch(queryString);
  }, [query]);

  return <ProductsLayout allProducts={products} query={queryString} />;
}
