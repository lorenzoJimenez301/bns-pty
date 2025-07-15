import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Eventos - BNS PTY",
  description: "Página de eventos Scotiabank y Novaterra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-w-sm">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
