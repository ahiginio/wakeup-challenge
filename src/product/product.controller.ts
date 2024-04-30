import { Request, Response } from 'express';
import productService from './product.service';
import { errorHandler } from '../common/errorHandler';

class ProductController {
  getAll(req: Request, res: Response) {
    productService
      .getAll()
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
  getOne(req: Request, res: Response) {
    if (!req.params.productId) throw Error('MISSING_DATA');
    productService
      .getOne(req.params.productId)
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
}

export default new ProductController();
