import { Model, Schema, Types, model } from 'mongoose';

export interface IRestaurant {
  _id: Types.ObjectId;
  name: string;
  image: string;
  description: string;
}

type RestaurantModel = Model<IRestaurant, object>;

const restaurantSchema = new Schema<IRestaurant, RestaurantModel>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export interface CreateRestaurantPayload extends Omit<IRestaurant, '_id'> {}

export const Restaurant: RestaurantModel = model<IRestaurant, RestaurantModel>(
  'Restaurant',
  restaurantSchema
);
