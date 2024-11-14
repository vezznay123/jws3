'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroBanner() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f",
      title: "Expert Auto Body Repair",
      subtitle: "Restoring Your Vehicle to Its Former Glory",
    },
    {
      image: "https://images.unsplash.com/photo-1604335078429-35fb66c3cba4",
      title: "Professional Paint Service",
      subtitle: "Perfect Color Match Guarantee",
    },
    {
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068",
      title: "Certified Technicians",
      subtitle: "Trust Your Vehicle with the Experts",
    },
  ];

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl">{slide.subtitle}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}