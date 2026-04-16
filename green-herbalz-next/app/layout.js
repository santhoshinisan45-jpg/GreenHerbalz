import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://greenherbalz.vercel.app"),
  title: "Green Herbalz — 100% Homemade Botanical Skincare | Handcrafted in Tamil Nadu",
  description:
    "Discover premium homemade herbal skincare by Green Herbalz. Handcrafted botanical soaps, lip balms, lipsticks, henna cones, and rosemary oil. 100% natural, cruelty-free, small-batch production from Thiruvarur, Tamil Nadu.",
  keywords: [
    "homemade skincare",
    "herbal products",
    "natural soap",
    "botanical skincare",
    "handcrafted lip balm",
    "herbal henna",
    "rosemary oil",
    "Tamil Nadu skincare",
    "Green Herbalz",
    "cruelty-free skincare",
    "organic beauty",
    "ayurvedic products",
  ],
  authors: [{ name: "Green Herbalz" }],
  creator: "Green Herbalz",
  publisher: "Green Herbalz",
  openGraph: {
    title: "Green Herbalz — 100% Homemade Botanical Skincare",
    description:
      "Premium homemade herbal skincare, handcrafted in small batches. Botanical soaps, lip balms, lipsticks, and more. Pure nature, zero chemicals.",
    url: "https://greenherbalz.vercel.app",
    siteName: "Green Herbalz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/product-henna.png",
        width: 1200,
        height: 630,
        alt: "Green Herbalz Homemade Botanical Skincare Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Herbalz — 100% Homemade Botanical Skincare",
    description:
      "Handcrafted botanical skincare from Thiruvarur, Tamil Nadu. 100% natural, cruelty-free.",
    images: ["/product-henna.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://greenherbalz.vercel.app",
  },
  verification: {
    google: "7a82539082820713",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Green Herbalz",
    description:
      "100% homemade botanical skincare products handcrafted in small batches. Herbal soaps, lip balms, lipsticks, henna cones, and rosemary oil.",
    url: "https://greenherbalz.vercel.app",
    image: "https://greenherbalz.vercel.app/product-henna.png",
    telephone: "+919942738921",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Koradacheri, Thiruvarur",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.7725",
      longitude: "79.6364",
    },
    sameAs: [
      "https://www.instagram.com/_green.herbalz_",
      "https://youtube.com/@greenherbalz",
    ],
    priceRange: "₹30 - ₹160",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Green Herbalz Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Herbal Henna Cone",
            description: "Premium herbal formula henna cone, minimum order 8 pieces",
            offers: { "@type": "Offer", price: "30", priceCurrency: "INR" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Botanical Lip Balm",
            description: "Natural extract lip balm with customizable ingredients",
            offers: { "@type": "Offer", price: "30", priceCurrency: "INR" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Herbal Lipstick",
            description: "Traditional remedy herbal infusion lipstick",
            offers: { "@type": "Offer", price: "110", priceCurrency: "INR" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Artisan Herbal Soap",
            description: "Handcrafted botanical cleansing bar with customizable ingredients",
            offers: { "@type": "Offer", price: "60", priceCurrency: "INR" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Rosemary Oil",
            description: "Pure herbal rosemary extract oil",
            offers: { "@type": "Offer", price: "160", priceCurrency: "INR" },
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${notoSerif.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body">{children}</body>
    </html>
  );
}
