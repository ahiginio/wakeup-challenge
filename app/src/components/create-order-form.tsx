import { Button } from '@/components/button';
import FormInput from '@/components/form-input';
import ProductOrderItem from '@/components/product-order-item';
import { IProduct } from '@/models';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface Props {
  restaurantId: string;
  order: { items: IProduct[]; total: number };
  onDeleteProduct: (index: number) => void;
}
export default function CreateOrderForm(props: Props) {
  const { restaurantId, order, onDeleteProduct } = props;
  const CreateOrderFormSchema = z.object({
    restaurant: z.string(),
    items: z.array(z.string()),
    total: z.number(),
    table: z.coerce.number().min(1, 'The number of the table is required'),
    waiter: z.string().min(1, 'Waiter is required'),
    paid: z.boolean(),
  });

  const CreateOrderSchema = CreateOrderFormSchema.omit({
    items: true,
    paid: true,
    restaurant: true,
    total: true,
  });

  const form = useForm<z.infer<typeof CreateOrderSchema>>({
    resolver: zodResolver(CreateOrderSchema),
  });
  const {
    formState: { isSubmitting },
    handleSubmit,
  } = form;

  const onSubmit = (values: z.infer<typeof CreateOrderSchema>) => {
    axios
      .post('/api/order', {
        ...values,
        items: order.items.map((i) => i._id),
        paid: false,
        restaurant: restaurantId,
        total: order.total,
      })
      .then(() => toast.success('Order created succesfully'));
  };

  return (
    <FormProvider {...form}>
      <Form {...form} onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <h1 className="font-medium text-gray-800">Create new order</h1>
          <FormInput name="table" label="Table number" />
          <FormInput name="waiter" label="Waiter name" />

          <div className="h-[500px] overflow-y-scroll">
            <p>Items ({order.items.length})</p>
            {order.items.map((item, index) => (
              <ProductOrderItem
                product={item}
                onDelete={() => onDeleteProduct(index)}
                lastItem={index === order.items.length - 1}
              />
            ))}
          </div>
          <p>Total: ${order.total}</p>
          <Button type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
}
