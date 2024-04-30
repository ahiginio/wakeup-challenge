import { Request, Response } from 'express';
import restaurantService from './restaurant.service';
import { errorHandler } from '../common/errorHandler';

class RestaurantController {
  getAll(req: Request, res: Response) {
    const { limit, page } = req.query;
    restaurantService
      .getAll({ limit: Number(limit) || 15, page: Number(page) || 1 })
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
  getOne(req: Request, res: Response) {
    if (!req.params.restaurantId) throw Error('MISSING_DATA');
    restaurantService
      .getOne(req.params.restaurantId)
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
  getProducts(req: Request, res: Response) {
    if (!req.params.restaurantId) throw Error('MISSING_DATA');
    const { limit, page, search } = req.query;
    restaurantService
      .getProducts({
        limit: Number(limit) || 15,
        page: Number(page) || 1,
        restaurantId: req.params.restaurantId,
        search: search ? (search as string) : undefined,
      })
      .then((body) => {
        res.status(200).json(body);
      })
      .catch((err) => errorHandler(err, res));
  }
}

export default new RestaurantController();
