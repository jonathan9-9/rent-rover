import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import ClientOnly from "./components/ClientOnly";
import SearchModal from "./components/modals/SearchModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Book Airbnb",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <SearchModal />
          <ToasterProvider />
          <RentModal />
          <RegisterModal />
          <LoginModal />
        </ClientOnly>

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
