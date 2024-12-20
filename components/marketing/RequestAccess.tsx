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
import { Input } from '@/components/ui/input';

// Library
import { createEarlyAccess } from '@/lib/actions/early-access.actions';

const formSchema = z.object({
  email: z.string().email({
    message: 'Por favor ingresa una dirección de correo electrónico válida',
  }),
});

export default function RequestAccess() {
  const [accessRequested, setAccessRequested] = useState(false);
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
      setAccessRequested(true);
    } catch (err) {
      if (
        err instanceof Error &&
        err.message.includes('E11000 duplicate key error')
      ) {
        setErrorMessage(
          'Este correo electrónico ya está registrado para acceso anticipado'
        );
      } else {
        setErrorMessage(
          'Algo salió mal. Por favor intente nuevamente más tarde.'
        );
      }
      form.reset({ email: '' });
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  if (accessRequested)
    return (
      <span className='p-4 mt-8 max-w-2xl w-full text-center text-lime-500'>
        Gracias por mostrar interés, te avisaremos cuando la plataforma esté
        activa y te recompensaremos por ser de los primeros
      </span>
    );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col md:flex-row gap-4 border ring-offset-background bg-white focus-within:border-black/30 p-4 mt-8 relative rounded-md max-w-2xl w-full'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex items-center bg-transparent flex-1'>
              <FormControl className='flex items-center bg-transparent'>
                <Input
                  {...field}
                  placeholder='paradiso@gruplaconfiteria.com'
                  className='w-full'
                  disabled={form.formState.isSubmitting}
                  onChange={(e) => {
                    field.onChange(e);
                    setErrorMessage(null);
                  }}
                />
              </FormControl>
              <div className='absolute -bottom-8'>
                {errorMessage ? (
                  <span className='text-red-500 text-sm'>{errorMessage}</span>
                ) : (
                  <FormMessage className='text-red-500 text-sm' />
                )}
              </div>
            </FormItem>
          )}
        />
        <Button
          type='submit'
          variant='lime'
          disabled={form.formState.isSubmitting}
        >
          Acceso Anticipado
        </Button>
      </form>
    </Form>
  );
}
