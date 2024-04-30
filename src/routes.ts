import { Application } from 'express';
import restaurantRoutes from './restaurant/restaurant.routes';
import productRoutes from './product/product.routes';
import orderRoutes from './order/order.routes';
import express from 'express';
export default function routes(app: Application): void {
  app.use('/', express.static('app/dist'));
  app.use('/api', [restaurantRoutes, productRoutes, orderRoutes]);
}
