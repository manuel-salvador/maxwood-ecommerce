import { useState } from 'react';

import PageLayout from '@/layouts/PageLayout';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ProductList from '@/components/pages/productos/ProductList';
import FilterSection from '@/components/pages/productos/FilterSection';
import useProducts from '@/hooks/useProducts';
import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();
  const [filtersOppened, setFiltersOppened] = useState<boolean>(false);
  const { products, productFilters, filters, setOrderBy } = useProducts(
    `/api/products/${router.query.category}`,
  );

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
        />
        <ProductList filtersOppened={filtersOppened} products={products} setOrderBy={setOrderBy} />
      </div>
    </PageLayout>
  );
}
