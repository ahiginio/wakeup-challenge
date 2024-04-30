import { IRestaurant } from '@/models';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';

export default function RestaurantCard({ restaurant }: { restaurant: IRestaurant }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/restaurant/${restaurant._id}?limit=15&page=1`);
  };

  return (
    <div className="flex flex-col justify-between space-y-4 border rounded-md pb-4">
      <img src={restaurant.image} className="w-full" />
      <div className="h-full space-y-4 px-2 items-start justify-start">
        <h1 className="font-medium">{restaurant.name}</h1>
        <p className="text-xs text-gray-400">{restaurant.description}</p>
      </div>
      <div className="px-2">
        <Button onClick={handleClick} className="w-full">
          Seleccionar
        </Button>
      </div>
    </div>
  );
}
