import { Button } from '@/components/button';
import { IOrder } from '@/models';

interface Props {
  order: IOrder;
  onMarkAsPay: (id: string) => void;
}
export default function OrderCard(props: Props) {
  const { order, onMarkAsPay } = props;

  return (
    <div className="flex flex-col justify-between space-y-2 border rounded-md pb-4">
      <div className="h-full flex flex-col justify-start items-between space-y-4 px-2 py-4">
        <h1 className="font-medium">Restaurant: {order.restaurant.name}</h1>
        <h2 className="font-medium text-sm">Products:</h2>
        <div className="items">
          {order.items.map((i) => (
            <div className="space-x-2">
              <span className="text-gray-400 text-xs">{i.name}</span>
              <span className="text-gray-400 text-xs font-medium">${i.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="px-2 text-md font-semibold">Total: ${order.total.toFixed(2)}</p>
          <div className="px-2 flex flex-row items-center gap-4">
            <span className="font-medium text-xs text-gray-600">Table: {order.table}</span>
            <span className="font-medium text-xs text-gray-600">Waiter: {order.waiter}</span>
          </div>
        </div>
        <div className="px-2">
          <Button onClick={() => onMarkAsPay(order._id)} className="w-full" disabled={order.paid}>
            Mark as pay
          </Button>
        </div>
      </div>
    </div>
  );
}
