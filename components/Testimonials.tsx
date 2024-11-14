'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      text: "Incredible service! My car looked brand new after they fixed the dent and repainted the door. Couldn't even tell it was damaged!",
      beforeImage: "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc",
      afterImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      text: "Professional team who kept me updated throughout the repair process. The paint match is perfect!",
      beforeImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
      afterImage: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
      rating: 5,
    },
    {
      name: "Mike Wilson",
      text: "Fast, efficient, and high-quality work. They restored my classic car's bodywork to showroom condition.",
      beforeImage: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa",
      afterImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#181818]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#181818]">Customer Testimonials</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-white p-6">
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="relative">
                          <img
                            src={testimonial.beforeImage}
                            alt="Before repair"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <span className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                            Before
                          </span>
                        </div>
                        <div className="relative">
                          <img
                            src={testimonial.afterImage}
                            alt="After repair"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <span className="absolute top-2 left-2 bg-[#15afb7] text-white px-2 py-1 text-sm rounded">
                            After
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center space-y-4">
                        <Quote className="h-8 w-8 text-[#15afb7]" />
                        <p className="text-lg italic">{testimonial.text}</p>
                        <div>
                          <p className="font-semibold text-[#181818]">{testimonial.name}</p>
                          <div className="flex text-[#15afb7]">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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