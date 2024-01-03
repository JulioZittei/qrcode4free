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
import { INPUT_STYLE, Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import InputMask from "react-input-mask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { QrCode } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { useQRCode } from "@/context/qrcode-gen";

const formSchema = z.object({
  cellphone: z.string(),
  message: z.string(),
});

function SMSForm() {
  const maxChars = 140;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cellphone: "",
      message: "",
    },
  });

  const { generateSMSQRCode } = useQRCode();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    generateSMSQRCode(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase">SMS</CardTitle>
        <CardDescription>
          Informe o seu celular gerar um QRCode personalizado.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <div className="mb-4 flex flex-col gap-4">
              <FormLabel>Celular:</FormLabel>
              <FormField
                control={form.control}
                name="cellphone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputMask
                        className={INPUT_STYLE}
                        mask="(99) 99999-9999"
                        placeholder="Seu número"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-4 flex flex-col gap-4">
              <FormLabel>Mensagem:</FormLabel>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Insira seu texto aqui..."
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
            </div>
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

export { SMSForm };
