export type QRCodeEyes = [number, number, number, number];

export const QRCODE_OUTER_EYES: {
  value: QRCodeEyes;
  icon: JSX.Element;
}[] = [
  {
    value: [0, 0, 0, 0],
    icon: (
      <div className="mr-1 h-4 w-4 border-2 border-black dark:border-white "></div>
    ),
  },
  {
    value: [50, 50, 50, 50],
    icon: (
      <div className="mr-1 h-[18px] w-[18px] rounded-full border-2 border-black dark:border-white"></div>
    ),
  },
  {
    value: [0, 50, 50, 50],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-tl-[0px] border-2 border-black dark:border-white"></div>
    ),
  },
  {
    value: [50, 50, 0, 50],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-br-[0px] border-2 border-black dark:border-white"></div>
    ),
  },
  {
    value: [0, 50, 0, 50],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-br-[0px] rounded-tl-[0px] border-2 border-black dark:border-white"></div>
    ),
  },
  {
    value: [50, 0, 50, 50],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-tr-[0px] border-2 border-black dark:border-white"></div>
    ),
  },
  {
    value: [50, 50, 50, 0],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-bl-[0px] border-2 border-black dark:border-white"></div>
    ),
  },
  {
    value: [50, 0, 50, 0],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-bl-[0px] rounded-tr-[0px] border-2 border-black dark:border-white"></div>
    ),
  },
];

export const QRCODE_INNER_EYES: {
  value: QRCodeEyes;
  icon: JSX.Element;
}[] = [
  {
    value: [0, 0, 0, 0],
    icon: <div className="mr-1 h-4 w-4 bg-black dark:bg-white"></div>,
  },
  {
    value: [50, 50, 50, 50],
    icon: (
      <div className="mr-1 h-[18px] w-[18px] rounded-full bg-black dark:bg-white"></div>
    ),
  },
  {
    value: [0, 50, 50, 50],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-tl-[0px] bg-black dark:bg-white"></div>
    ),
  },
  {
    value: [50, 50, 0, 50],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-br-[0px] bg-black dark:bg-white"></div>
    ),
  },
  {
    value: [0, 50, 0, 50],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-br-[0px] rounded-tl-[0px] bg-black dark:bg-white"></div>
    ),
  },
  {
    value: [50, 0, 50, 50],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-tr-[0px] bg-black dark:bg-white"></div>
    ),
  },
  {
    value: [50, 50, 50, 0],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-bl-[0px] bg-black dark:bg-white"></div>
    ),
  },
  {
    value: [50, 0, 50, 0],
    icon: (
      <div className="mr-1 h-4 w-4 rounded-lg rounded-bl-[0px] rounded-tr-[0px] bg-black dark:bg-white"></div>
    ),
  },
];

export type QRCodeStyle = "squares" | "dots";

export const QRCODE_STYLES: { value: QRCodeStyle; icon: JSX.Element }[] = [
  {
    value: "squares",
    icon: <div className="mr-1 h-4 w-4 bg-black dark:bg-white"></div>,
  },
  {
    value: "dots",
    icon: (
      <div className="mr-1 h-[18px] w-[18px] rounded-full bg-black dark:bg-white"></div>
    ),
  },
];
