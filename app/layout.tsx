import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/dom/Navbar";
import { Footer } from "@/components/dom/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nikitapunjabi.com"),
  title: {
    default: "CA Nikita Punjabi | Zoho Finance Expert and Virtual CFO",
    template: "%s | CA Nikita Punjabi"
  },
  description: "Virtual CFO, Zoho Finance implementation, accounting, migration and compliance services for growing businesses.",
  keywords: ["Virtual CFO", "Zoho Finance", "Zoho Books", "GST Compliance", "Tally to Zoho Migration"]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08111f",
  colorScheme: "dark"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
