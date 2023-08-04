import { useState } from 'react';

import PageLayout from '@/layouts/PageLayout';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ProductList from '@/components/pages/productos/ProductList';
import FilterSection from '@/components/pages/productos/FilterSection';
import useFilters from '@/hooks/useFilters';
import { IProduct } from '@/types';

type Props = {
  allProducts: IProduct[];
  query: string;
};

export default function ProductsLayout({ allProducts, query }: Props) {
  const [filtersOppened, setFiltersOppened] = useState<boolean>(false);

  const {
    products,
    productFilters,
    filters,
    setOrderBy,
    updateFilters,
    resetFilters,
    filterValues,
  } = useFilters(allProducts);

  const pageTitle = query ? query : '';

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
          {products.length > 0 ? (
            <ProductList
              filtersOppened={filtersOppened}
              products={products}
              setOrderBy={setOrderBy}
            />
          ) : (
            <div className=" w-full text-center mt-2 mb-10 flex flex-col gap-4 sticky top-24 h-fit">
              <span>No hay productos que coincidan con los filtros seleccionados</span>
              <button
                onClick={resetFilters}
                className="button-primary bg-secondary w-fit self-center text-white"
              >
                Borrar filtros
              </button>
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
}
