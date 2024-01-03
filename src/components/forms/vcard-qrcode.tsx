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
import { cn } from "@/lib/utils";
import { useQRCode } from "@/context/qrcode-gen";

const formSchema = z.object({
  firstName: z.string().min(3, { message: "Informe um nome válido" }),
  lastName: z.string().min(3, { message: "Informe um sobrenome válido" }),
  cellphone: z.string(),
  fax: z.string(),
  phone: z.string(),
  email: z.string().refine(
    (email) => {
      if (email.length > 0) {
        return z.string().email().safeParse(email).success;
      }
      return true;
    },
    {
      message: "Informe um e-mail válido",
    },
  ),
  companyName: z.string(),
  companyJob: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.string(),
  country: z.string(),
  website: z.string().refine(
    (site) => {
      if (site.length > 0) {
        return z.string().url().safeParse(site).success;
      }
      return true;
    },
    {
      message: "Informe uma URL válida",
    },
  ),
});

function VCardForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      cellphone: "",
      fax: "",
      phone: "",
      email: "",
      companyName: "",
      companyJob: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      website: "",
    },
  });

  const { generateVCardQRCode } = useQRCode();

  async function onSubmit(values: z.z.infer<typeof formSchema>) {
    generateVCardQRCode(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase">VCard</CardTitle>
        <CardDescription>
          Informe os dados abaixo para gerar um cartão virtual de contato com
          suas informações.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="">
            <div className="mb-4 flex flex-col gap-4">
              <FormLabel>Nome:</FormLabel>
              <div className="flex items-center justify-center gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          placeholder="Primeiro nome"
                          maxLength={30}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="Sobrenome" max={30} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-4 ">
              <FormLabel>Contato:</FormLabel>
              <FormField
                control={form.control}
                name="cellphone"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormControl>
                      <InputMask
                        className={cn(INPUT_STYLE)}
                        mask="(99) 99999-9999"
                        placeholder="Celular"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <InputMask
                          className={cn(INPUT_STYLE)}
                          mask="(99) 9999-9999"
                          placeholder="Telefone"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fax"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="Fax" maxLength={20} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-4">
              <FormLabel>Email:</FormLabel>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormControl>
                      <Input
                        placeholder="your@email.com"
                        maxLength={60}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-4 flex flex-col gap-4 ">
              <FormLabel>Empresa:</FormLabel>
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="Nome" maxLength={60} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyJob"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="Cargo" maxLength={60} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-4 ">
              <FormLabel>Endereço:</FormLabel>
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormControl>
                      <Input placeholder="Rua" maxLength={60} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="Cidade" maxLength={20} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <InputMask
                          className={cn(INPUT_STYLE)}
                          mask="99999-999"
                          placeholder="CEP"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="Estado" maxLength={20} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="País" maxLength={30} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <FormLabel>Website:</FormLabel>
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormControl>
                      <Input
                        placeholder="https://www.yoursite.com"
                        maxLength={140}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
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

export { VCardForm };
