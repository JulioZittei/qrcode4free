"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Download } from "lucide-react";

function DownloadButton() {
  const downloadPNG = () => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "qrcode",
    ) as HTMLCanvasElement;
    const dataURL = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "qrcode4free.png"; // Nome do arquivo para download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const downloadJPG = () => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "qrcode",
    ) as HTMLCanvasElement;
    const dataURL = canvas.toDataURL("image/jpg", 0.95);
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "qrcode4free.jpg"; // Nome do arquivo para download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
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
          onSelect={() => console.log()}
        >
          SVG
          <Download size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { DownloadButton };
