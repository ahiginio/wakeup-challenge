import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { UseControllerProps, useFormContext } from 'react-hook-form';
import { Input, InputProps } from '@/components/input';

interface Props extends InputProps {
  description?: React.ReactNode | string;
  name: string;
  label: string;
  placeholder?: string;
  transform?: {
    input: (value: unknown) => unknown;
    output: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  };
  rules?: UseControllerProps['rules'];
}

export default function FormInput(props: Props) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input
              {...props}
              {...field}
              onChange={(e) =>
                props.transform ? field.onChange(props.transform.output(e)) : field.onChange(e)
              }
              value={props.transform ? props.transform.input(field.value) : field.value}
            />
          </FormControl>
          {props.description && (
            <FormDescription className="text-xs text-gray-400">{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
