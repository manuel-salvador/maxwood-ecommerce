import type { IProduct } from '@/types';

import ProductCard from './ProductCard';
import { ArrowDownIcon } from '@/components/shared/Icons';

type Props = {
  filtersOppened: boolean;
  products: IProduct[];
};

export default function ProductList({ filtersOppened, products }: Props) {
  return (
    <div className="md:w-full">
      <section className={`w-full px-6 ${filtersOppened ? 'hidden' : 'block'}`}>
        <div className="text-light-gray flex justify-between text-sm ">
          <span className="block md:text-left ">Mostrando 1-12 de 18 productos</span>
          <div className="hidden md:flex items-center gap-2 cursor-pointer">
            <span>Ordenar por</span>
            <ArrowDownIcon size={15} color="light-gray" />
          </div>
        </div>
        <div id="productList" className="my-4 grid grid-cols-list-cards gap-8 px-4 md:px-0">
          {products &&
            products.map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
      </section>
    </div>
  );
}
