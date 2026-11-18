import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Northstar Studio — Independent Creative Practice", description: "An independent creative studio building identities and digital worlds for people moving culture forward.", applicationName: "northstar-studio" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
