'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface GoogleReviewsSettingsFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Business name must be at least 2 characters.',
  }),
  id: z.string().min(2, {
    message: 'Business ID must be at least 2 characters.',
  }),
  apiKey: z.string().min(2, {
    message: 'API Key must be at least 2 characters.',
  }),
  autoRead: z.boolean().default(false),
  autoAnswer: z.boolean().default(false),
});

export default function GoogleReviewsSettingsForm({
  data = null,
}: GoogleReviewsSettingsFormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name ?? '',
      id: data?.name ?? '',
      apiKey: data?.name ?? '',
      autoRead: data?.autoAnswer ?? false,
      autoAnswer: data?.autoAnswer ?? false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder='Bar Paradiso' {...field} />
              </FormControl>
              <FormDescription
                className={form.formState.errors.name ? 'hidden' : ''}
              >
                This is your public business name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='id'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business ID</FormLabel>
              <FormControl>
                <Input placeholder='1jdgehje8e8w' {...field} />
              </FormControl>
              <FormDescription
                className={form.formState.errors.id ? 'hidden' : ''}
              >
                This is the ID that Google Business assigned to you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='apiKey'
          render={({ field }) => (
            <FormItem>
              <FormLabel>API Key</FormLabel>
              <FormControl>
                <Input placeholder='G-293745jdjksdh' {...field} />
              </FormControl>
              <FormDescription
                className={form.formState.errors.id ? 'hidden' : ''}
              >
                This is the API Key to enable read and answer reviews.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='autoRead'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <FormLabel className='text-base'>
                  Auto Review Analisys
                </FormLabel>
                <FormDescription>
                  Automatically analyze new reviews as they are published. Each
                  analysis will consume 1 credit from your account.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='autoAnswer'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <FormLabel className='text-base'>Generate Answer</FormLabel>
                <FormDescription>
                  Automatically generate personalized responses to new reviews.
                  Each generated response will consume 1 credit from your
                  account.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit'>{data ? 'Update' : 'Create'}</Button>
      </form>
    </Form>
  );
}
