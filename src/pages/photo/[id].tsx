import React from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import dayjs from 'dayjs';
import FilmIcon from '@app/components/FilmIcon';
import { GetStaticPaths, GetStaticProps } from 'next';
import { InternetCamera, InternetCameraAddresses } from '@internetcamera/sdk';
import { Film, Photo } from '@internetcamera/sdk/dist/types';
import { useRouter } from 'next/dist/client/router';
import ENSNameOrAddress from '@app/components/ENSNameOrAddress';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async ctx => {
  const camera = new InternetCamera();
  const photo = await camera.getPhoto(ctx.params?.id as string);
  const film = await camera.getFilm(photo.film.id);
  film.photos = [];
  film.wallets = [];
  return { props: { photo, film }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async ctx => {
  return { paths: [], fallback: true };
};

const PhotoPage = ({ photo, film }: { photo: Photo; film: Film }) => {
  const { isFallback } = useRouter();
  if (isFallback) return null;
  return (
    <div className="photo-page">
      <Head>
        <title>
          {film.symbol} – № {Number(photo.filmIndex) + 1} of{' '}
          {parseFloat(
            ethers.utils.formatEther(film.totalSupply)
          ).toLocaleString()}
        </title>
        <meta
          name="twitter:title"
          content={`${film.symbol} – № ${Number(photo.filmIndex) + 1} of 
          ${parseFloat(
            ethers.utils.formatEther(film.totalSupply)
          ).toLocaleString()}`}
        />
        <meta
          name="twitter:description"
          content={`${
            photo.owner.address == photo.creator.address
              ? 'Published and held by'
              : 'Published by'
          } ${photo.creator.address.slice(0, 8)}`}
        />
        <meta
          name="twitter:image"
          content={photo.image.replace(
            'ipfs://',
            process.env.NEXT_PUBLIC_IPFS_GATEWAY as string
          )}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="names">
        <div className="name">
          <FilmIcon size={22} /> {photo.film.symbol}
        </div>
        <div className="name">
          № {Number(photo.filmIndex) + 1} of{' '}
          {parseFloat(ethers.utils.formatEther(film.totalSupply))}
        </div>
      </div>
      <img
        src={photo.image.replace(
          'ipfs://',
          process.env.NEXT_PUBLIC_IPFS_GATEWAY as string
        )}
        width={photo.width}
        height={photo.height}
      />
      <div className="meta">
        <div className="owner">
          {photo.owner.address == photo.creator.address
            ? 'Published and held by '
            : 'Published by '}{' '}
          <ENSNameOrAddress address={photo.creator.address} />
        </div>
        <div className="posted">
          Posted {dayjs.unix(photo.createdAt).format('MMMM D, YYYY [at] h:mma')}
        </div>
      </div>
      <div className="buttons">
        <a
          className="button"
          target="_blank"
          href={`https://internet.camera/explorer/film/${film.filmAddress}`}
        >
          See more photos in{' '}
          <span className="button-icon">
            <FilmIcon size={18} />
          </span>{' '}
          {film.symbol} ↗
        </a>
        <a
          className="button"
          target="_blank"
          href={`https://testnets.opensea.io/assets/mumbai/${InternetCameraAddresses[80001].camera}/${photo.id}`}
        >
          OpenSea ↗
        </a>
      </div>
      <div className="info">
        Cam is in private beta with a small group of users.
        <br />
        For updates and access, follow{' '}
        <a target="_blank" href="https://twitter.com/internetcamera">
          @InternetCamera
        </a>
        .
      </div>
      <div className="footer">
        Cam is powered by{' '}
        <Link href="https://internet.camera">
          <a target="_blank">Internet Camera</a>
        </Link>
      </div>
      <style jsx>{`
        .photo-page {
        }
        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        .names {
          display: flex;
          border-top: 1px solid #1f1f1f;
          padding: 10px 5px;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
        }
        .name {
          font-size: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 400;
          opacity: 0.8;
        }
        .meta {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          font-size: 18px;
        }
        .posted {
          color: #888;
        }
        .buttons {
          margin-top: 20px;
          display: flex;
          gap: 10px;
          border-bottom: 1px solid #1f1f1f;
          padding-bottom: 20px;
          align-items: center;
        }
        .button {
          display: flex;
          align-items: center;
          border: 1px solid #333;
          display: inline-block;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          color: white;
          text-decoration: none;
        }
        .button-icon {
          position: relative;
          top: 3px;
          padding: 0 2px;
        }
        .button:hover {
          background-color: hsl(0, 0%, 10%);
        }
        .info {
          max-width: 400px;
          padding: 20px;
          line-height: 1.6em;
          text-align: center;
          color: #ccc;
          margin: 0 auto;
          margin-top: 40px;
          background-color: hsl(0, 0%, 8%);
        }
        .info a {
          color: white;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          margin-bottom: 40px;
          color: #aaa;
        }
        .footer a {
          color: #ddd;
        }
        @media (max-width: 480px) {
          .name {
            font-size: 16px;
            gap: 5px;
          }
          .names {
            padding: 10px;
          }
          .meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
            margin: 5px 10px;
            font-size: 14px;
          }
          .buttons {
            flex-direction: column;
            align-items: flex-start;
            margin: 10px 10px;
          }
          .button {
            font-size: 14px;
          }
          .info {
            margin: 20px;
            font-size: 14px;
          }
          .footer {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoPage;
