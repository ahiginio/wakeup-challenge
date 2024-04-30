import productRepository from './product.repository';
import { CreateProductPayload, IProduct } from './schema';

class ProductService {
  async getAll(): Promise<IProduct[]> {
    return await productRepository.getAll();
  }
  async getOne(productId: string): Promise<IProduct> {
    return await productRepository.getById(productId);
  }
  async create(product: CreateProductPayload): Promise<IProduct> {
    return await productRepository.create(product);
  }
}

export default new ProductService();
