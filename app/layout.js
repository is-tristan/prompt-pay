// Fonts & Styles
import { Sora, DM_Sans } from "next/font/google";
import "@/styles/main.scss";

// Components
import Header from "@/components/ui/layout/header";
import Footer from "@/components/ui/layout/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prompt Pay Capital ─ Revolutionary products to help your business, flow.",
  description: "We give business tools to turn every transaction into an opportunity, and every payment into progress.",
  keywords: "Prompt Pay, Capital, Business, Finance",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={`${dmSans.variable} ${sora.variable}`}>

        <a href="#content" className="skipToContent" tabIndex="-1">Skip to main content</a>

        <Header />

        <main id="content" className="content" aria-label="Main Content">{children}</main>

        <Footer />

      </body>

    </html>

  );

}
