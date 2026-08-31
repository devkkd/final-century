import './globals.css';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Century Overseas Papers | Paper Products Manufacturer',
  description:
    'Century Overseas Papers is a leading manufacturer and supplier of quality paper products, offering innovative and sustainable paper solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
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