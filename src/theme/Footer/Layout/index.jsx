import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description">
          Reachu is the API for product data access. Our infrastructure pulls
          product data from different sources, standardizes it so it can be made
          available in one universal format and easily distributed across
          multiple channels.
        </p>
        {/*<div className="footer__row">
          <div className="footer__data">
            <div className="footer__cta">
              <p>Signup to get 10,000 minutes free every month!</p>
              <Link href="https://dev.dyte.in/signup">Sign Up</Link>
            </div>
          </div>
          <div className="links">{links}</div>
        </div>*/}
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
