import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { Toaster } from 'sonner';
import { SessionProvider } from 'next-auth/react';

import { ProductsProvider } from '@/context/ProductsContext';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ProductsProvider>
        <Component {...pageProps} />
        <Toaster position="top-center" richColors />
      </ProductsProvider>
    </SessionProvider>
  );
}
