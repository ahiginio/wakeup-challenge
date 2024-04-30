import { Model, Schema, Types, model } from 'mongoose';
import { IProduct } from '../product/schema';

export interface IOrder {
  _id: Types.ObjectId;
  restaurant: Types.ObjectId;
  items: Types.ObjectId[] | IProduct[];
  total: number;
  table: number;
  waiter: string;
  paid: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type OrderModel = Model<IOrder, object>;

const orderSchema = new Schema<IOrder, OrderModel>(
  {
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    total: { type: Number, required: true },
    table: { type: Number, required: true },
    paid: { type: Boolean, required: true, default: false },
    waiter: { type: String, required: true },
  },
  { timestamps: true }
);

export interface CreateOrderPayload extends Omit<IOrder, '_id' | 'createdAt' | 'updatedAt'> {}

export const Order: OrderModel = model<IOrder, OrderModel>('Order', orderSchema);
