'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
});

export default function RequestAccess() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex border border-white/15 rounded-full p-2 mt-8 relative'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex items-center'>
              <FormControl className='flex items-center'>
                <input
                  {...field}
                  placeholder='paradiso@gruplaconfiteria.com'
                  className='bg-transparent px-4 border-none focus:border-none hover:border-none outline-none focus:outline-none text-white w-full md:min-w-[350px]'
                />
              </FormControl>
              <FormMessage className='absolute -bottom-8 text-lime-400' />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='rounded-full bg-lime-400 hover:bg-lime-500 text-black py-2 px-4 text-sm'
        >
          Early Access
        </Button>
      </form>
    </Form>
  );
}
