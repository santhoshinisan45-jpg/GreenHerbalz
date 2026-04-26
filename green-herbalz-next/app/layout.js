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
    "Discover premium homemade herbal skincare by Green Herbalz. Handcrafted botanical soaps, lip balms, lipsticks, henna cones, and rosemary oil. 100% natural, cruelty-free, small-batch production from Thiruvarur, Tamil Nadu. Prices from ₹30.",
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
    "homemade soap India",
    "natural lipstick",
    "herbal beauty products Tamil Nadu",
    "botanical skincare India",
  ],
  authors: [{ name: "Green Herbalz", url: "https://greenherbalz.vercel.app" }],
  creator: "Green Herbalz",
  publisher: "Green Herbalz",
  category: "Beauty & Personal Care",
  openGraph: {
    title: "Green Herbalz — 100% Homemade Botanical Skincare",
    description:
      "Premium homemade herbal skincare, handcrafted in small batches. Botanical soaps, lip balms, lipsticks, and more. Pure nature, zero chemicals. Prices from ₹30.",
    url: "https://greenherbalz.vercel.app",
    siteName: "Green Herbalz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/product-henna.png",
        width: 1200,
        height: 630,
        alt: "Green Herbalz Homemade Botanical Skincare Products — Henna, Soap, Lip Balm, Lipstick, Rosemary Oil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Herbalz — 100% Homemade Botanical Skincare",
    description:
      "Handcrafted botanical skincare from Thiruvarur, Tamil Nadu. 100% natural, cruelty-free. Prices from ₹30.",
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
  other: {
    "llms.txt": "https://greenherbalz.vercel.app/llms.txt",
  },
};

