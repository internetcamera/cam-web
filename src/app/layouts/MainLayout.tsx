import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@app/components/Header';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Cam - the social NFT camera app</title>
        <link rel="icon" type="image/png" href="/static/icon.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <style jsx>{`
        main {
          max-width: 600px;
          margin: 80px auto;
        }
        @media (max-width: 768px) {
          main {
            margin: 100px auto;
          }
        }
        @media (max-width: 480px) {
          main {
            margin: 0;
          }
        }
      `}</style>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          font-family: 'Helvetica Now';
          margin: 0;
          padding: 0;
          background-color: hsl(0, 0%, 5%);
          color: white;
        }
        @font-face {
          font-family: 'Helvetica Now';
          src: url('/static/fonts/HelveticaNowDisplay-Regular.otf');
          font-weight: normal;
        }
        @font-face {
          font-family: 'Helvetica Now';
          src: url('/static/fonts/HelveticaNowDisplay-Bold.otf');
          font-weight: bold;
        }
        @font-face {
          font-family: 'Helvetica Now';
          src: url('/static/fonts/HelveticaNowDisplay-SemiLight.otf');
          font-weight: 400;
        }
        @font-face {
          font-family: 'Helvetica Now Micro';
          src: url('/static/fonts/HelveticaNowMicro-Regular.otf');
          font-weight: normal;
        }
        @font-face {
          font-family: 'Helvetica Now Micro';
          src: url('/static/fonts/HelveticaNowMicro-Bold.otf');
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default MainLayout;
