'use client';

import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#181818]/90 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#15afb7]">YourLogo</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <a href="tel:+1234567890" className="hidden md:flex items-center space-x-2 hover:text-[#15afb7] transition-colors">
            <Phone className="h-4 w-4" />
            <span>(123) 456-7890</span>
          </a>
          <Button 
            variant="outline" 
            className="bg-[#15afb7] text-white hover:bg-[#15afb7]/80 border-none"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}