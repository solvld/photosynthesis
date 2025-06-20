import type { Metadata } from 'next';
import { hardman, abcDiatype, suisseIntl } from './fonts/local-fonts';
import { ibmPlexMono } from './fonts/ibm-plex';
import './globals.css';

export const metadata: Metadata = {
  title: 'Photosynthesis',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hardman.variable} ${abcDiatype.variable} ${suisseIntl.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
