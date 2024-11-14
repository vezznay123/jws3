import HeroBanner from '@/components/HeroBanner';
import IsoBanner from '@/components/IsoBanner';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ImageCarousel from '@/components/ImageCarousel';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBanner />
      <Services />
      <IsoBanner />
      <Testimonials />
      <ImageCarousel />
      <ContactSection />
    </main>
  );
}