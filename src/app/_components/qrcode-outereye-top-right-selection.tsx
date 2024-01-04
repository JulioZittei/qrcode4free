import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QRCODE_OUTER_EYES, QRCodeStyle } from "./qrcode-options";
import { useQRCode } from "@/context/qrcode-gen";
import { useState } from "react";

function QRCodeOuterEyeTopRightSelection() {
  const { changeQROuterEyeTopRight } = useQRCode();
  const [index, setIndex] = useState<string>(`0`);

  const handleOuterEyeChange = (value: string) => {
    changeQROuterEyeTopRight(value);
    setIndex(value);
  };

  return (
    <div className="mb-4 flex flex-col gap-2">
      <Label className="flex">
        Formato da moldura do olho superior direito:
      </Label>
      <div className="flex w-full flex-wrap items-center justify-start gap-4">
        <RadioGroup
          value={index}
          onValueChange={handleOuterEyeChange}
          className="flex flex-wrap gap-4"
          orientation="horizontal"
        >
          {QRCODE_OUTER_EYES.map((item, key) => (
            <div className="flex items-center space-x-2" key={key}>
              <RadioGroupItem value={`${key}`} />
              <Label htmlFor="squares" className="flex items-center">
                {item.icon}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export { QRCodeOuterEyeTopRightSelection };
