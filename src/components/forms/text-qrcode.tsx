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
import { Textarea } from "../ui/textarea";
import { useQRCode } from "@/context/qrcode-gen";

const formSchema = z.object({
  text: z.string().min(1, {
    message: "Não pode estar em branco",
  }),
});

function TextForm() {
  const maxChars = 140;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const { generateTextQRCode } = useQRCode();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    generateTextQRCode(values.text);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase">Text</CardTitle>
        <CardDescription>
          Informe o texto que deseja para gerar um QRCode personalizado.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Insira seu texto"
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

export { TextForm };
