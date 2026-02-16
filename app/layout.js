import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://rr-tours.com"),

  title: {
    default:
      "RR Tours & Stays | Best Travel Agency in Ooty | Tour Operator in Tamil Nadu",
    template: "%s | RR Tours & Stays",
  },

  description:
    "RR Tours & Stays is a trusted travel agency in Ooty offering premium tour packages, corporate travel management, group tours, honeymoon trips, and event management services across Tamil Nadu and India.",

  keywords: [
    "travel agency in ooty",
    "tour operator in tamil nadu",
    "best travel agency near me",
    "ooty tour packages",
    "tamil nadu tour packages",
    "corporate travel management",
    "group tour organizers",
    "honeymoon packages in ooty",
    "event management company in ooty",
    "south india travel agency",
    "professional travel planners",
    "holiday planners in india",
    "corporate outing planners",
    "college iv tour organizers",
    "school trip planners",
  ],

  authors: [{ name: "RR Tours & Stays" }],
  creator: "RR Tours & Stays",
  publisher: "RR Tours & Stays",

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

  openGraph: {
    title:
      "RR Tours & Stays | Premium Travel Agency in Ooty & Tamil Nadu",
    description:
      "Explore Ooty, Tamil Nadu & India with structured tour packages, corporate travel programs and premium holiday planning.",
    url: "https://rr-tours.com",
    siteName: "RR Tours & Stays",
    images: [
      {
        url: "/og-image.jpg", // add this image in public folder
        width: 1200,
        height: 630,
        alt: "RR Tours & Stays Travel Agency in Ooty",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Travel Agency in Ooty | RR Tours & Stays",
    description:
      "Premium tour packages, corporate travel & event management across Tamil Nadu and India.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://rr-tours.com",
  },

  category: "travel",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
