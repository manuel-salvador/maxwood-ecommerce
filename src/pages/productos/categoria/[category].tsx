import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/layouts/PageLayout';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ProductList from '@/components/pages/productos/ProductList';
import FilterSection from '@/components/pages/productos/FilterSection';
import useFilters from '@/hooks/useFilters';
import { useProductsContext } from '@/context/ProductsContext';

export default function CategoryPage() {
  const category = useRouter().query.category as string;

  const [filtersOppened, setFiltersOppened] = useState<boolean>(false);

  const { products: allProducts, getProductsByCategory } = useProductsContext();

  useEffect(() => {
    getProductsByCategory(category);
  }, [category]);

  const {
    products,
    productFilters,
    filters,
    setOrderBy,
    updateFilters,
    resetFilters,
    filterValues,
  } = useFilters(allProducts);

  const pageTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <PageLayout title={pageTitle} className="relative" footer={!filtersOppened}>
      <Breadcrumb />
      {allProducts.length === 0 ? (
        <div className="text-center pt-10">No hay productos</div>
      ) : (
        <div className="md:flex">
          <FilterSection
            filtersOppened={filtersOppened}
            setFiltersOppened={setFiltersOppened}
            filters={productFilters}
            applyFilters={filters}
            setOrderBy={setOrderBy}
            updateFilters={updateFilters}
            resetFilters={resetFilters}
            filterValues={filterValues}
          />
          <ProductList
            filtersOppened={filtersOppened}
            products={products}
            setOrderBy={setOrderBy}
          />
        </div>
      )}
    </PageLayout>
  );
}
