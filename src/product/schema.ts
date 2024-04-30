import { Model, Schema, Types, model } from 'mongoose';

export interface IProduct {
  _id: Types.ObjectId;
  name: string;
  description: string;
  image: string;
  price: number;
  restaurant: Types.ObjectId;
}

type ProductModel = Model<IProduct, object>;

const productSchema = new Schema<IProduct, ProductModel>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  },
  { timestamps: true }
);

export interface CreateProductPayload extends Omit<IProduct, '_id'> {}

export const Product: ProductModel = model<IProduct, ProductModel>('Product', productSchema);
