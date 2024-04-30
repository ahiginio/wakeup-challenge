export interface IRestaurant {
  _id: string;
  name: string;
  image: string;
  description: string;
}
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  restaurant: string | IRestaurant;
}

export interface IOrder {
  _id: string;
  restaurant: IRestaurant;
  items: IProduct[];
  total: number;
  table: number;
  waiter: string;
  paid: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateOrderPayload
  extends Omit<IOrder, '_id' | 'createdAt' | 'updatedAt' | 'items'> {
  items: IProduct[];
}

export interface Pagination<T> {
  data: T[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}
