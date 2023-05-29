import { ChangeEvent, useEffect, useState } from 'react';

import { IProduct, IProductFilters } from '@/types';

export default function useProducts(url: string) {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [productFilters, setProductFilters] = useState<IProductFilters>({
    categorias: [],
    subCategorias: [],
    precioMinMax: [0, 0],
    materiales: [],
  });
  const [applyFilters, setApplyFilters] = useState<IProductFilters>({
    categorias: [],
    subCategorias: [],
    precioMinMax: [0, 0],
    materiales: [],
  });
  const [productsFiltered, setproductsFiltered] = useState<IProduct[] | []>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.productos);
      } catch (error) {
        console.error(error);
      }
    };

    getAllProducts();
  }, [url]);

  useEffect(() => {
    setAllFilters();
  }, [products]);

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

  useEffect(() => {
    const { categorias, subCategorias, materiales, precioMinMax } = applyFilters;
    const [minPrice, maxPrice] = precioMinMax;
    const isAnyFilter =
      !!categorias.length ||
      !!subCategorias.length ||
      !!materiales.length ||
      (!!minPrice && !!maxPrice);

    if (isAnyFilter) {
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
      setproductsFiltered(newProducts);
    } else {
      setproductsFiltered(products);
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
    },
    updatePrecioMinMax: (nuevoPrecioMin: number, nuevoPrecioMax: number) => {
      setApplyFilters((prevFilters) => ({
        ...prevFilters,
        precioMinMax: [nuevoPrecioMin, nuevoPrecioMax],
      }));
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
    },
  };

  const allProducts = productsFiltered.length > 0 ? productsFiltered : products;

  return { products: allProducts, productFilters, setApplyFilters, filters };
}
