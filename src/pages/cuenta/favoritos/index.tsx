import Link from 'next/link';

import ProductCard from '@/components/pages/productos/ProductCard';
import { useProductsContext } from '@/context/ProductsContext';
import AccountLayout from '@/layouts/AccountLayout';

export default function FavoritosPage() {
  const { favoriteProducts } = useProductsContext();

  return (
    <AccountLayout title="Favoritos">
      {favoriteProducts.length > 0 ? (
        <div id="productList" className="my-4 grid grid-cols-list-cards gap-8 px-4 md:px-0">
          {favoriteProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-4">
          <div className="text-center">
            <p>¡Tu lista de favoritos está vacía por el momento!</p>
            <p>
              Explora nuestra amplia selección de productos y agrega tus favoritos para tenerlos
              siempre a mano.
            </p>
          </div>
          <Link href="/productos" className="button-primary bg-secondary text-white">
            Explorar productos
          </Link>
        </div>
      )}
    </AccountLayout>
  );
}
