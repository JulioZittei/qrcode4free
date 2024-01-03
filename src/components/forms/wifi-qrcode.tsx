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
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff, HelpCircle, QrCode } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useQRCode } from "@/context/qrcode-gen";

const formSchema = z.object({
  networkName: z.string().min(1, {
    message: "Não pode estar em branco",
  }),
  isHidden: z.boolean(),
  password: z.string(),
  encryption: z.string(),
});

function WifiForm() {
  const maxChars = 60;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      networkName: "",
      isHidden: false,
      password: "",
      encryption: "nopass",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const { generateWifiQRCode } = useQRCode();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    generateWifiQRCode(values);
  }

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase">Wifi</CardTitle>
        <CardDescription>
          Informe os dados da sua rede para gerar um QRCode personalizado.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <div className="mb-4 flex flex-col gap-4 md:flex-row">
              <div className="flex flex-grow flex-col gap-4">
                <FormLabel>Nome da rede:</FormLabel>
                <FormField
                  control={form.control}
                  name="networkName"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="SSID" maxLength={30} {...field} />
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

              <div className="flex flex-grow flex-col gap-4">
                <FormLabel>Senha:</FormLabel>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            maxLength={maxChars}
                            {...field}
                          />
                          <button
                            tabIndex={-1}
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground"
                            onClick={handleToggleShowPassword}
                          >
                            {showPassword ? <Eye /> : <EyeOff />}
                          </button>
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
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-grow flex-col gap-4">
                <FormLabel>Opções de rede:</FormLabel>
                <FormField
                  control={form.control}
                  name="isHidden"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="flex gap-1">
                        Oculta
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle size={16} />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>É uma rede Wifi oculta?</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-grow flex-col gap-4">
                <FormLabel>Protocola de segurança:</FormLabel>
                <FormField
                  control={form.control}
                  name="encryption"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-start space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="nopass" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Nenhum
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="WPA" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              WPA/WPA2
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="WEP" />
                            </FormControl>
                            <FormLabel className="font-normal">WEP</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
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

export { WifiForm };
