"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  AtSign,
  Bitcoin,
  BookUser,
  Facebook,
  Link,
  MessageSquareMore,
  Twitter,
  Type,
  Wifi,
} from "lucide-react";

function AppSection() {
  return (
    <section id="app" className="my-4 flex w-full sm:my-8">
      <div className="container max-w-[64rem]">
        <Tabs defaultValue="url" className="w-full" orientation="horizontal">
          <TabsList className="grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 lg:grid-cols-8 lg:grid-rows-1">
            <TabsTrigger value="url" className="uppercase">
              <Link size={16} className="mr-1" /> Url
            </TabsTrigger>
            <TabsTrigger value="vcard" className="uppercase">
              <BookUser size={16} className="mr-1" />
              Vcard
            </TabsTrigger>
            <TabsTrigger value="text" className="uppercase">
              <Type size={16} className="mr-1" />
              Text
            </TabsTrigger>
            <TabsTrigger value="email" className="uppercase">
              <AtSign size={16} className="mr-1" />
              E-mail
            </TabsTrigger>
            <TabsTrigger value="sms" className="uppercase">
              <MessageSquareMore size={16} className="mr-1" />
              SMS
            </TabsTrigger>
            <TabsTrigger value="wifi" className="uppercase">
              <Wifi size={16} className="mr-1" /> Wifi
            </TabsTrigger>
            <TabsTrigger value="bitcoin" className="uppercase">
              <Facebook size={16} className="mr-1" />
              Facebook
            </TabsTrigger>
            <TabsTrigger value="twitter" className="uppercase">
              <Twitter size={16} className="mr-1" />
              Twitter
            </TabsTrigger>
          </TabsList>
          <TabsContent value="url">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="vcard">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="text"></TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export { AppSection };
