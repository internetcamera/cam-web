import Head from 'next/head';
import React from 'react';

const IndexPage = () => {
  return (
    <div className="index">
      <Head>
        <meta name="twitter:title" content={`Cam - the NFT Camera app`} />
        <meta
          name="twitter:description"
          content={`Cam is in private beta with a small group of users. For updates and access follow @InternetCamera.`}
        />
        <meta name="twitter:image" content="/static/twitter-card.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="spacer" />
      <img className="logo" src="/static/icon.png" width="150" height="150" />
      <div className="spacer" />
      <div className="info">
        Cam is in private beta with a small group of users.
        <br />
        For updates and access, follow{' '}
        <a target="_blank" href="https://twitter.com/internetcamera">
          @InternetCamera
        </a>
        .
      </div>
      <style jsx>{`
        .index {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .logo {
          width: 200px;
          height: auto;
        }
        .spacer {
          flex: 1 1 auto;
        }
        .info {
          max-width: 400px;
          padding: 20px;
          line-height: 1.6em;
          text-align: center;
          color: #ccc;
          margin: 0 auto;
          background-color: hsl(0, 0%, 8%);
          margin-bottom: 40px;
        }
        .info a {
          color: white;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          color: #aaa;
        }
        .footer a {
          color: #ddd;
        }
        @media (max-width: 480px) {
          .logo {
            width: 150px;
          }
          .info {
            margin: 20px;
            font-size: 14px;
          }
        }
      `}</style>
      <style jsx global>{`
        header {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
