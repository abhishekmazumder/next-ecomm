import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ title, children }) => {
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
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className="flex h-12 px-8 justify-between shadow-md items-center">
            <Link href="/" className="text-lg font-bold">
              Next-Ecomm
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto px-8">{children}</main>

        <footer className="flex justify-center items-center h-10 shadow-inner">
          CopyRight &copy; 2023
        </footer>
      </div>
    </>
  );
};

export default Layout;
