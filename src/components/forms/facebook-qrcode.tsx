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
import { FACEBOOK_URL } from "@/constants/qrcode";
import { useQRCode } from "@/context/qrcode-gen";

const formSchema = z.object({
  profileOrID: z.string().min(1, {
    message: "Não pode estar em branco",
  }),
});

function FacebookForm() {
  const maxChars = 60;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileOrID: "",
    },
  });

  const { generateFacebookQRCode } = useQRCode();

  async function onSubmit(values: z.z.infer<typeof formSchema>) {
    generateFacebookQRCode(values.profileOrID);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase">Facebook</CardTitle>
        <CardDescription>
          Informe seu nome de perfil ou ID do Facebook para gerar um QRCode
          personalizado.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <FormField
              control={form.control}
              name="profileOrID"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-input bg-muted px-3 text-sm text-muted-foreground shadow-sm">
                        {`${FACEBOOK_URL}/`}
                      </span>
                      <Input
                        className="rounded-none rounded-r-md border-l-0"
                        placeholder="my-profile"
                        maxLength={maxChars}
                        {...field}
                      />
                    </div>
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

export { FacebookForm };
