import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northstar Studio — Branding, Websites & Creative Campaigns",
  description: "Northstar Studio builds distinctive brand identities, responsive websites and campaign visuals for hospitality, food & beverage, lifestyle and retail businesses.",
  applicationName: "Northstar Studio",
  openGraph: {
    title: "Northstar Studio — Make your business impossible to miss",
    description: "Brand identity, website design and campaign visuals for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
