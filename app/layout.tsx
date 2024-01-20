import '@/app/ui/global.css';
import {lusitana} from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | BPSTAT Dashboard',
    default: 'BPSTAT Dashboard',
  },
  description: 'BLACKPINK events, discography and charts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
