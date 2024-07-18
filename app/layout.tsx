import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarCustom } from "./ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
      <div className="absolute top-4 left-4 z-10 bg-blue-400">
          <span className="md:hidden">SM</span>
          <span className="hidden  md:block lgm:hidden">MD</span>
          <span className="hidden lgm:block xl:hidden">LG</span>
          <span className="hidden xl:block">XL</span>
        </div>
        <Providers>
          <div className="w-full flex justify-center pt-4  ">
                <main className="  relative w-[90%] max-w-[1200px] max-md:w-[97%]  md:w-11/12 h-full">
                    <NavbarCustom/>
                    {children}
                </main>           
          </div>
        </Providers>
        </body>

    </html>
  );
}
