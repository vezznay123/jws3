'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageCarousel() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      alt: "Office space 1",
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      alt: "Office space 2",
    },
    {
      url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
      alt: "Office space 3",
    },
    {
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      alt: "Office space 4",
    },
  ];

  return (
    <section className="py-20 bg-[#181818]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#181818]">Our Work</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}