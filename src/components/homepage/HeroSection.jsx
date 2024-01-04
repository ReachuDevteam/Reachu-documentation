import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';

export default function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="noise-bg mt-9 py-16 px-4 lg:py-12">
      <Head>
        <link rel="prefetch" href="/static/landing-page/hero-light.png" />
        <link rel="prefetch" href="/static/landing-page/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <img
            src={`/logo/${colorMode}-docs.svg`}
            alt="Reachu"
            style={{ maxWidth: 300, marginBottom: 15 }}
          />
          <p className="text-sm font-bold lg:max-w-md lg:text-2xl">
            How to add ecommerce anywhere
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <div className="relative">
              <span
                className={`btn-gradient-bg btn-gradient-bg-${colorMode}`}
              ></span>
              <Link
                href="#start-building"
                className={`btn-gradient btn-gradient-${colorMode} rounded-sm bg-transparent px-12 py-3.5 text-center font-semibold text-white transition duration-500 ease-in-out hover:text-white`}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
