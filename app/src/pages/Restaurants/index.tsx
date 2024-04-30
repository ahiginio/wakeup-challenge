import InfiniteScroll from '@/components/infinite-scroll';
import RestaurantCard from '@/components/restaurant-card';
import { IRestaurant, Pagination } from '@/models';
import axios from 'axios';
import { useState } from 'react';

export default function Restaurants() {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const fetchData = async (page: number) => {
    axios.get(`/api/restaurant?limit=15&page=${page}`).then((res) => {
      const body: Pagination<IRestaurant> = res.data;
      if (page === 1) {
        setRestaurants(body.data);
      } else {
        setRestaurants((r) => [...r, ...body.data]);
      }
      setTotalCount(body.totalCount);
    });
  };

  return (
    <div className="h-full grid grid-cols-2 gap-2">
      <div className="col-span-3 space-y-2 ">
        <h1 className="text-sm text-gray-400">
          Restaurants ({restaurants.length}) - Total {totalCount}
        </h1>
        <InfiniteScroll fetchData={fetchData} columns={4}>
          {restaurants.map((r) => (
            <RestaurantCard restaurant={r} key={r._id} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
