import { SortOrder, FilterQuery, Types } from 'mongoose';
import { CreateRestaurantPayload, IRestaurant, Restaurant } from './schema';

class RestaurantRepository {
  async exists(id: string | Types.ObjectId): Promise<boolean> {
    const restaurant = await Restaurant.exists({ _id: id });
    return restaurant !== null;
  }
  async getAll(): Promise<IRestaurant[]> {
    return await Restaurant.find().lean();
  }
  async getAllPaginated({
    query,
    limit,
    page,
    sort,
  }: {
    query: FilterQuery<IRestaurant>;
    limit: number;
    page: number;
    sort?:
      | string
      | {
          [key: string]:
            | SortOrder
            | {
                $meta: 'textScore';
              };
        }
      | [string, SortOrder][]
      | null;
  }): Promise<IRestaurant[]> {
    return await Restaurant.find(query)
      .sort(sort)
      .limit(limit || 15)
      .skip((page! - 1) * limit!)
      .lean();
  }

  async countDocuments(query: FilterQuery<IRestaurant>): Promise<number> {
    return await Restaurant.countDocuments(query);
  }
  async getById(restaurantId: string | Types.ObjectId): Promise<IRestaurant> {
    const restaurant = await Restaurant.findById(restaurantId).lean();
    if (!restaurant) throw Error('RESTAURANT_NOT_FOUND');
    return restaurant;
  }
  async create(restaurant: CreateRestaurantPayload): Promise<IRestaurant> {
    const doc = await Restaurant.create(restaurant);
    if (!doc) throw Error('CREATE_RESTAURANT_ERROR');
    return doc.toJSON();
  }
}

export default new RestaurantRepository();
