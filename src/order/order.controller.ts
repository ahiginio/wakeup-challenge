import { Request, Response } from 'express';
import { errorHandler } from '../common/errorHandler';
import orderService from './order.service';

class OrderController {
  create(req: Request, res: Response) {
    const { restaurant, items, total, table, waiter, paid } = req.body;
    if (!restaurant || !items || !total || !table || !waiter || paid === undefined)
      throw Error('MISSING_DATA');
    orderService
      .create({ restaurant, items, total, table, waiter, paid })
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
  getAll(req: Request, res: Response) {
    const { limit, page } = req.query;
    orderService
      .getAll({ limit: Number(limit) || 15, page: Number(page) || 1 })
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
  getOne(req: Request, res: Response) {
    if (!req.params.orderId) throw Error('MISSING_DATA');
    orderService
      .getOne(req.params.orderId)
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
  markAsPay(req: Request, res: Response) {
    if (!req.params.orderId) throw Error('MISSING_DATA');
    orderService
      .markAsPay(req.params.orderId)
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
}

export default new OrderController();
