// pages/_app.tsx
import '../styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
