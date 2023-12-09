import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Testimonials } from './components/Testimonial';
import { Faq } from './components/Faq';
import { useTitle } from '../../hooks/useTitle';

export const HomePage = () => {
  useTitle('');
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
