import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { GlobalGlow } from "@/components/effects/GlobalGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Outfitique - Your AI Personal Wardrobe Assistant",
  description:
    "Outfitique is your ultimate AI-powered wardrobe assistant, helping you curate outfits, manage your closet, and receive personalized fashion suggestions.",
  keywords:
    "AI wardrobe assistant, outfit suggestions, personal stylist, fashion management, closet organization",
  author: "Outfitique Team",
  openGraph: {
    title: "Outfitique - Your AI Personal Wardrobe Assistant",
    description:
      "Discover the future of fashion with Outfitique, your AI-powered wardrobe assistant.",
    url: "https://outfitique.com",
    site_name: "Outfitique",
    images: [
      {
        url: "https://outfitique.com/logo.png",
        width: 800,
        height: 600,
        alt: "Outfitique Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Outfitique",
    title: "Outfitique - Your AI Personal Wardrobe Assistant",
    description:
      "Your AI-powered wardrobe assistant for personalized outfit suggestions.",
    image: "https://outfitique.com/logo.png",
  },
  metadataBase: new URL("https://outfitique.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="canonical" href="https://outfitique.com" />
        <meta name="robots" content="index, follow" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_TRACKING_ID');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased relative`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {/* <GlobalGlow /> */}
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
