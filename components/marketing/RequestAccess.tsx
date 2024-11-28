'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

// Library
import { createEarlyAccess } from '@/lib/actions/early-access.actions';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
});

export default function RequestAccess() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await createEarlyAccess(values);
    } catch (err) {
      if (
        err instanceof Error &&
        err.message.includes('E11000 duplicate key error')
      ) {
        setErrorMessage('This email is already registered for early access');
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
      form.reset({ email: '' });
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex border border-white/15 focus-within:border-white/30 rounded-full p-2 mt-8 relative'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex items-center bg-transparent'>
              <FormControl className='flex items-center bg-transparent'>
                <input
                  {...field}
                  placeholder='paradiso@gruplaconfiteria.com'
                  className='bg-transparent px-4 border-none focus:border-none hover:border-none outline-none focus:outline-none text-white w-full md:min-w-[350px]'
                  onChange={(e) => {
                    field.onChange(e);
                    setErrorMessage(null);
                  }}
                />
              </FormControl>
              <div className='absolute -bottom-8'>
                {errorMessage ? (
                  <span className='text-lime-400 text-sm'>{errorMessage}</span>
                ) : (
                  <FormMessage className='text-lime-400' />
                )}
              </div>
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
