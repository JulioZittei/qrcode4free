import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QRCODE_STYLES, QRCodeStyle } from "./qrcode-options";
import { useQRCode } from "@/context/qrcode-gen";

function QRCodeStyleSelection() {
  const { qrStyle, changeQRStyle } = useQRCode();

  const handleStyleChange = (value: QRCodeStyle) => {
    changeQRStyle(value);
  };

  return (
    <div className="mb-4 flex flex-col gap-2">
      <Label className="flex">Formato do corpo do QRCode:</Label>
      <div className="flex w-full flex-wrap items-center justify-start gap-4">
        <RadioGroup
          value={qrStyle}
          onValueChange={handleStyleChange}
          className="flex flex-grow gap-4"
          orientation="horizontal"
        >
          {QRCODE_STYLES.map((item, key) => (
            <div className="flex items-center space-x-2" key={key}>
              <RadioGroupItem value={item.value} />
              <Label className="flex items-center">{item.icon}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export { QRCodeStyleSelection };
