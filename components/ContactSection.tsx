'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156744947!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647951865992!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-[#181818]">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#15afb7]" />
                <div>
                  <h3 className="font-semibold text-[#181818]">Address</h3>
                  <p className="text-gray-600">
                    123 Business Street<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#15afb7]" />
                <div>
                  <h3 className="font-semibold text-[#181818]">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#15afb7]" />
                <div>
                  <h3 className="font-semibold text-[#181818]">Email</h3>
                  <p className="text-gray-600">info@yourbusiness.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#15afb7]" />
                <div>
                  <h3 className="font-semibold text-[#181818]">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}