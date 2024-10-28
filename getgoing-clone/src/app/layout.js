import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  title: "Trip Planner, Guide, Info Destinasi | GetGoing",
  description:
    "Cari tour guide Indonesia dan susun perjalanan ke Eropa sesuai dengan keinginanmu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.8/css/swiper.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <header className="flex">
          <Navbar />
        </header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
