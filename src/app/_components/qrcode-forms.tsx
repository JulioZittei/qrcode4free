import { EmailForm } from "@/components/forms/email-qrcode";
import { FacebookForm } from "@/components/forms/facebook-qrcode";
import { SMSForm } from "@/components/forms/sms-qrcode";
import { TextForm } from "@/components/forms/text-qrcode";
import { TwitterForm } from "@/components/forms/twitter-qrcode";
import { URLForm } from "@/components/forms/url-qrcode";
import { VCardForm } from "@/components/forms/vcard-qrcode";
import { WifiForm } from "@/components/forms/wifi-qrcode";

export const QRCODE_FORMS = [
  {
    id: "url",
    form: <URLForm />,
  },
  {
    id: "vcard",
    form: <VCardForm />,
  },
  {
    id: "text",
    form: <TextForm />,
  },
  {
    id: "email",
    form: <EmailForm />,
  },
  {
    id: "sms",
    form: <SMSForm />,
  },
  {
    id: "wifi",
    form: <WifiForm />,
  },
  {
    id: "facebook",
    form: <FacebookForm />,
  },
  {
    id: "twitter",
    form: <TwitterForm />,
  },
];
