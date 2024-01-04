import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { QRCode } from "react-qrcode-logo";
import { useQRCode } from "@/context/qrcode-gen";
import { DownloadButton } from "./download-button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { QRCodeStyleSelection } from "./qrcode-style-selection";
import { QRCodeOuterEyeTopLeftSelection } from "./qrcode-outereye-top-left-selection";
import { QRCodeOuterEyeTopRightSelection } from "./qrcode-outereye-top-right-selection";
import { QRCodeOuterEyeBottomLeftSelection } from "./qrcode-outereye-bottom-left-selection";
import { QRCodeInnerEyeTopLeftSelection } from "./qrcode-innereye-top-left-selection";
import { QRCodeInnerEyeTopRightSelection } from "./qrcode-innereye-top-right-selection";
import { QRCodeInnerEyeBottomLeftSelection } from "./qrcode-innereye-bottom-left-selection";

function QRCodeSection() {
  const {
    qrcodeContent,
    qrStyle,
    innerEyeTopLeft,
    innerEyeTopRight,
    innerEyeBottomLeft,
    outerEyeBottomLeft,
    outerEyeTopLeft,
    outerEyeTopRight,
  } = useQRCode();
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [eyeColor, setEyeColor] = useState("#000000");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">Parabéns 🎉</CardTitle>
        <CardDescription className="text-center">
          Você acabou de criar seu QRCode grátis
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <QRCode
            id="showqrcode"
            value={qrcodeContent}
            qrStyle={qrStyle}
            bgColor={bgColor}
            fgColor={fgColor}
            eyeColor={eyeColor}
            eyeRadius={[
              {
                outer: outerEyeTopLeft,
                inner: innerEyeTopLeft,
              },
              {
                outer: outerEyeTopRight,
                inner: innerEyeTopRight,
              },
              {
                outer: outerEyeBottomLeft,
                inner: innerEyeBottomLeft,
              },
            ]}
          />
          <div className="hidden">
            <QRCode
              id="qrcode"
              value={qrcodeContent}
              size={808}
              quietZone={60}
              qrStyle={qrStyle}
              bgColor={bgColor}
              fgColor={fgColor}
              eyeColor={eyeColor}
              eyeRadius={[
                {
                  outer: outerEyeTopLeft,
                  inner: innerEyeTopLeft,
                },
                {
                  outer: outerEyeTopRight,
                  inner: innerEyeTopRight,
                },
                {
                  outer: outerEyeBottomLeft,
                  inner: innerEyeBottomLeft,
                },
              ]}
            />
          </div>
        </div>

        <h2 className="mt-4 flex w-full items-center justify-start font-bold">
          Personalização:
        </h2>

        <div className="mb-4 mt-4 flex w-full flex-col rounded-md border bg-muted p-4 shadow-sm">
          <div className="mb-4 flex w-full flex-wrap items-start justify-around gap-4">
            <div className="flex min-w-[145px] flex-grow flex-col gap-2">
              <Label htmlFor="bgColor">Cor de fundo:</Label>
              <div className="relative w-full text-transparent transition-colors duration-200 hover:text-card-foreground dark:hover:text-card-foreground/70">
                <Input
                  id="bgColor"
                  name="bgColor"
                  type="color"
                  value={bgColor}
                  className="flex h-10 w-full cursor-pointer rounded-full border border-none border-input bg-background px-0 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-2 [&::-webkit-color-swatch]:border-black/20 [&::-webkit-color-swatch]:p-0 dark:[&::-webkit-color-swatch]:border-white/20"
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </div>
            </div>

            <div className="flex min-w-[145px] flex-grow flex-col gap-2">
              <Label htmlFor="fgColor">Cor primeiro plano:</Label>
              <div className="relative w-full text-transparent transition-colors duration-200 hover:text-card-foreground dark:hover:text-card-foreground/70">
                <Input
                  id="fgColor"
                  name="fgColor"
                  type="color"
                  value={fgColor}
                  className="flex h-10 w-full cursor-pointer rounded-full border border-none border-input bg-background px-0 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-2 [&::-webkit-color-swatch]:border-black/20 [&::-webkit-color-swatch]:p-0 dark:[&::-webkit-color-swatch]:border-white/20"
                  onChange={(e) => setFgColor(e.target.value)}
                />
              </div>
            </div>

            <div className="flex min-w-[145px] flex-grow flex-col gap-2">
              <Label htmlFor="eyeColor">Cor do olho:</Label>
              <div className="relative w-full text-transparent transition-colors duration-200 hover:text-card-foreground dark:hover:text-card-foreground/70">
                <Input
                  id="eyeColor"
                  name="eyeColor"
                  type="color"
                  value={eyeColor}
                  className="flex h-10 w-full cursor-pointer rounded-full border border-none border-input bg-background px-0 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-2 [&::-webkit-color-swatch]:border-black/20 [&::-webkit-color-swatch]:p-0 dark:[&::-webkit-color-swatch]:border-white/20"
                  onChange={(e) => setEyeColor(e.target.value)}
                />
              </div>
            </div>
          </div>

          <QRCodeStyleSelection />

          <QRCodeOuterEyeTopLeftSelection />

          <QRCodeOuterEyeTopRightSelection />

          <QRCodeOuterEyeBottomLeftSelection />

          <QRCodeInnerEyeTopLeftSelection />

          <QRCodeInnerEyeTopRightSelection />

          <QRCodeInnerEyeBottomLeftSelection />
        </div>
      </CardContent>
      <CardFooter>
        <DownloadButton />
      </CardFooter>
    </Card>
  );
}

export { QRCodeSection };
