import Head from "next/head";
import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";

export const metadata = {
  title: "jp freitas",
  description: "oie, aqui é o jp freitas :)",
  twitter: {
    card: "summary_large_image",
    creator: "@jpfreitas_",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
