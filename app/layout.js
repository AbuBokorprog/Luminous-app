import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer";
import AuthProvider from "@/utils/provider/auth_provider";
import ReduxProvider from "@/utils/provider/reduxProvider";
import Header from "@/components/shared/header";

const inter = Playfair_Display({ subsets: ["latin"], style: ["normal"] });

export const metadata = {
  title: "Luminous",
  description: "This is a Cosmetics E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto relative`}>
        <ReduxProvider>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
