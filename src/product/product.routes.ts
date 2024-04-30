import express from 'express';
import productController from './product.controller';

export default express
  .Router()
  .get('/product', productController.getAll)
  .get('/product/:productId', productController.getOne);
