'use client';
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLink from "./home/components/Navlink"; // Import the NavLink component
import BlueSection from "./home/components/BlueSection";
import Footer from "./home/components/footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <BlueSection/>
        <NavLink /> {/* Render the NavLink component here */}
        <main>{children}</main>
        <Footer/>
        
      </body>
    </html>
  );
};

export default RootLayout;
