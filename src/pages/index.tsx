import PageLayout from '@/layouts/PageLayout';
import Hero from '@/components/pages/home/Hero';
import Categories from '@/components/pages/home/Categories';
import Info from '@/components/pages/home/Info';
import FeaturedProducts from '@/components/pages/home/FeaturedProducts';
import NewsLetter from '@/components/pages/home/NewsLetter';

export default function Home() {
  return (
    <PageLayout title="Inicio">
      <Hero />
      <section className="h-20 bg-primary flex items-center justify-center">
        <p className="text-white font-bold md:text-xl">
          Muebles hechos 100% a mano con lujo de detalle
        </p>
      </section>
      <Categories />
      <Info />
      <FeaturedProducts />
      <NewsLetter />
    </PageLayout>
  );
}
