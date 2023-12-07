import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Book Airbnb",
};

function FallBack() {
  return <>Place holder</>;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={font.className}>
          <Suspense fallback={<FallBack />}>
            <ToasterProvider />
            <RentModal />
            <SearchModal />
            <RegisterModal />
            <LoginModal />
            <Navbar />
          </Suspense>
          <div className="pb-20 pt-28">{children}</div>
        </body>
      </html>
    </>
  );
}
