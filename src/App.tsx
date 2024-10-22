import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import Header from '@/components/Header';
import RestaurantList from '@/components/RestaurantList';
import RestaurantMap from '@/components/RestaurantMap';
import Footer from '@/components/Footer';
import AdminLogin from '@/components/AdminLogin';
import AdminDashboard from '@/components/AdminDashboard';
import AuthPage from '@/components/AuthPage';
import { Toaster } from '@/components/ui/toaster';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Update latitude and longitude to focus on South Africa
const dummyRestaurants = [
  { id: 1, name: 'Tasty Bites', cuisine: 'South African', rating: 4.5, lat: -26.2041, lng: 28.0473 },
  { id: 2, name: 'Spice Garden', cuisine: 'Indian', rating: 4.2, lat: -33.9249, lng: 18.4241 },
  { id: 3, name: 'Braai Haven', cuisine: 'South African', rating: 4.8, lat: -29.8587, lng: 31.0218 },
  { id: 4, name: 'Cape Vineyard', cuisine: 'French', rating: 4.0, lat: -33.9249, lng: 18.4241 },
];

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const googleMapsApiKey = 'AIzaSyDl0LaMixhqE4_2wQtGeg7ymB8UholJ-c8';

  const handleAdminLogin = (success: boolean) => {
    setIsAdminLoggedIn(success);
    setShowAdminLogin(false);
  };

  const handleUserAuth = (success: boolean) => {
    setIsUserLoggedIn(success);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setIsAdminLoggedIn(false);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onAdminClick={() => setShowAdminLogin(true)} 
          isLoggedIn={isUserLoggedIn || isAdminLoggedIn}
          onLogout={handleLogout}
        />
        <main className="container mx-auto px-4 py-8">
          {showAdminLogin && <AdminLogin onLogin={handleAdminLogin} />}
          {isAdminLoggedIn ? (
            <AdminDashboard />
          ) : isUserLoggedIn ? (
            <Tabs defaultValue="list">
              <TabsList className="mb-4">
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="map">Map View</TabsTrigger>
              </TabsList>
              <TabsContent value="list">
                <RestaurantList restaurants={dummyRestaurants} />
              </TabsContent>
              <TabsContent value="map">
                <RestaurantMap restaurants={dummyRestaurants} apiKey={googleMapsApiKey} />
              </TabsContent>
            </Tabs>
          ) : (
            <AuthPage onAuth={handleUserAuth} />
          )}
        </main>
        <Footer />
        <ModeToggle className="fixed bottom-4 right-4" />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;