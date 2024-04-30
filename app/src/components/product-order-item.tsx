import { Button } from '@/components/button';
import { cn } from '@/lib/utils';
import { IProduct } from '@/models';

interface Props {
  product: IProduct;
  onDelete: () => void;
  lastItem: boolean;
}
export default function ProductOrderItem(props: Props) {
  const { product, onDelete, lastItem } = props;
  console.log(lastItem);

  return (
    <div
      className={cn('w-full flex flex-row py-2', {
        'border-b': !lastItem,
      })}>
      <img src={product.image} className="w-[40px] h-[40px]" />
      <div className="space-y-4 px-2">
        <div className="">
          <h1 className="font-medium">{product.name}</h1>
          <p className="text-[10px] text-gray-400">{product.description}</p>
        </div>
      </div>
      <Button onClick={onDelete} size={'sm'} className="text-[10px]">
        X
      </Button>
      <div className="px-2"></div>
    </div>
  );
}
