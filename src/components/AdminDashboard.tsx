import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StarRating } from '@/components/StarRating';

export default function AdminDashboard() {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log({ name, cuisine, rating, review, lat, lng });
    alert('Review added successfully!');
    // Reset form
    setName('');
    setCuisine('');
    setRating(0);
    setReview('');
    setLat('');
    setLng('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Review</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Restaurant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <StarRating rating={rating} onRatingChange={setRating} />
          </div>
          <Textarea
            placeholder="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <Input
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
          <Input
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
          <Button type="submit">Add Review</Button>
        </form>
      </CardContent>
    </Card>
  );
}