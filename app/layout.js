import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import AuthProvider from "@/utils/provider/auth_provider";
import ReduxProvider from "@/utils/provider/reduxProvider";

const inter = Playfair_Display({ subsets: ["latin"], style: ["normal"] });

export const metadata = {
  title: "Luminous",
  description: "This is a Cosmetics E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto `}>
        <ReduxProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
