import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '89sam1book - SaaS for Book Sales',
  description: 'SaaS system for book sales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
