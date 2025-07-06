'use client';

import { Section, Container } from '@/components/craft';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Correo inválido'),
  message: z.string().min(5, 'El mensaje es obligatorio'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        form.reset();
        setIsSent(true); // ✅ ocultar formulario, mostrar éxito
      } else {
        alert('Hubo un problema al enviar el mensaje');
      }
    } catch (err) {
      console.error(err);
      alert('Error de red');
    }
    setIsSubmitting(false);
  };

  return (
    <Section>
      <Container>
        <h1 className="text-2xl font-bold mb-4">Contactanos</h1>
        {isSent ? (
          <div className="p-4 bg-green-100 text-green-700 rounded">
            Mensaje enviado correctamente.
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 max-w-md"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre y Apellido</FormLabel>
                    <FormControl>
                      <input
                        placeholder="Tu nombre"
                        {...field}
                        className="w-full border p-2 rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <input
                type="text"
                name="honeypot"
                style={{ display: 'none' }}
                tabIndex={-1}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <input
                        placeholder="correo@dominio.com"
                        {...field}
                        className="w-full border p-2 rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Escribe tu mensaje..."
                        {...field}
                        className="w-full border p-2 rounded"
                      />
                    </FormControl>
                    <FormDescription>
                      Nos pondremos en contacto lo antes posible.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="bg-audeas hover:bg-audeas/95 text-base"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          </Form>
        )}
      </Container>
    </Section>
  );
}
