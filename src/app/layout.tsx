import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-[var(--hp-bg)] antialiased">
        {children}
      </body>
    </html>
  );
}
