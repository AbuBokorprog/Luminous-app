import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const inter = Playfair_Display({ subsets: ["latin"], style: ["normal"] });

export const metadata = {
  title: "Luminous",
  description: "This is a Cosmetics E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
