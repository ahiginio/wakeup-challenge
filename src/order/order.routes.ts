import express from 'express';
import orderController from './order.controller';

export default express
  .Router()
  .post('/order', orderController.create)
  .get('/order', orderController.getAll)
  .get('/order/:orderId', orderController.getOne)
  .patch('/order/:orderId/paid', orderController.markAsPay);
