import Head from "next/head";
import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";

export const metadata = {
  title: "jp freitas",
  description: "oie, aqui é o jp freitas :)",
  creator: "JP Freitas",
  authors: [
    {
      name: "JP Freitas",
    },
    { url: "https://twitch.tv/jpfreitas_" },
    { url: "https://instagram.com/jpfreitas_" },
    { url: "https://twitter.com/jpfreitas_" },
    { url: "https://youtube.com/@jp.freitas" },
  ],
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
