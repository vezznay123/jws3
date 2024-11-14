import { Wrench, Shield, Clock, Paintbrush } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: <Paintbrush className="h-12 w-12 text-[#15afb7]" />,
      title: "Paint Restoration",
      description: "Expert color matching and flawless finish for all vehicle types",
      image: "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668",
    },
    {
      icon: <Wrench className="h-12 w-12 text-[#15afb7]" />,
      title: "Dent Repair",
      description: "Precision dent removal and panel beating services",
      image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7e6",
    },
    {
      icon: <Shield className="h-12 w-12 text-[#15afb7]" />,
      title: "Collision Repair",
      description: "Comprehensive accident damage restoration",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e",
    },
    {
      icon: <Clock className="h-12 w-12 text-[#15afb7]" />,
      title: "Express Service",
      description: "Quick turnaround for minor repairs and scratches",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#181818]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}