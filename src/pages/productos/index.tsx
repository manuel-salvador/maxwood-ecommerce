import { useState } from 'react';

import PageLayout from '@/layouts/PageLayout';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ProductList from '@/components/pages/productos/ProductList';
import FilterSection from '@/components/pages/productos/FilterSection';
import useFilters from '@/hooks/useFilters';
import { useProductsContext } from '@/context/ProductsContext';

export default function ProductosPage() {
  const [filtersOppened, setFiltersOppened] = useState<boolean>(false);
  const { allProducts } = useProductsContext();

  const {
    products,
    productFilters,
    filters,
    setOrderBy,
    resetFilters,
    updateFilters,
    filterValues,
  } = useFilters(allProducts);

  return (
    <PageLayout title="Productos" className="relative" footer={!filtersOppened}>
      <Breadcrumb />
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
        <ProductList filtersOppened={filtersOppened} products={products} setOrderBy={setOrderBy} />
      </div>
    </PageLayout>
  );
}
