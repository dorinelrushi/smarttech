import localFont from "next/font/local";
import "./globals.css";
import { TranslationProvider } from "./translations/provider";
import Header from "./components/Header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SmartTech",
  description: "We upgrade your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TranslationProvider>
          <Header />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
