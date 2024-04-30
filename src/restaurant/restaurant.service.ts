import { Pagination } from '../../types/declarations';
import productRepository from '../product/product.repository';
import { IProduct } from '../product/schema';
import restaurantRepository from './restaurant.repository';
import { CreateRestaurantPayload, IRestaurant } from './schema';

class RestaurantService {
  async getAll({ limit, page }: { limit: number; page: number }): Promise<Pagination<IRestaurant>> {
    const totalCount = await restaurantRepository.countDocuments({});
    const restaurants = await restaurantRepository.getAllPaginated({
      query: {},
      limit,
      page,
    });
    return {
      data: restaurants,
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
    };
  }
  async getOne(restaurantId: string): Promise<IRestaurant> {
    return await restaurantRepository.getById(restaurantId);
  }
  async create(restaurant: CreateRestaurantPayload): Promise<IRestaurant> {
    return await restaurantRepository.create(restaurant);
  }
  async getProducts({
    limit,
    page,
    restaurantId,
    search,
  }: {
    limit: number;
    page: number;
    restaurantId: string;
    search?: string;
  }): Promise<Pagination<IProduct>> {
    // Check if restaurant exists
    if (!(await restaurantRepository.exists(restaurantId))) throw Error('RESTAURANT_NOT_FOUND');

    // Create search query to find products by name based on a search input value
    const query = search
      ? { name: { $regex: search, $options: 'i' }, restaurant: restaurantId }
      : { restaurant: restaurantId };

    // Count docs & search for products
    const totalCount = await productRepository.countDocuments(query);
    const products = await productRepository.getAllPaginated({
      query,
      limit,
      page,
    });

    return {
      data: products,
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
    };
  }
}

export default new RestaurantService();
