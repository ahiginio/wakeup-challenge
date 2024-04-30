import { Response } from 'express';
import logger from '../common/logger';
export const errorHandler = (err: Error, res: Response) => {
  switch (err.message) {
    case 'CREATE_ORDER_ERROR':
      return res.status(400).json({
        code: 400,
        message: 'Oops. Something happens trying to create the order. Try again',
      });
    case 'CREATE_RESTAURANT_ERROR':
      return res.status(400).json({
        code: 400,
        message: 'Oops. Something happens trying to create the restaurant. Try again',
      });
    case 'CREATE_PRODUCT_ERROR':
      return res.status(400).json({
        code: 400,
        message: 'Oops. Something happens trying to create the product. Try again',
      });
    case 'PRODUCT_NOT_FOUND':
      return res.status(400).json({ code: 400, message: 'Product not found' });
    case 'RESTAURANT_NOT_FOUND':
      return res.status(400).json({ code: 400, message: 'Restaurant not found' });
    case 'MISSING_DATA':
      return res.status(400).json({ code: 400, message: 'Missing data' });

    default:
      logger.error(err.message);
      return res.status(500).json({ code: 500, message: 'Internal server error.' });
  }
};
