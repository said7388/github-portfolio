import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      {
        process.env.NEXT_PUBLIC_GTM &&
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      }
    </html>
  )
};
