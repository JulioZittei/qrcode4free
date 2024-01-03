"use client";

import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { QrCode } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQRCode } from "@/context/qrcode-gen";

const formSchema = z.object({
  email: z.string().email({
    message: "Informe um e-mail válido",
  }),
});

function EmailForm() {
  const maxChars = 60;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { generateEmailQRCode } = useQRCode();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    generateEmailQRCode(values.email);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase">Email</CardTitle>
        <CardDescription>
          Informe o seu e-mail gerar um QRCode personalizado.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      maxLength={maxChars}
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-between">
                    <FormMessage />
                    <FormDescription
                      className={cn(
                        "flex-grow text-right",
                        field.value.length === maxChars
                          ? "text-destructive"
                          : "",
                      )}
                    >
                      {field.value.length}/{maxChars}
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button>
              <QrCode size={16} className="mr-1" />
              Gerar QRCode
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

export { EmailForm };
