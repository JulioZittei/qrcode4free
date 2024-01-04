"use server";
import sharp from "sharp";

export const optimizeImage = async (
  dataUrl: string,
  format: "png" | "jpg",
  quality: number,
): Promise<string> => {
  const buffer = Buffer.from(dataUrl.split(",")[1], "base64");
  const optimizedImage = await sharp(buffer)
    .resize(928, 928)
    .toFormat(format, { quality: quality })
    .toBuffer();

  return optimizedImage.toString("base64");
};
