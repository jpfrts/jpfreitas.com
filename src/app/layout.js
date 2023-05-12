import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";

export const metadata = {
  title: "jp freitas",
  description: "",
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
