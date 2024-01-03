import {
  AtSign,
  BookUser,
  Facebook,
  Link,
  MessageSquareMore,
  Twitter,
  Type,
  Wifi,
} from "lucide-react";

export const QRCODE_TYPES = [
  {
    text: "url",
    icon: <Link size={16} className="mr-1" />,
  },
  {
    text: "vcard",
    icon: <BookUser size={16} className="mr-1" />,
  },
  {
    text: "text",
    icon: <Type size={16} className="mr-1" />,
  },
  {
    text: "email",
    icon: <AtSign size={16} className="mr-1" />,
  },
  {
    text: "sms",
    icon: <MessageSquareMore size={16} className="mr-1" />,
  },
  {
    text: "wifi",
    icon: <Wifi size={16} className="mr-1" />,
  },
  {
    text: "facebook",
    icon: <Facebook size={16} className="mr-1" />,
  },
  {
    text: "twitter",
    icon: <Twitter size={16} className="mr-1" />,
  },
];
