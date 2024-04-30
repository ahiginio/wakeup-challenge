import InfiniteScroll from '@/components/infinite-scroll';
import OrderCard from '@/components/order-card';
import { IOrder, Pagination } from '@/models';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

export default function OrdersList() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchData = async (page: number) => {
    axios.get(`/api/order?limit=15&page=${page}`).then((res) => {
      const body: Pagination<IOrder> = res.data;
      if (page === 1) {
        setOrders(body.data);
      } else {
        setOrders((p) => [...p, ...body.data]);
      }
      setTotalCount(body.totalCount);
    });
  };

  const onMarkAsPay = (id: string) => {
    axios.patch(`/api/order/${id}/paid`).then((res) => {
      toast.success('Order marked as paid');
      const index = orders.findIndex((o) => o._id === id);
      setOrders((p) => [...p.slice(0, index), res.data, ...p.slice(index + 1)]);
    });
  };

  return (
    <div className="h-full grid grid-cols-4 gap-2">
      <div className="col-span-3 space-y-2 ">
        <h1 className="text-sm text-gray-400">
          Orders ({orders.length}) - Total {totalCount}
        </h1>
        <InfiniteScroll fetchData={fetchData} columns={4}>
          {orders.map((o) => (
            <OrderCard order={o} key={o._id} onMarkAsPay={onMarkAsPay} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
