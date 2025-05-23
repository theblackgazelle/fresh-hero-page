// app/layout.tsx
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Fresh Hero Page</title>
      </head>
      <body className="dark">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
