
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { ConsentProvider } from "@/components/ConsentProvider";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RAFA Business Solution",
  description: "Build. Automate. Scale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-white text-zinc-900 dark:bg-[#0b1220] dark:text-zinc-100">
        <ConsentProvider>
          <AnalyticsWhenConsented gaId={GA_ID} />
          <Nav />
          {children}
          <CookieConsent />
        </ConsentProvider>
      </body>
    </html>
  );
}

function AnalyticsWhenConsented({ gaId }: { gaId?: string }) {
  if (!gaId) return null;
  return (
    <Script id="rafa-analytics-consent" strategy="afterInteractive">
      {`
(function(){
  try {
    var saved = localStorage.getItem('rafa-consent-v1');
    if (!saved) return;
    var c = JSON.parse(saved);
    if (!c.analytics) return;
    var s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(s1);
    s1.onload = function(){
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', gaId);
    };
  } catch(e){}
})();
      `}
    </Script>
  );
}
