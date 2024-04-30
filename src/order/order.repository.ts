import { FilterQuery, SortOrder, Types, UpdateQuery } from 'mongoose';
import { CreateOrderPayload, IOrder, Order } from './schema';

class OrderRepository {
  async exists(id: string | Types.ObjectId): Promise<boolean> {
    const order = await Order.exists({ _id: id });
    return order !== null;
  }
  async getAll(): Promise<IOrder[]> {
    return await Order.find().lean();
  }
  async getAllPaginated({
    query,
    limit,
    page,
    sort,
  }: {
    query: FilterQuery<IOrder>;
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
  }): Promise<IOrder[]> {
    return await Order.find(query)
      .populate(['restaurant', 'items'])
      .sort(sort)
      .limit(limit || 15)
      .skip((page! - 1) * limit!)
      .lean();
  }

  async countDocuments(query: FilterQuery<IOrder>): Promise<number> {
    return await Order.countDocuments(query);
  }
  async getById(orderId: string | Types.ObjectId): Promise<IOrder> {
    const order = await Order.findById(orderId).populate(['restaurant', 'items']).lean();
    if (!order) throw Error('ORDER_NOT_FOUND');
    return order;
  }
  async create(order: CreateOrderPayload): Promise<IOrder> {
    const doc = await Order.create(order);
    if (!doc) throw Error('CREATE_ORDER_ERROR');
    return doc.toJSON();
  }
  async updateOne(orderId: string, query: UpdateQuery<IOrder>): Promise<IOrder> {
    const doc = await Order.findByIdAndUpdate(orderId, query, { new: true })
      .populate(['restaurant', 'items'])
      .lean();
    if (!doc) throw Error('UPDATE_ORDER_ERROR');
    return doc;
  }
}

export default new OrderRepository();
