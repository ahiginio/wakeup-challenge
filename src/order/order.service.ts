import { Pagination } from '../../types/declarations';
import orderRepository from './order.repository';
import { CreateOrderPayload, IOrder } from './schema';

class OrderService {
  async getAll({ limit, page }: { limit: number; page: number }): Promise<Pagination<IOrder>> {
    const totalCount = await orderRepository.countDocuments({});
    const restaurants = await orderRepository.getAllPaginated({
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
  async getOne(orderId: string): Promise<IOrder> {
    return await orderRepository.getById(orderId);
  }
  async create(order: CreateOrderPayload): Promise<IOrder> {
    return await orderRepository.create(order);
  }
  async markAsPay(orderId: string): Promise<IOrder> {
    return await orderRepository.updateOne(orderId, { paid: true });
  }
}

export default new OrderService();
