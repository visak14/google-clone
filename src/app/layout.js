import Footer from '@/components/Footer';
import './globals.css'


export const metadata = {
  title: 'Google clone',
  description: 'vishal keshri Google clone app',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <main>
      {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
