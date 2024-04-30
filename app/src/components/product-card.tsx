import { Button } from '@/components/button';
import { IProduct } from '@/models';

interface Props {
  product: IProduct;
  onAddProduct: (product: IProduct) => void;
}
export default function ProductCard(props: Props) {
  const { product, onAddProduct } = props;

  return (
    <div className="flex flex-col justify-between space-y-4 border rounded-md pb-4">
      <img src={product.image} className="w-full" />
      <div className="space-y-4 px-2">
        <div className="">
          <h1 className="font-medium">{product.name}</h1>
          <p className="text-xs text-gray-400">{product.description}</p>
        </div>
      </div>
      <div className="px-2">
        <Button onClick={() => onAddProduct(product)} className="w-full">
          Add (${product.price})
        </Button>
      </div>
    </div>
  );
}
