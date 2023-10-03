import './globals.css';
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google';


const roboto = Roboto({ subsets: ['latin'], variable:'--font-roboto' });
const baijamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable:'--font-baijamjuree' });

export const metadata = {
  title: 'Arcadis solution',
  description: 'Aplicação para consultas de taxonomia de animais'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  );
}
