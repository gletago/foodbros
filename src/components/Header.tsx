import { Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

interface HeaderProps {
  onAdminClick: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Header({ onAdminClick, isLoggedIn, onLogout }: HeaderProps) {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Utensils className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Food Brus</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/contact">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          {isLoggedIn ? (
            <Button variant="outline" onClick={onLogout}>Logout</Button>
          ) : (
            <Button variant="outline" onClick={onAdminClick}>Admin</Button>
          )}
        </div>
      </div>
    </header>
  );
}