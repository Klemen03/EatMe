import { Jost } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/theme-provider';

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'EatMe.',
  description:
    'Order your favorite meals from our food delivery online website and enjoy delicious dishes delivered straight to your door. Discover a wide variety of cuisines, fast delivery, and easy online ordering for a hassle-free dining experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
