"use client";
import { FACEBOOK_URL, TWITTER_URL } from "@/constants/qrcode";
import { ReactNode, createContext, useContext, useState } from "react";

type QRCodeGenProviderProps = {
  children: ReactNode;
};

type QRCodeContextData = {
  qrcodeContent: string | undefined;
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
