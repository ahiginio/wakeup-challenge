import express from 'express';
import restaurantController from './restaurant.controller';

export default express
  .Router()
  .get('/restaurant', restaurantController.getAll)
  .get('/restaurant/:restaurantId', restaurantController.getOne)
  .get('/restaurant/:restaurantId/products', restaurantController.getProducts);
