import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Head from '@docusaurus/Head';

export default function APIReferenceSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="relative mb-20 px-6">
      <Head>
        <link rel="prefetch" href="/static/landing-page/api-ref-light.png" />
        <link rel="prefetch" href="/static/landing-page/api-ref-dark.png" />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:py-32 lg:text-left">
        <Link
          href="/api"
          target="_blank"
          className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowTopRightIcon className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">API Reference</h2>
          <p className="text-zinc-400">
            The API allows you to fetch product data and use it in your own
            product, application or webpage. For instance in order to sell
            products natively within your own game, or headless commerce
            storefront. Here you will find introductions to all features, as
            well as resources, guides, and reference documentation for the APIs
            data structure.
          </p>
          <Link href="/api" className="text-primary-100 dark:text-primary">
            Get started with Reachu APIs &rarr;
          </Link>
          <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            <li className="flex flex-col gap-2">
              <Link
                href="/api/"
                className="group font-jakarta font-semibold text-current"
              >
                Add Products
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Fetch product from one or all of your Merchants
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <Link
                href="/api/"
                className="group font-jakarta font-semibold text-current"
              >
                Create a Checkout
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Have users checkout natively in your product
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <Link
                href="/api/"
                className="group font-jakarta font-semibold text-current"
              >
                Place an order
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Send orders back to the Merchants for fulfillment
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          <img
            src={`/static/landing-page/api-ref-${colorMode}.png`}
            alt="API Reference Preview"
          />
        </div>
      </div>
    </section>
  );
}
