import { Manrope, Roboto } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "TripBooking AI",
  description: "Book your travel experience with TripBooking AI",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className=" flex flex-col">{children}</body>
    </html>
  );
}
