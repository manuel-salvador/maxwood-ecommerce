import { ChangeEvent, useEffect, useState } from 'react';

import { IProduct, IProductFilters } from '@/types';

const INITIAL_PRODUCT_FILTERS = {
  categorias: [],
  subCategorias: [],
  precioMinMax: [0, 0],
  materiales: [],
};

export default function useFilters(products: IProduct[]) {
  const [productFilters, setProductFilters] = useState<IProductFilters>(INITIAL_PRODUCT_FILTERS);
  const [applyFilters, setApplyFilters] = useState<IProductFilters>(INITIAL_PRODUCT_FILTERS);
  const [filterValues, setFilterValues] = useState<{
    [clave: string]: boolean | number[];
  }>({});
  const [productsFiltered, setProductsFiltered] = useState<IProduct[] | []>(products);
  const [orderBy, setOrderBy] = useState<string>('');

  useEffect(() => {
    const setAllFilters = () => {
      if (products.length > 0) {
        const categoriasUnicas = products
          .map((product) => product.categoria)
          .filter((value, index, self) => self.indexOf(value) === index);

        const subCategoriasUnicas = products
          .map((product) => product.subCategoria)
          .filter((value, index, self) => self.indexOf(value) === index);

        const materialesUnicos = products
          .map((product) => product.material)
          .filter((value, index, self) => self.indexOf(value) === index);

        const precios = products.map((product) => product.precio);
        const precioMinimo = Math.min(...precios);
        const precioMaximo = Math.max(...precios);

        setProductFilters({
          categorias: categoriasUnicas,
          subCategorias: subCategoriasUnicas,
          precioMinMax: [precioMinimo, precioMaximo],
          materiales: materialesUnicos,
        });
      }
    };
    setAllFilters();
  }, [products]);

  const checkIsAnyFilter = () => {
    const { categorias, subCategorias, materiales, precioMinMax } = applyFilters;
    const [minPrice, maxPrice] = precioMinMax;
    return (
      !!categorias.length ||
      !!subCategorias.length ||
      !!materiales.length ||
      (!!minPrice && !!maxPrice)
    );
  };

  useEffect(() => {
    const isAnyFilter = checkIsAnyFilter();

    if (isAnyFilter) {
      const { categorias, subCategorias, materiales, precioMinMax } = applyFilters;
      const [minPrice, maxPrice] = precioMinMax;
      const newProducts = products.filter((product) => {
        const hasCategoriasFilter = !!categorias.length
          ? categorias.includes(product.categoria)
          : true;

        const hasSubCategoriasFilter = !!subCategorias.length
          ? subCategorias.includes(product.subCategoria)
          : true;

        const hasMaterialesFilter = !!materiales.length
          ? materiales.includes(product.material)
          : true;

        const hasMatchingPrice =
          !!minPrice && !!maxPrice
            ? product.precio >= minPrice && product.precio <= maxPrice
            : true;

        return (
          hasCategoriasFilter && hasSubCategoriasFilter && hasMaterialesFilter && hasMatchingPrice
        );
      });
      setProductsFiltered(newProducts);
    } else {
      setProductsFiltered(products);
    }
  }, [applyFilters]);

  const filters = {
    updateSubCategories: (e: ChangeEvent<HTMLInputElement>) => {
      const subCategory = e.target.name;
      const isChecked = e.target.checked;

      setApplyFilters((prevFilters) => ({
        ...prevFilters,
        subCategorias: isChecked
          ? [...prevFilters.subCategorias, subCategory]
          : prevFilters.subCategorias.filter((cat) => cat !== subCategory),
      }));

      updateFiltersValues(subCategory, isChecked);
    },
    updatePrecioMinMax: (nuevoPrecioMin: number, nuevoPrecioMax: number) => {
      setApplyFilters((prevFilters) => ({
        ...prevFilters,
        precioMinMax: [nuevoPrecioMin, nuevoPrecioMax],
      }));

      updateFiltersValues('precioMinMax', [nuevoPrecioMin, nuevoPrecioMax]);
    },
    updateMateriales: (e: ChangeEvent<HTMLInputElement>) => {
      const material = e.target.name;
      const isChecked = e.target.checked;

      setApplyFilters((prevFilters) => ({
        ...prevFilters,
        materiales: isChecked
          ? [...prevFilters.materiales, material]
          : prevFilters.materiales.filter((cat) => cat !== material),
      }));

      updateFiltersValues(material, isChecked);
    },
  };

  const updateFiltersValues = (key: string, value: boolean | number[]) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  useEffect(() => {
    const newProducts = [...allProducts].sort((p1, p2) =>
      orderBy === 'asc' ? p1.precio - p2.precio : p2.precio - p1.precio,
    );

    setProductsFiltered(newProducts);
  }, [orderBy]);

  const resetFilters = () => {
    setApplyFilters({
      ...INITIAL_PRODUCT_FILTERS,
      precioMinMax: productFilters.precioMinMax,
    });
    setFilterValues({
      precioMinMax: productFilters.precioMinMax,
    });
  };

  const allProducts = checkIsAnyFilter() ? productsFiltered : products;

  return {
    products: allProducts,
    productFilters,
    setApplyFilters,
    filters,
    updateFilters: applyFilters,
    setOrderBy,
    resetFilters,
    filterValues,
    setFilterValues,
  };
}
