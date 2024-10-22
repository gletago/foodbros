import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StarRating } from '@/components/StarRating';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  lat: number;
  lng: number;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
}

export default function RestaurantList({ restaurants }: RestaurantListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('all');

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (cuisineFilter === 'all' || restaurant.cuisine === cuisineFilter)
  );

  return (
    <div>
      <div className="mb-4 flex space-x-4">
        <Input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by cuisine" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cuisines</SelectItem>
            <SelectItem value="Italian">Italian</SelectItem>
            <SelectItem value="Indian">Indian</SelectItem>
            <SelectItem value="Japanese">Japanese</SelectItem>
            <SelectItem value="American">American</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Card key={restaurant.id}>
            <CardHeader>
              <CardTitle>{restaurant.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Cuisine: {restaurant.cuisine}</p>
              <div className="flex items-center">
                <StarRating rating={restaurant.rating} onRatingChange={() => {}} />
                <span className="ml-2 text-sm font-medium">{restaurant.rating.toFixed(1)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}