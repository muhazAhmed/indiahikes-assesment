import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IndiaHikes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Suspense fallback={<Loader />}>{children}</Suspense>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontWeight: "bold",
              },
              success: {
                style: {
                  color: "green",
                },
              },
              error: {
                style: {
                  color: "red",
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
