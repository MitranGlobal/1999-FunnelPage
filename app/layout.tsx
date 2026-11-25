import type { Metadata, Viewport } from "next";
import "@fontsource/young-serif/400.css";
import "@fontsource-variable/figtree";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiTran Global Positivity Hub — One-to-one guidance for children aged 11–17 | ₹1,999",
  description:
    "A personalised, one-to-one programme that helps children aged 11–17 build focus, manage exam stress, handle emotions and grow in confidence. 3 coaching sessions, 3 online courses and a well-being report for ₹1,999.",
  openGraph: {
    title: "MiTran Global Positivity Hub",
    description: "Help your teen build focus, manage exam pressure and navigate teenage life with confidence. ₹1,999 (was ₹4,999).",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1530",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
