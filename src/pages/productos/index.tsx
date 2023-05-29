import { useState } from 'react';

import PageLayout from '@/layouts/PageLayout';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ProductList from '@/components/pages/productos/ProductList';
import FilterSection from '@/components/pages/productos/FilterSection';
import useProducts from '@/hooks/useProducts';

export default function ProductosPage() {
  const [filtersOppened, setFiltersOppened] = useState<boolean>(false);
  const { products, productFilters, filters } = useProducts('/api/products');

  return (
    <PageLayout title="Productos" className="relative" footer={!filtersOppened}>
      <Breadcrumb />
      <div className="md:flex">
        <FilterSection
          filtersOppened={filtersOppened}
          setFiltersOppened={setFiltersOppened}
          filters={productFilters}
          applyFilters={filters}
        />
        <ProductList filtersOppened={filtersOppened} products={products} />
      </div>
    </PageLayout>
  );
}
