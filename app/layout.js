import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/lib/theme-provider";
import Navigation from "@/components/lib/Navigation";
import Footer from "@/components/lib/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    template: `%s | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
  },
  description: `${process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}`,
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}   antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav>
            <Navigation />
          </nav>
          <main className="container mx-auto py-20 max-w-7xl min-h-screen ">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
