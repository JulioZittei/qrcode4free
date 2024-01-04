"use client";
import {
  QRCODE_INNER_EYES,
  QRCODE_OUTER_EYES,
  QRCODE_STYLES,
  QRCodeEyes,
  QRCodeStyle,
} from "@/app/_components/qrcode-options";
import { FACEBOOK_URL, TWITTER_URL } from "@/constants/qrcode";
import { ReactNode, createContext, useContext, useState } from "react";

type QRCodeGenProviderProps = {
  children: ReactNode;
};

type QRCodeContextData = {
  qrcodeContent: string | undefined;
  qrStyle: QRCodeStyle;
  outerEyeTopLeft: QRCodeEyes;
  outerEyeBottomLeft: QRCodeEyes;
  outerEyeTopRight: QRCodeEyes;
  innerEyeTopLeft: QRCodeEyes;
  innerEyeTopRight: QRCodeEyes;
  innerEyeBottomLeft: QRCodeEyes;
  changeQRStyle: (style: QRCodeStyle) => void;
  changeQRInnerEyeTopRight: (key: string) => void;
  changeQRInnerEyeTopLeft: (key: string) => void;
  changeQRInnerEyeBottomLeft: (key: string) => void;
  changeQROuterEyeTopLeft: (key: string) => void;
  changeQROuterEyeBottomLeft: (key: string) => void;
  changeQROuterEyeTopRight: (key: string) => void;
  cleanQRCode: () => void;
  generateUrlQRCode: (content: string) => void;
  generateTextQRCode: (content: string) => void;
  generateEmailQRCode: (content: string) => void;
  generateFacebookQRCode: (content: string) => void;
  generateTwitterQRCode: (content: string) => void;
  generateSMSQRCode: (content: SMS) => void;
  generateWifiQRCode: (content: Wifi) => void;
  generateVCardQRCode: (content: VCard) => void;
};

type SMS = {
  cellphone: string;
  message: string;
};

type Wifi = {
  networkName: string;
  password: string;
  isHidden: boolean;
  encryption: string;
};

type VCard = {
  firstName: string;
  lastName: string;
  cellphone: string;
  fax: string;
  phone: string;
  email: string;
  companyName: string;
  companyJob: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  website: string;
};

export const QRCodeGenContext = createContext({} as QRCodeContextData);

export function QRCodeGenProvider({ children }: QRCodeGenProviderProps) {
  const [qrcodeContent, setQrcodeContent] = useState<string | undefined>(
    undefined,
  );

  const [qrStyle, setQrStyle] = useState<QRCodeStyle>(QRCODE_STYLES[0].value);
  const [outerEyeTopLeft, setOuterEyeTopLeft] = useState<QRCodeEyes>(
    QRCODE_OUTER_EYES[0].value,
  );
  const [outerEyeBottomLeft, setOuterEyeBottomLeft] = useState<QRCodeEyes>(
    QRCODE_OUTER_EYES[0].value,
  );
  const [outerEyeTopRight, setOuterEyeTopRight] = useState<QRCodeEyes>(
    QRCODE_OUTER_EYES[0].value,
  );
  const [innerEyeTopLeft, setInnerEyeTopLeft] = useState<QRCodeEyes>(
    QRCODE_INNER_EYES[0].value,
  );
  const [innerEyeTopRight, setInnerEyeTopRight] = useState<QRCodeEyes>(
    QRCODE_INNER_EYES[0].value,
  );
  const [innerEyeBottomLeft, setInnerEyeBottomLeft] = useState<QRCodeEyes>(
    QRCODE_INNER_EYES[0].value,
  );

  const changeQROuterEyeTopRight = (key: string) => {
    setOuterEyeTopRight(QRCODE_OUTER_EYES[Number(key)].value);
  };

  const changeQROuterEyeTopLeft = (key: string) => {
    setOuterEyeTopLeft(QRCODE_OUTER_EYES[Number(key)].value);
  };

  const changeQROuterEyeBottomLeft = (key: string) => {
    setOuterEyeBottomLeft(QRCODE_OUTER_EYES[Number(key)].value);
  };

  const changeQRInnerEyeTopLeft = (key: string) => {
    setInnerEyeTopLeft(QRCODE_INNER_EYES[Number(key)].value);
  };

  const changeQRInnerEyeTopRight = (key: string) => {
    setInnerEyeTopRight(QRCODE_INNER_EYES[Number(key)].value);
  };

  const changeQRInnerEyeBottomLeft = (key: string) => {
    setInnerEyeBottomLeft(QRCODE_INNER_EYES[Number(key)].value);
  };

  const changeQRStyle = (style: QRCodeStyle) => {
    setQrStyle(style);
  };

  const cleanQRCode = () => {
    setQrcodeContent(undefined);
  };

  const generateQRCode = (content: string) => {
    setQrcodeContent(content);
  };

  const generateUrlQRCode = (content: string) => {
    generateQRCode(content);
  };

  const generateTextQRCode = (content: string) => {
    generateQRCode(content);
  };

  const generateEmailQRCode = (content: string) => {
    generateQRCode(content);
  };

  const generateFacebookQRCode = (content: string) => {
    generateQRCode(`${FACEBOOK_URL}/${content}`);
  };

  const generateTwitterQRCode = (content: string) => {
    generateQRCode(`${TWITTER_URL}/${content}`);
  };

  const generateSMSQRCode = ({ cellphone, message }: SMS) => {
    generateQRCode(`SMSTO:${cellphone}:${message}`);
  };

  const generateWifiQRCode = ({
    networkName,
    password,
    isHidden,
    encryption,
  }: Wifi) => {
    generateQRCode(
      `WIFI:T:${encryption};S:${networkName};P:${password};H:${isHidden};;`,
    );
  };

  const generateVCardQRCode = ({
    firstName,
    lastName,
    cellphone,
    fax,
    phone,
    email,
    companyName,
    companyJob,
    street,
    city,
    state,
    zipcode,
    country,
    website,
  }: VCard) => {
    generateQRCode(
      `BEGIN:VCARD
      VERSION:3.0
      N:${lastName};${firstName}
      FN:${firstName} ${lastName}
      ORG:${companyName}
      TITLE:${companyJob}
      ADR:;;${street};${city};${state};${zipcode};${country}
      TEL;WORK;VOICE:${phone}
      TEL;CELL:${cellphone}
      TEL;FAX:${fax}
      EMAIL;WORK;INTERNET:${email}
      URL:${website}
      END:VCARD
      `,
    );
  };

  return (
    <QRCodeGenContext.Provider
      value={{
        qrcodeContent,
        qrStyle,
        innerEyeTopLeft,
        innerEyeTopRight,
        innerEyeBottomLeft,
        outerEyeBottomLeft,
        outerEyeTopLeft,
        outerEyeTopRight,
        changeQRInnerEyeTopLeft,
        changeQRInnerEyeTopRight,
        changeQRInnerEyeBottomLeft,
        changeQROuterEyeTopLeft,
        changeQROuterEyeBottomLeft,
        changeQROuterEyeTopRight,
        changeQRStyle,
        cleanQRCode,
        generateUrlQRCode,
        generateTextQRCode,
        generateEmailQRCode,
        generateFacebookQRCode,
        generateTwitterQRCode,
        generateSMSQRCode,
        generateWifiQRCode,
        generateVCardQRCode,
      }}
    >
      {children}
    </QRCodeGenContext.Provider>
  );
}

export const useQRCode = () => {
  return useContext(QRCodeGenContext);
};
