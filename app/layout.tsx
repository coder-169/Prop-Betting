import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/public/scss/style.scss";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prop Betting - Sports Betting React Next",
  description: "A Betting App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthProvider>
            {children}
            {/* <FooterCard />
          <MainFooter /> */}
            <Toaster position="bottom-left" reverseOrder={true} />
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
