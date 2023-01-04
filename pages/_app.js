import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import 'react-toastify/dist/ReactToastify.css';
// import type { AppProps } from 'next/app'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  );
}
