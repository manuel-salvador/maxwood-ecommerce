import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import PageLayout from '@/layouts/PageLayout';
import { IProduct } from '@/types';
import { CartIcon, BorderedHeartIcon, StarIcon, FilledHeartIcon } from '@/components/shared/Icons';
import ProductCard from '@/components/pages/productos/ProductCard';
import ImageMagnifier from '@/components/pages/productos/ImageMagnifier';
import { useProductsContext } from '@/context/ProductsContext';
import LoadingPage from '@/components/pages/LoadingPage';

export default function ProductDetail() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
  const [mainImage, setMainImage] = useState('');
  const [infoToShow, setInfoToShow] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const { openCartModal, addToCart, favoriteProducts, handleFavorite } = useProductsContext();

  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status !== 'authenticated') return;
    const checkFavorite = favoriteProducts.find((p) => p.id === product?.id);
    setIsFavorite(Boolean(checkFavorite));
  }, [favoriteProducts]);

  const handleOnClickHeart = () => {
    if (!product) return;
    handleFavorite(product.id);
  };

  useEffect(() => {
    const productData = router.query.productData;

    const getProduct = async () => {
      const [, productId] = productData as string[];

      try {
        const response = await fetch(`/api/products/detail/${productId}`);
        const { product, relatedProducts }: { product: IProduct; relatedProducts: IProduct[] } =
          await response.json();
        setProduct(product);
        setRelatedProducts(relatedProducts);
        setMainImage(product.imagen);
      } catch (error) {
        console.error('Error filtering products by category:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (productData instanceof Array && productData.length > 1) {
      getProduct();
    }
  }, [router]);

  if (isLoading) return <LoadingPage />;

  if (!product) {
    return (
      <PageLayout
        title="Producto no encontrado"
        className="flex flex-col justify-center items-center gap-4"
      >
        <span>Producto no encontrado</span>
        <Link href="/productos" className="button-primary bg-secondary text-white">
          Volver
        </Link>
      </PageLayout>
    );
  }

  const changeMainImage = (idx: number) => {
    const newImage = product.imagenes[idx].url;
    setMainImage(newImage);
  };

  const handleQuantity = (quantity: number) => {
    if (quantity <= 0) return;
    if (quantity > product.stock) return setQuantity(product.stock);
    setQuantity(quantity);
  };
  const pageTitle = product.nombre;

  const handleAddToCart = () => {
    addToCart({ productId: product.id, quantity });
    openCartModal();
  };

  return (
    <PageLayout
      title={pageTitle}
      className="w-full px-4 md:px-10 py-10 max-w-xl md:max-w-[900px] mx-auto"
    >
      <section id="mainDetails" className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <ImageMagnifier
            src={mainImage}
            alt={`Imagen principal del producto ${product.nombre}`}
            className="w-full aspect-square relative overflow-hidden"
          />
          <div className="flex w-full gap-6 mt-6">
            {product.imagenes.map((imagen, idx) => (
              <figure
                key={imagen.alt}
                className={`relative w-full aspect-square cursor-pointer border-2 transition-colors duration-300 ${
                  mainImage === imagen.url ? 'border-gray-400' : ' border-transparent'
                }`}
                onMouseEnter={() => changeMainImage(idx)}
              >
                <Image src={imagen.url} alt={imagen.alt} fill />
              </figure>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl uppercase tracking-wide">{product.nombre}</h1>
          <div id="ratings" className="flex justify-between items-center sm:justify-normal gap-3">
            <div id="stars" className="flex gap-2">
              <StarIcon size={18} fill />
              <StarIcon size={18} fill />
              <StarIcon size={18} fill />
              <StarIcon size={18} fill />
              <StarIcon size={18} />
            </div>
            <a
              href="#moreInfo"
              onClick={() => setInfoToShow(2)}
              className="text-sky-600 font-semibold"
            >
              (3 reviews)
            </a>
          </div>
          <p className="text-2xl">$ {product.precio.toLocaleString('es-AR')}</p>
          <p>{product.descripcion}</p>
          <div className="flex gap-6 items-center">
            <div
              id="quantity"
              className="flex justify-between items-center h-full border border-light-gray rounded-sm text-lg font-semibold w-[6rem]"
            >
              <span
                className="cursor-pointer block flex-1 text-center py-1 select-none"
                onClick={() => handleQuantity(quantity - 1)}
              >
                -
              </span>
              <input
                type="number"
                className="px-1 cursor-default w-9 outline-none text-center"
                value={quantity}
                onChange={(e) => handleQuantity(Number(e.target.value))}
              />
              <span
                className="cursor-pointer block flex-1 py-1 text-center select-none"
                onClick={() => handleQuantity(quantity + 1)}
              >
                +
              </span>
            </div>
            <button
              className="button-primary bg-secondary text-white flex items-center gap-2"
              onClick={handleAddToCart}
            >
              <span>
                <CartIcon color="white" />
              </span>
              <span>Añadir al carrito</span>
            </button>
            <div
              onClick={handleOnClickHeart}
              className="w-8 h-8 rounded-full flex justify-center items-center transition-colors cursor-pointer bg-white shadow-md shadow-gray-400"
            >
              {isFavorite ? <FilledHeartIcon size={25} /> : <BorderedHeartIcon size={25} />}
            </div>
          </div>
          <div id="properties">
            <div className="flex gap-2">
              <span>Categoria:</span>
              <p className="first-letter:uppercase">{product.categoria}</p>
            </div>
            <div className="flex gap-2">
              <span>Sub categoria:</span>
              <p className="first-letter:uppercase">{product.subCategoria}</p>
            </div>
            <div className="flex gap-2">
              <span>Material:</span>
              <p className="first-letter:uppercase">{product.material}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="moreInfo" className="pt-16">
        <ul className="flex gap-8 mb-2 py-2 border-b-2 border-gray-200">
          {['Descripcion', 'Especificaciones', 'Reviews'].map((item, idx) => (
            <li
              key={item + idx}
              className={`${idx === infoToShow ? 'font-semibold' : 'font-normal'} cursor-pointer`}
              onClick={() => setInfoToShow(idx)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className={infoToShow === 0 ? 'block' : 'hidden'}>{product.descripcion}</div>
        <div className={infoToShow === 1 ? 'block' : 'hidden'}>
          <ul>
            <li>
              Dimensiones: alto {product.dimensiones.alto}cm x ancho {product.dimensiones.ancho}cm x
              profundidad {product.dimensiones.profundidad}cm
            </li>
            <li>Material: {product.material}</li>
            <li>Color: {product.color}</li>
            <li>Stock: {product.stock}</li>
          </ul>
        </div>
        <div className={infoToShow === 2 ? 'block' : 'hidden'}>
          <ul className="flex flex-col gap-2">
            {Array(4)
              .fill(null)
              .map((item, idx) => (
                <li key={item + idx + 'rated'}>
                  <span>Comodidad</span>
                  <ul className="flex gap-2">
                    <li>
                      <StarIcon fill />
                    </li>
                    <li>
                      <StarIcon fill />
                    </li>
                    <li>
                      <StarIcon fill />
                    </li>
                    <li>
                      <StarIcon fill />
                    </li>
                    <li>
                      <StarIcon />
                    </li>
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <section id="relatedProducts" className=" mt-20">
        <h3 className="text-center mb-10 text-2xl font-bold">Productos relacionados</h3>
        <ul className="flex flex-col md:flex-row gap-8 justify-center">
          {relatedProducts.map((product) => (
            <ProductCard key={product.nombre} product={product} showAddCartButton={false} />
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
