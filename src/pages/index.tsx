import PageLayout from '@/layouts/PageLayout';
import Hero from '@/components/pages/home/Hero';
import Categories from '@/components/pages/home/Categories';
import Info from '@/components/pages/home/Info';
import FeaturedProducts from '@/components/pages/home/FeaturedProducts';
import NewsLetter from '@/components/pages/home/NewsLetter';

export default function Home() {
  return (
    <PageLayout title="Inicio" className="mt-16">
      <Hero />
      <section className="h-20 bg-primary text-white">completar esto</section>
      <Categories />
      <Info />
      <FeaturedProducts />
      <NewsLetter />
    </PageLayout>
  );
}