export default function RootLayout({ children }) {
  const baseUrl = "https://greenherbalz.vercel.app";

  const jsonLd = [
    // 1. WebSite Schema (for sitelinks search box)
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Green Herbalz",
      url: baseUrl,
      description: "100% homemade botanical skincare products handcrafted in small batches in Tamil Nadu, India.",
      publisher: { "@id": `${baseUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // 2. Organization Schema (replaces simple LocalBusiness for richer AI understanding)
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "Organization"],
      "@id": `${baseUrl}/#organization`,
      name: "Green Herbalz",
      legalName: "Green Herbalz",
      description:
        "Green Herbalz is a homemade, small-batch botanical skincare brand based in Thiruvarur, Tamil Nadu, India. Every product is handcrafted at home using pure, natural botanical ingredients — no factories, no mass production, no synthetic chemicals.",
      url: baseUrl,
      logo: `${baseUrl}/brand-logo.png`,
      image: `${baseUrl}/product-henna.png`,
      telephone: "+919942738921",
      email: "",
      foundingLocation: {
        "@type": "Place",
        name: "Koradacheri, Thiruvarur, Tamil Nadu, India",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Koradacheri",
        addressLocality: "Thiruvarur",
        addressRegion: "Tamil Nadu",
        postalCode: "610106",
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
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Online Transfer",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "09:00",
          closes: "18:00",
          description: "By appointment only",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Green Herbalz Homemade Skincare Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Herbal Henna Cone",
              description: "Premium herbal formula henna cone made with 100% natural botanical ingredients. Provides rich, natural color with smooth application. Minimum order 8 pieces.",
              image: `${baseUrl}/product-henna.png`,
              brand: { "@type": "Brand", name: "Green Herbalz" },
              offers: {
                "@type": "Offer",
                price: "30",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@id": `${baseUrl}/#organization` },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "24",
                bestRating: "5",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Botanical Lip Balm",
              description: "Natural extract lip balm with customizable ingredients. All-day moisture with pure botanical formulation. Minimum order 8 pieces.",
              image: `${baseUrl}/product-lipbalm.png`,
              brand: { "@type": "Brand", name: "Green Herbalz" },
              offers: {
                "@type": "Offer",
                price: "30",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@id": `${baseUrl}/#organization` },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "18",
                bestRating: "5",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Herbal Lipstick",
              description: "Traditional remedy herbal infusion lipstick crafted with natural herbs for safe, chemical-free lip color. Minimum order 4 pieces.",
              image: `${baseUrl}/product-lipstick.png`,
              brand: { "@type": "Brand", name: "Green Herbalz" },
              offers: {
                "@type": "Offer",
                price: "110",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@id": `${baseUrl}/#organization` },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "15",
                bestRating: "5",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Artisan Herbal Soap",
              description: "Handcrafted botanical cleansing bar available in Red Wine, Charcoal, and Milk variants. Fully customizable ingredients, shape, and weight. Minimum order 4 pieces.",
              image: `${baseUrl}/product-soap.png`,
              brand: { "@type": "Brand", name: "Green Herbalz" },
              offers: {
                "@type": "Offer",
                price: "60",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@id": `${baseUrl}/#organization` },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "32",
                bestRating: "5",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Rosemary Oil",
              description: "Pure herbal rosemary extract oil for hair growth, scalp nourishment, and skin care. Cold-pressed and naturally formulated. Minimum order 4 pieces.",
              image: `${baseUrl}/product-rosemary.jpeg`,
              brand: { "@type": "Brand", name: "Green Herbalz" },
              offers: {
                "@type": "Offer",
                price: "160",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@id": `${baseUrl}/#organization` },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "12",
                bestRating: "5",
              },
            },
          },
        ],
      },
    },

    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are all Green Herbalz products really homemade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, 100%! Every single product is handcrafted at home in small batches. We never use factory production. Each item is made with personal care using pure, natural botanical ingredients sourced locally in Tamil Nadu.",
          },
        },
        {
          "@type": "Question",
          name: "Are Green Herbalz products safe for sensitive skin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Our products are made with natural herbs and botanicals without harsh chemicals, parabens, or synthetic fragrances. However, if you have specific allergies, please message us on Instagram @_green.herbalz_ and we'll guide you to the right product.",
          },
        },
        {
          "@type": "Question",
          name: "How do I place an order on Green Herbalz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply click the 'Contact & Buy via Instagram' button on any product on our website greenherbalz.vercel.app. Your order details will be copied to your clipboard — just paste it in our Instagram DM and hit send. We'll confirm your order and arrange delivery! You can also order via WhatsApp at +91 99427 38921.",
          },
        },
        {
          "@type": "Question",
          name: "Does Green Herbalz deliver across India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we deliver pan-India! Shipping charges may vary based on your location. For local orders in Thiruvarur, Tamil Nadu, we also offer free pickup. Contact us on Instagram for delivery details and timelines.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize Green Herbalz soaps with my own ingredients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Use our Soap Customizer on the website to choose your preferred shape, weight, and main ingredient. You can even type in your own custom ingredient. Once you're happy, hit 'Apply & Order' and it'll send your custom order to our Instagram.",
          },
        },
        {
          "@type": "Question",
          name: "What is the shelf life of Green Herbalz products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Since our products are 100% natural and preservative-free, they have a shelf life of 3-6 months depending on the product. We always make fresh batches so you receive the freshest product possible. Store in a cool, dry place for best results.",
          },
        },
        {
          "@type": "Question",
          name: "What are the prices of Green Herbalz products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Green Herbalz products range from ₹30 to ₹160. Herbal Henna Cone: ₹30 (min 8). Botanical Lip Balm: ₹30 (min 8). Herbal Lipstick: ₹110 (min 4). Artisan Herbal Soap: ₹60 (min 4). Rosemary Oil: ₹160 (min 4). All products are handmade and 100% natural.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Green Herbalz located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Green Herbalz is located in Koradacheri, Thiruvarur, Tamil Nadu 610106, India. Our botanical studio is open for private consultations Monday–Saturday 9AM–6PM, and Sundays by appointment. You can find us on Google Maps or contact us at +91 99427 38921.",
          },
        },
      ],
    },

    // 4. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shop Products",
          item: `${baseUrl}/#buy`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About Green Herbalz",
          item: `${baseUrl}/#about`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "FAQ",
          item: `${baseUrl}/#faq`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: `${baseUrl}/#contact`,
        },
      ],
    },

    // 5. Review Schemas (real customer testimonials)
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "Product",
        name: "Artisan Herbal Soap (Kuppameni variant)",
        brand: { "@type": "Brand", name: "Green Herbalz" },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Priya Lakshmi",
      },
      reviewBody: "I've been using the Kuppameni soap for 3 months now and my skin has never felt this soft. You can really feel the difference with homemade products — no chemicals, just pure nature. Absolutely love it!",
      datePublished: "2026-01-15",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "Product",
        name: "Herbal Henna Cone",
        brand: { "@type": "Brand", name: "Green Herbalz" },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Deepika Rajan",
      },
      reviewBody: "The herbal henna cone gave me the most beautiful, natural color. It's so smooth to apply and you can tell it's made with real care. My friends all want to know where I got it from!",
      datePublished: "2026-02-20",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "Product",
        name: "Botanical Lip Balm & Herbal Lipstick",
        brand: { "@type": "Brand", name: "Green Herbalz" },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Santhiya Meena",
      },
      reviewBody: "I ordered the lip balm and lipstick together. The packaging was so premium I couldn't believe it was homemade! The lip balm keeps my lips moisturized all day. Best herbal products I've ever tried.",
      datePublished: "2026-03-10",
    },
  ];

  return (
    <html lang="en" className={`${notoSerif.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/llms+txt" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body">{children}</body>
    </html>
  );
}
