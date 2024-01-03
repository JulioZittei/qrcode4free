"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { QRCODE_TYPES } from "./qrcode-types.";
import { QRCODE_FORMS } from "./qrcode-forms";
import { useQRCode } from "@/context/qrcode-gen";
import { QRCodeSection } from "./qrcode-section";
import Confetti from "react-dom-confetti";

function AppSection() {
  const { cleanQRCode, qrcodeContent } = useQRCode();

  return (
    <section id="app" className="my-4 flex w-full sm:my-8">
      <div className="container max-w-[64rem]">
        <Tabs defaultValue="url" className="w-full" orientation="horizontal">
          <TabsList className="grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 lg:grid-cols-8 lg:grid-rows-1">
            {QRCODE_TYPES.map((item) => (
              <TabsTrigger
                value={item.text}
                className="uppercase"
                key={item.text}
                onClick={cleanQRCode}
              >
                {item.icon} {item.text}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex w-full items-center justify-center">
            <Confetti
              active={qrcodeContent ? true : false}
              config={{
                spread: 360,
                elementCount: 200,
                duration: 10000,
              }}
            />
          </div>
          {QRCODE_FORMS.map((item) => (
            <TabsContent value={item.id} key={item.id}>
              {qrcodeContent ? <QRCodeSection /> : item.form}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export { AppSection };
