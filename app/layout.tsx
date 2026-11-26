import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

const META_PIXEL_ID = "1187921803561142";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        {children}

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
  {`
    if (!window.__metaPixelLoaded) {
      window.__metaPixelLoaded = true;
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq.disablePushState = true;
      fbq('init', '${META_PIXEL_ID}');
      fbq('track', 'PageView');
    }
  `}
</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </body>
    </html>
  );
}
