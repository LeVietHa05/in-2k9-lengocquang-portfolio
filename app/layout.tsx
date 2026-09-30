import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { iosevkaCharon , amazingSpiderMan, dot42} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Ngoc Quang's Portfolio",
  description: "Le Ngoc Quang's Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${iosevkaCharon.variable} ${amazingSpiderMan.variable} ${dot42.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-[1440px] mx-auto p-2 sm:p-10">
        <Navbar/>
        {children}</body>
    </html>
  );
}
