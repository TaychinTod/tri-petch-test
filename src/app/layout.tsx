import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import type { ReactElement, ReactNode } from "react";

const roboto = Roboto({ weight: ["400"], preload: false });

export const metadata: Metadata = {
  title: "Tri Petch",
  description: "Tri petch",
};

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
