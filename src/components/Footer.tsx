import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Food Brus</h2>
            <p className="text-sm text-muted-foreground">Discover great food experiences</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-foreground hover:text-primary">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; 2023 Food Brus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}