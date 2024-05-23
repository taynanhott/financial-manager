import type { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Portfólio Taynan Z.Hott",
  description: "Portfólio Taynan Z.Hott",
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
        </head>
        <body>
          {children}
        </body>
      </html>
    </>
  )
}
