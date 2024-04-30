import CreateOrderForm from '@/components/create-order-form';
import InfiniteScroll from '@/components/infinite-scroll';
import ProductCard from '@/components/product-card';
import { IProduct, Pagination } from '@/models';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Restaurant() {
  const { restaurantId } = useParams();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchData = async (page: number) => {
    axios.get(`/api/restaurant/${restaurantId}/products?limit=15&page=${page}`).then((res) => {
      const body: Pagination<IProduct> = res.data;
      if (page === 1) {
        setProducts(body.data);
      } else {
        setProducts((p) => [...p, ...body.data]);
      }
      setTotalCount(body.totalCount);
    });
  };

  const [order, setOrder] = useState<{ items: IProduct[]; total: number }>({
    items: [],
    total: 0,
  });

  const onAddProduct = (product: IProduct) => {
    setOrder((o) => ({ ...o, items: [...o.items, product], total: o.total + product.price }));
  };

  const onDeleteProduct = (indexToDelete: number) => {
    const product = order.items[indexToDelete];
    setOrder((o) => ({
      ...o,
      items: o.items.filter((_p, index) => index !== indexToDelete),
      total: o.total - product.price < 0 ? 0 : o.total - product.price,
    }));
  };

  return (
    <div className="h-full grid grid-cols-4 gap-2">
      <div className="col-span-3 space-y-2 ">
        <h1 className="text-sm text-gray-400">
          Products ({products.length}) - Total {totalCount}
        </h1>
        <InfiniteScroll fetchData={fetchData} columns={4}>
          {products.map((p) => (
            <ProductCard product={p} key={p._id} onAddProduct={onAddProduct} />
          ))}
        </InfiniteScroll>
      </div>
      <div className="col-span-1 border-l px-4">
        <CreateOrderForm
          restaurantId={restaurantId ?? ''}
          onDeleteProduct={onDeleteProduct}
          order={order}
        />
      </div>
    </div>
  );
}
