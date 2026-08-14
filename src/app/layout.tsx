import type { Metadata } from "next";
import { Space_Grotesk, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { LoadingScreen } from "@/components/providers/LoadingScreen";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hyperplane — Vision Beyond Dimensions",
  description:
    "Hyperplane is a technology company that helps businesses grow through engineering — AI solutions, custom software, modern web applications, cloud infrastructure, and business automation.",
  metadataBase: new URL("https://hyperplane.tech"),
  openGraph: {
    title: "Hyperplane — Vision Beyond Dimensions",
    description:
      "We solve business problems with technology — not just websites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full bg-[var(--hp-bg)] antialiased">
        <SmoothScrollProvider>
          {/* First-visit preloader */}
          <LoadingScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
