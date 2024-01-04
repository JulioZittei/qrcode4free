"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Download } from "lucide-react";
import { optimizeImage } from "@/actions/optimize-image";

function DownloadButton() {
  const downloadPNG = async () => {
    const dataURL = await generateImageData("image/png", "png", 1);
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "qrcode4free.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const downloadJPG = async () => {
    const dataURL = await generateImageData("image/jpg", "jpg", 1);
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "qrcode4free.jpg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const downloadSVG = async () => {
    const dataURL = await generateImageData("image/png", "svg", 1);
    const svgDataURL = `data:image/svg+xml,${encodeURIComponent(dataURL)}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = svgDataURL;
    downloadLink.download = "qrcode4free.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const generateImageData = async (
    inputExtension: "image/png" | "image/jpg",
    outputExtension: "png" | "jpg" | "svg",
    quality?: number,
  ): Promise<string> => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "qrcode",
    ) as HTMLCanvasElement;

    const scaleFactor = 1;
    const newCanvas = document.createElement("canvas");
    newCanvas.width = canvas.width * scaleFactor;
    newCanvas.height = canvas.height * scaleFactor;

    const newContext = newCanvas.getContext("2d") as CanvasRenderingContext2D;

    newContext.imageSmoothingEnabled = true;
    newContext.imageSmoothingQuality = "high";
    newContext.drawImage(canvas, 0, 0, newCanvas.width, newCanvas.height);

    const dataURL = newCanvas.toDataURL(inputExtension, quality);
    const optimizedImage = await optimizeImage(
      dataURL,
      inputExtension.split("/")[1] as "png" | "jpg",
      50,
    );

    const optimizedUrl = `data:${inputExtension};base64,${optimizedImage}`;

    const svgString = `
  <svg width="${newCanvas.width}" height="${newCanvas.height}" xmlns="http://www.w3.org/2000/svg">
    <image href="${optimizedUrl}" width="${newCanvas.width}" height="${newCanvas.height}"/>
  </svg>
`;

    return outputExtension === "svg" ? svgString : optimizedUrl;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="font-bold">
          Download <ChevronDown size={16} className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex justify-between"
          onSelect={downloadPNG}
        >
          PNG
          <Download size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between"
          onSelect={downloadJPG}
        >
          JPG
          <Download size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between"
          onSelect={downloadSVG}
        >
          SVG
          <Download size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { DownloadButton };
