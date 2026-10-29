import './globals.css';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

export const metadata = {
  title: 'Century Overseas Papers | Paper Products Manufacturer',
  description:
    'Century Overseas Papers is a leading manufacturer and supplier of quality paper products, offering innovative and sustainable paper solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts — improves load time on all devices */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Playfair Display — loaded via <link> not @import so it works in iOS Private Browsing */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,500;1,600&display=swap"
        />
      </head>
      <body className="relative min-h-screen">
        {/* Loader is first in <body> — SSR rendered, visible before any JS */}
        <PageLoader />

        <Header />

        <main className="pt-28">
          {children}
        </main>

        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
