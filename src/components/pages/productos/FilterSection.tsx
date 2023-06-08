import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { ArrowDownIcon, FilterIcon } from '@/components/shared/Icons';
import SliderRange from '@/components/pages/productos/SliderRange';
import { IProductFilters } from '@/types';

import FilterItem from './FilterItem';

type Props = {
  filtersOppened: boolean;
  setFiltersOppened: Dispatch<SetStateAction<boolean>>;
  filters: IProductFilters;
  updateFilters: IProductFilters;
  applyFilters: {
    updateSubCategories: (e: ChangeEvent<HTMLInputElement>) => void;
    updatePrecioMinMax: (nuevoPrecioMin: number, nuevoPrecioMax: number) => void;
    updateMateriales: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  setOrderBy: Dispatch<SetStateAction<string>>;
  resetFilters: () => void;
  filterValues: { [clave: string]: boolean | number[] };
};

export default function FilterSection({
  filtersOppened,
  setFiltersOppened,
  filters,
  applyFilters,
  setOrderBy,
  resetFilters,
  updateFilters,
  filterValues,
}: Props) {
  const handleFiltersOpen = () => {
    setFiltersOppened(!filtersOppened);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
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
          <select
            id="orderBy"
            name="orderBy"
            className="cursor-pointer text-gray-900 text-sm rounded-lg py-1"
            onChange={handleChange}
          >
            <option hidden>Ordenar por</option>
            <option value="asc">Precio menor a mayor</option>
            <option value="des">Precio mayor a menor</option>
          </select>
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
          <span className="md:hidden" onClick={resetFilters}>
            Borrar filtros
          </span>
        </div>
        <div id="filters" className="p-4 w-full md:p-0">
          <span className="text-2xl font-bold mb-4 block">Filtros</span>
          <button
            className={`hidden button-primary border-2 border-gray-500 hover:border-gray-400 rounded-md ${
              !!updateFilters.categorias.length ||
              !!updateFilters.materiales.length ||
              !!updateFilters.subCategorias.length ||
              updateFilters.precioMinMax[0] !== filters.precioMinMax[0] ||
              updateFilters.precioMinMax[1] !== filters.precioMinMax[1]
                ? 'md:block'
                : ''
            }`}
            onClick={resetFilters}
          >
            Borrar filtros
          </button>
          <div className="flex flex-col gap-4">
            <FilterItem title="Categorias">
              {filters?.subCategorias.map((subCategory) => (
                <label key={subCategory} className="cursor-pointer" htmlFor={subCategory}>
                  <input
                    id={subCategory}
                    type="checkbox"
                    name={subCategory}
                    className="mr-2"
                    onChange={applyFilters.updateSubCategories}
                    checked={!!filterValues[subCategory] as boolean}
                  />
                  <span className="first-letter:capitalize inline-block">{subCategory}</span>
                </label>
              ))}
            </FilterItem>

            <FilterItem title="Precio">
              <SliderRange
                initialValues={filters.precioMinMax}
                setNewPrices={applyFilters.updatePrecioMinMax}
                values={filterValues['precioMinMax'] as number[]}
              />
            </FilterItem>

            <FilterItem title="Material">
              {filters?.materiales.map((material) => (
                <label key={material} className="cursor-pointer" htmlFor={material}>
                  <input
                    id={material}
                    type="checkbox"
                    name={material}
                    className="mr-2"
                    onChange={applyFilters.updateMateriales}
                    checked={!!filterValues[material] as boolean}
                  />
                  <span className="first-letter:capitalize inline-block">{material}</span>
                </label>
              ))}
            </FilterItem>
          </div>
        </div>
      </aside>
    </>
  );
}
