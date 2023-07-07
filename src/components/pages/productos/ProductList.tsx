import type { IProduct } from '@/types';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import ProductCard from './ProductCard';

type Props = {
  filtersOppened: boolean;
  products: IProduct[];
  setOrderBy: Dispatch<SetStateAction<string>>;
};

export default function ProductList({ filtersOppened, products, setOrderBy }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
  };

  return (
    <div className="md:w-full">
      <section className={`w-full px-6 ${filtersOppened ? 'hidden' : 'block'}`}>
        <div className="text-light-gray flex justify-between items-center text-sm ">
          <span className="block md:text-left ">
            Mostrando 1-{products.length} de {products.length} productos
          </span>
          <select
            id="orderBy"
            name="orderBy"
            className="cursor-pointer text-gray-900 text-sm rounded-lg py-1 hidden md:block"
            onChange={handleChange}
          >
            <option defaultValue="default" hidden>
              Ordenar por
            </option>
            <option value="asc">Precio menor a mayor</option>
            <option value="des">Precio mayor a menor</option>
          </select>
        </div>
        <div id="productList" className="my-4 grid grid-cols-list-cards gap-8 px-4 md:px-0">
          {products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </div>
  );
}
