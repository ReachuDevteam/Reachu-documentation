import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import { ShopifyIcon, WooIcon, WordPressIcon } from '../../icons';
import Head from '@docusaurus/Head';
import { useState } from 'react';

function SDKLink({ href, Icon, label, disabled = false }) {
  // yes, this is a weird way to do it :)
  const props = {
    ...(!disabled && { href }),
  };

  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black dark:hover:text-white',
        disabled && 'cursor-not-allowed'
      )}
      {...props}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const { colorMode } = useColorMode();
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-building">
      <Head>
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-light.png" />
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-dark.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="sticky top-14 z-10 mb-20 flex flex-col items-center gap-6 rounded-2xl bg-secondary-1000 py-6 lg:flex-row lg:justify-between">
          <h2 className="my-0 font-jakarta lg:text-3xl">
            Go live faster with our pre built integrations, SDK and API
          </h2>
          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="flex max-w-sm flex-1 items-center rounded-full border border-solid border-text-400 text-sm lg:text-base">
              <div
                className={clsx(
                  'flex-1 cursor-pointer py-1 text-center',
                  visibleSection === 'web' &&
                    'rounded-full border-2 border-solid'
                )}
                onClick={() => {
                  document
                    .getElementById('web')
                    .scrollIntoView({ block: 'center' });
                }}
              >
                Integrations
              </div>
              {/*<div
                className={clsx(
                  'flex-1 cursor-pointer py-1 text-center',
                  visibleSection === 'mobile' &&
                    'rounded-full border-2 border-solid'
                )}
                onClick={() => {
                  document
                    .getElementById('mobile')
                    .scrollIntoView({ block: 'center' });
                }}
              >
                Mobile
              </div>*/}
              <div
                className={clsx(
                  'flex-1 cursor-pointer py-1 text-center',
                  visibleSection === 'plugin' &&
                    'rounded-full border-2 border-solid'
                )}
                onClick={() => {
                  document
                    .getElementById('plugin')
                    .scrollIntoView({ block: 'center' });
                }}
              >
                SDK
              </div>
            </div>
          </div>
        </div>

        <div
          className="sdk-section relative mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="web"
          id="web"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-3xl">Integrations</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Reachu provides a number of plug-and-play applications and
              integrations to third party services. Making it possible for both
              Merchants and Channels to get started quickly while having the
              freedom to customize.
            </p>
            {/* <Link className="text-sm">Learn More &rarr;</Link> */}
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Extensions for Channels</h4>
            <h5>Storefronts</h5>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate with Reachu to import products to your Storefront, blog,
              webpage or application in minutes. Our apps and integrations for
              Channels auto-updates product information, orders and inventory in
              real-time.
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="shopify"
                    Icon={ShopifyIcon}
                    label="Shopify Source"
                  />
                </li>
                <li>
                  <SDKLink
                    href="woocommerce"
                    Icon={WooIcon}
                    label="WooCommerce"
                  />
                </li>
                <li>
                  <SDKLink
                    href="wordpress"
                    Icon={WordPressIcon}
                    label="WordPress"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Extensions for Suppliers</h4>
            <h5>eCommerce systems</h5>
            <p className="text-sm leading-relaxed text-text-400">
              Connect your ecommerce system to export products and give Channels
              and third parties access to them. Reachu synchronizes all orders,
              inventory and other product information in real-time.
            </p>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="shopify" Icon={ShopifyIcon} label="Shopify" />
              </li>
              <li>
                <SDKLink
                  href="woocommerce"
                  Icon={WooIcon}
                  label="WooCommerce"
                />
              </li>
              {/*<li>
                <SDKLink
                  href="react-ui-kit/basics/using-hooks"
                  Icon={ReactIcon}
                  label="Magento Extension"
                />
              </li>
              <li>
                <SDKLink
                  href="react-ui-kit/basics/using-hooks"
                  Icon={ReactIcon}
                  label="Squarespace App"
                />
              </li>*/}
            </ul>
          </div>
        </div>

        {/*<div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mobile"
          id="mobile"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-3xl">Mobile</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Plan to build a video/voice solution for Android, React Native,
              iOS, or Flutter, check the docs here to understand how Dyte can
              help you deliver best-in-class real-time communication experience
              for your mobile applications.
            </p>
            <Link className="text-sm" href="#">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p>
            <div className="flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                  <li>
                    <SDKLink
                      href="#"
                      Icon={ReactIcon}
                      label="React Native"
                      disabled
                    />
                  </li>
                  <li>
                    <SDKLink
                      href="#"
                      Icon={KotlinIcon}
                      label="Android"
                      disabled
                    />
                  </li>
                  <li>
                    <SDKLink href="#" Icon={SwiftIcon} label="iOS" disabled />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="android-core"
                  Icon={KotlinIcon}
                  label="Android"
                />
              </li>
              <li>
                <SDKLink
                  Icon={FlutterIcon}
                  label="Flutter"
                  href="flutter-core"
                />
              </li>
            </ul>
            <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
              <h5 className="text-center text-xs text-text-400">COMING SOON</h5>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink disabled Icon={ReactIcon} label="React Native" />
                </li>
                <li>
                  <SDKLink disabled Icon={SwiftIcon} label="iOS" />
                </li>
              </ul>
            </div>
          </div>
        </div>*/}

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="plugin"
          id="plugin"
        >
          <div className="flex flex-1 flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-3xl">SDK</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              The SDK lets you connect your application, storefront or platform
              with Reachu to start selling products natively. It enables you to
              automatically import products from Reachu and add native ecommerce
              functionality to your product. Reachu ensures that product data,
              stock, fulfillment, and shipping information is synchronized with
              all of the Merchants ecommerce systems.
            </p>
            <Link className="text-sm" href="/sdk">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex flex-[3] items-center justify-center rounded-3xl p-6 px-8 lg:justify-end">
            <img
              src={`/static/landing-page/sdk.png`}
              className="rounded-2xl p-3"
              style={{ backgroundColor: 'rgb(251 251 251)' }}
              alt="Plugin SDK Usage Preview"
            />
          </div>
        </div>

        {/* <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="desktop"
          id="desktop"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <div className="mb-4 text-xs font-semibold">COMING SOON</div>
            <h3 className="text-3xl">Desktop</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Take Dyte for a spin to build real-time communication solutions
              for Electron. Read the docs to get started with your desktop
              applications.
            </p>
            <Link href="#" className="text-sm">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex-1 rounded-3xl bg-secondary-800 p-6 px-8">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="#"
                  Icon={ElectronIcon}
                  label="Electron"
                  disabled
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 p-6 px-8">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="#"
                    disabled
                    Icon={ElectronIcon}
                    label="Electron"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <div className="text-center">
          <p>
            Don&apos;t see your tech stack here?{' '}
            <Link href="https://dyte.io/contact">Contact Us</Link>
          </p>
        </div>*/}
      </div>
    </section>
  );
}
