import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar"));
const Footer = dynamic(() => import("@/components/footer"));
const Provider = dynamic(() => import("@/components/ui/provider").then(mod => mod.Provider));
const CartProvider = dynamic(() => import("@/components/cart").then(mod => mod.CartProvider));


const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME} | Kedi Healthcare`,
    default: `${process.env.NEXT_PUBLIC_SITE_NAME} | Kedi Healthcare - Your Number One Store For Affordable Kedi Products`,
  },
  keywords: ["Kedi Healthcare", "Kedi Healthcare product", "Kedi", "Health", "Healthcare"],
  description: "Your number one store for affordable Kedi Healthcare products. Explore our shop, learn about our services, and discover why customers trust Kedicares for their wellness journey.",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Affordable Kedi Healthcare Products`,
    description: `Your number one store for affordable Kedi products. Explore our shop, learn about our services, and discover why customers trust ${process.env.NEXT_PUBLIC_SITE_NAME} for their wellness journey.`,
    url: process.env.NEXT_PUBLIC_HOSTNAME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/logo.webp`,
        width: 800,
        height: 600,
        alt: `${process.env.NEXT_PUBLIC_SITE_NAME} Kedicares Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Affordable Kedi Healthcare Products`,
    description: `Your number one store for affordable Kedi products. Explore our shop, learn about our services, and discover why customers trust ${process.env.NEXT_PUBLIC_SITE_NAME} for their wellness journey.`,
    images: [`${process.env.NEXT_PUBLIC_HOSTNAME}/logo.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative ${merriweather.variable} ${montserrat.variable} antialiased`}
      >
        <Provider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </Provider>
      </body>
    </html>
  );
}
