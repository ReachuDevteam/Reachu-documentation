import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';

export default function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="noise-bg py-16 px-4 lg:py-12">
      <Head>
        <link rel="prefetch" href="/static/landing-page/hero-light.png" />
        <link rel="prefetch" href="/static/landing-page/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <img
            src={`/logo/${colorMode}.svg`}
            alt="Reachu"
            style={{ maxWidth: 300, marginBottom: 15 }}
          />
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            Get fast access to standardized product data and bi-directionally
            sync your platform with any eCommerce system.
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="#start-building"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              Start building
            </Link>
            {/*<Link
              href="/getting-started"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              Getting started
            </Link>*/}
          </div>
        </div>
        <div className="">
          <img
          //src={`/static/landing-page/hero-${colorMode}.png`}
          //alt="Preview of using Dyte SDKs"
          />
        </div>
      </div>
    </section>
  );
}
