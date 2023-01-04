import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { StoreContext } from '../utils/Store';
import { useSession } from 'next-auth/react';

const Layout = ({ title, children }) => {
  const { state, dispatch } = useContext(StoreContext);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const { status, data: session } = useSession();

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + '- NextComm' : 'NextComm'}</title>
        <meta
          name="description"
          content="NextJs E-commerce website build with TailwindCSS "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="top-center" limit={1} />
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className="flex h-12 px-8 justify-between shadow-md items-center">
            <Link href="/" className="text-2xl font-bold">
              Next-Ecomm
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login" className="p-2">
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>

        <main className="container m-auto px-8 py-8">{children}</main>

        <footer className="flex justify-center items-center h-10 shadow-inner">
          CopyRight &copy; 2023
        </footer>
      </div>
    </>
  );
};

export default Layout;
