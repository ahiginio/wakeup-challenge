import { FilterQuery, SortOrder, Types } from 'mongoose';
import { CreateProductPayload, IProduct, Product } from './schema';

class ProductRepository {
  async exists(id: string | Types.ObjectId): Promise<boolean> {
    const product = await Product.exists({ _id: id });
    return product !== null;
  }
  async getAll(): Promise<IProduct[]> {
    return await Product.find().lean();
  }
  async getAllPaginated({
    query,
    limit,
    page,
    sort,
  }: {
    query: FilterQuery<IProduct>;
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
  }): Promise<IProduct[]> {
    return await Product.find(query)
      .populate('restaurant')
      .sort(sort)
      .limit(limit || 15)
      .skip((page! - 1) * limit!)
      .lean();
  }

  async countDocuments(query: FilterQuery<IProduct>): Promise<number> {
    return await Product.countDocuments(query);
  }

  async getById(productId: string | Types.ObjectId): Promise<IProduct> {
    const product = await Product.findById(productId).lean();
    if (!product) throw Error('PRODUCT_NOT_FOUND');
    return product;
  }
  async create(product: CreateProductPayload): Promise<IProduct> {
    const doc = await Product.create(product);
    if (!doc) throw Error('CREATE_PRODUCT_ERROR');
    return doc.toJSON();
  }
}

export default new ProductRepository();
