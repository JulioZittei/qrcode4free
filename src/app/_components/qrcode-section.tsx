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
import { Button } from "@/components/ui/button";
import { DownloadButton } from "./download-button";

function QRCodeSection() {
  const { qrcodeContent } = useQRCode();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Parabéns 🎉</CardTitle>
        <CardDescription className="text-center">
          Você acabou de criar seu QRCode grátis
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <QRCode id="qrcode" value={qrcodeContent} qrStyle="squares" />
      </CardContent>
      <CardFooter>
        <DownloadButton />
      </CardFooter>
    </Card>
  );
}

export { QRCodeSection };
