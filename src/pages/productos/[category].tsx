import { useState } from 'react';

import PageLayout from '@/layouts/PageLayout';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ProductList from '@/components/pages/productos/ProductList';
import FilterSection from '@/components/pages/productos/FilterSection';
import useProducts from '@/hooks/useProducts';
import { useRouter } from 'next/router';

export default function CategoryPage() {
  const category = useRouter().query.category as string;
  const [filtersOppened, setFiltersOppened] = useState<boolean>(false);
  const { products, productFilters, filters, setOrderBy } = useProducts(
    `/api/products/${category}`,
  );

  return (
    <PageLayout
      title={category?.charAt(0).toUpperCase() + category.slice(1)}
      className="relative"
      footer={!filtersOppened}
    >
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
