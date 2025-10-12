import "./globals.css";
import { montserrat } from "@/lib/fonts";
import { ThemeToggle } from "@/components/commons/theme-toggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased ${montserrat.className}`}
      >
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
