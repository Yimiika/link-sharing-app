import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link-sharing Application",
  description: "Link-sharing Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><div className="w-[100%] overflow-hidden">{children}</div>
      </body>

    </html>
  );
}
