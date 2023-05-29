import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { ArrowDownIcon, FilterIcon } from '@/components/shared/Icons';
import SliderRange from '@/components/pages/productos/SliderRange';
import { IProductFilters } from '@/types';

import FilterItem from './FilterItem';

type Props = {
  filtersOppened: boolean;
  setFiltersOppened: Dispatch<SetStateAction<boolean>>;
  filters: IProductFilters;
  applyFilters: {
    updateSubCategories: (e: ChangeEvent<HTMLInputElement>) => void;
    updatePrecioMinMax: (nuevoPrecioMin: number, nuevoPrecioMax: number) => void;
    updateMateriales: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

export default function FilterSection({
  filtersOppened,
  setFiltersOppened,
  filters,
  applyFilters,
}: Props) {
  const handleFiltersOpen = () => {
    setFiltersOppened(!filtersOppened);
  };

  return (
    <>
      <div
        id="buttonsFiltersMobile"
        className="md:hidden w-full my-4 px-6 flex justify-between text-light-gray"
      >
        <div onClick={handleFiltersOpen} className="flex items-center gap-2">
          <span>Filtrar</span>
          <span>
            <FilterIcon color="light-gray" />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>Ordenar por</span>
          <span>
            <ArrowDownIcon color="light-gray" />
          </span>
        </div>
      </div>
      <aside
        className={`
            bg-white
            w-full
            py-4
            px-6
            transition-all
            duration-300
            absolute
            top-0
            h-screen
            md:h-fit
            z-10
            md:static
            md:flex
            md:w-1/3
          ${filtersOppened ? 'left-0' : '-left-full'}`}
      >
        <div className="flex justify-between text-light-gray">
          <span className="md:hidden" onClick={handleFiltersOpen}>
            Cerrar
          </span>
          <span className="md:hidden">Borrar filtros</span>
        </div>
        <div id="filters" className="p-4 w-full md:p-0">
          <span className="text-2xl font-bold mb-4 block">Filtros</span>
          <div className="flex flex-col gap-4">
            <FilterItem title="Categorias">
              {filters?.subCategorias.map((category) => (
                <label key={category} className="cursor-pointer" htmlFor={category}>
                  <input
                    id={category}
                    type="checkbox"
                    name={category}
                    className="mr-2"
                    onChange={applyFilters.updateSubCategories}
                  />
                  <span className="first-letter:capitalize inline-block">{category}</span>
                </label>
              ))}
            </FilterItem>

            <FilterItem title="Precio">
              <SliderRange
                initialValues={filters.precioMinMax}
                setNewPrices={applyFilters.updatePrecioMinMax}
              />
            </FilterItem>

            <FilterItem title="Material">
              {filters?.materiales.map((filter) => (
                <label key={filter} className="cursor-pointer" htmlFor={filter}>
                  <input
                    id={filter}
                    type="checkbox"
                    name={filter}
                    className="mr-2"
                    onChange={applyFilters.updateMateriales}
                  />
                  <span className="first-letter:capitalize inline-block">{filter}</span>
                </label>
              ))}
            </FilterItem>
          </div>
        </div>
      </aside>
    </>
  );
}
