import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./_components/theme-provider";
import { Header } from "./_components/header";
import Footer from "./_components/footer";
import { QRCodeGenProvider } from "@/context/qrcode-gen";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "QRCode4Free",
  description: "Crie QrCodes grátis!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-[100dvh] flex-col bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <QRCodeGenProvider>{children}</QRCodeGenProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
