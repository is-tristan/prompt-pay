// Next
import Script from "next/script";

// Fonts & Styles
import { DM_Sans, Sora } from "next/font/google";
import "@/styles/main.scss";

import Footer from "@/components/ui/layout/footer";
// Components
import Header from "@/components/ui/layout/header";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Prompt Pay Capital ─ Revolutionary products to help your business, flow.",
  description:
    "We give business tools to turn every transaction into an opportunity, and every payment into progress.",
  keywords: "Prompt Pay, Capital, Business, Finance",
  authors: [{ name: "Prompt Pay Capital", url: "https://promptpaycapital.com" }],
  openGraph: {
    title:
      "Prompt Pay Capital ─ Revolutionary products to help your business, flow.",
    description:
      "We give business tools to turn every transaction into an opportunity, and every payment into progress.",
    url: "https://promptpaycapital.com",
    siteName: "Prompt Pay Capital",
    images: [
      {
        url: "https://promptpaycapital.com/images/misc/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prompt Pay Capital Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={`${dmSans.variable} ${sora.variable}`}>

        <a href="#content" className="skipToContent" tabIndex="-1">

          Skip to main content

        </a>

        <Header />

        <main id="content" className="content" aria-label="Main Content">

          {children}

        </main>

        <Footer />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1270378992833236');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>

          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1270378992833236&ev=PageView&noscript=1"
            alt=""
          />

        </noscript>

      </body>

    </html>

  );

}
