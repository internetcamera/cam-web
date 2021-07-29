import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <img className="logo" width="60" height="60" src="/static/icon.png" />
        </a>
      </Link>
      <style jsx>{`
        header {
          padding: 20px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
        }
        .logo {
          width: 60px;
          height: auto;
        }
        @media (max-width: 768px) {
          .logo {
            width: 40px;
          }
        }
        @media (max-width: 480px) {
          .header {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
