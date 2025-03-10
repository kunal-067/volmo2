import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Valmo Deliverys",
  description: "Valmo service of delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        {/* Google Tag Manager - Head */}
        {/* <script dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MB4CQN88');
            `,
        }} /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MB4CQN88"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}

        {children}
        <Toaster />
      </body>
    </html>
  );
}
