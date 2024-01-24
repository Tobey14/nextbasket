import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cart from "@/components/cart";
import WishList from "@/components/wishList";
import {Providers} from "./storeProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Basket's Test",
  description: "Developed By Tobechukwu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FFFFFF]" >
        <Providers>
          <section className={montserrat.className}>
            <Header />
              {children}
              <Cart />
              <WishList />
            <Footer />
          </section> 
          <ToastContainer 
            theme="colored"
            position="bottom-right"
            autoClose={3000}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            className="toast"
          />
        </Providers>     
      </body>
    </html>
  );
}
