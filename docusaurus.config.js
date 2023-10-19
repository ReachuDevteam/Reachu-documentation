/* eslint-disable */
const fs = require('fs');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

//const UIKitReferencePlugins = require('./plugins/ui-kit-reference-plugin.cjs');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const posthogPlugin = require('./plugins/posthog-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

/** @type {import('@docusaurus/preset-classic').Options} */ defaultSettings = {
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = { label: 'Default Version' }, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      lastVersion: 'current',
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: true,
      editUrl: 'https://gitlab.com/outshifterdev/docs.gitlab.io/-/edit/main/',
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...defaultSettings,
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('sdk', { version: '1.2.1', label: '1.2.1', isLast: true, }),
  defineSection('shopify'),
  defineSection('woocommerce'),
  defineSection('wordpress'),
  defineSection('universal-integration'),
];

const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reachu.io — e-commerce where you are',
  tagline:
    'Direct purchases where consumers spend their time is the next evolution of online commerce.',
  // TODO: Update base url
  url: 'https://d6ccf1b5ffa2.ngrok.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.svg',
  trailingSlash: false,
  stylesheets: [
    { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
    { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossOrigin: true },
    {
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@1&family=Plus+Jakarta+Sans:wght@400;600;700&family=Rubik:wght@400;600;700&display=swap',
      rel: 'stylesheet',
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dyte-in', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  //clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          path: 'docs/home',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars-home.js'),
          breadcrumbs: false,
          editUrl: 'https://github.com/reachu',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        googleAnalytics: {
          trackingID: 'UA-173908240-1',
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-script-tags',
    tailwindPlugin,
    webpackPlugin,
    posthogPlugin,
    ...SECTIONS,
    //...UIKitReferencePlugins,
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/reachu-docs-card.png',
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // NOTE: hideOnScroll breaks on `/api`, enable when fixed
        // hideOnScroll: true,
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Reachu Docs',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            label: 'Version',  // puedes cambiar esto al nombre de tu versión actual
            to: '/',  // este es el enlace predeterminado, que generalmente apunta a la documentación más reciente
          },
          {
            label: 'SDK',
            to: 'sdk',
          },
          {
            label: 'API',
            to: '/api/',
          },
          {
            label: 'Universal Integration',
            to: 'universal-integration',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Book a demo',
            href: 'https://reachu.typeform.com/to/OgqORjgM',
            position: 'right',
            className: 'navbar-book-demo',
          },
          /*
          {
            label: 'Sign Up',
            href: 'https://dev.dyte.io/register',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },*/
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Reachu Docs',
          height: '24px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Demo',
                href: 'https://app.dyte.io',
              },
              {
                label: 'Developer Portal',
                href: 'https://dev.dyte.io',
              },
              {
                label: 'Pricing',
                href: 'https://dyte.io/#pricing',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://dyte.io',
              },
              {
                label: 'Join Us',
                href: 'https://dyte.freshteam.com/jobs',
              },
              {
                label: 'Privacy Policy',
                href: 'https://dyte.io/privacy-policy',
              },
              {
                label: 'Contact Us',
                href: 'https://dyte.io/contact',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: 'https://docs.dyte.io',
              },
              {
                label: 'Blog',
                href: 'https://dyte.io/blog',
              },
              {
                label: 'Community',
                href: 'https://community.dyte.io',
              },
            ],
          },
        ],
        copyright: 'Copyright © Reachu. All rights reserved.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      algolia: {
        appId: '4WVJRJDMQT',
        apiKey: 'ac2141ba10dcd757ffaebe313c838b36',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: false,
      },
      posthog: {
        apiKey: 'c1X6knGkGuxT4WFysAWi6chjtoMmTzILKO7inv7hIgs',
      },
      tags: {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              window.intercomSettings = {
                api_base: "https://api-iam.intercom.io",
                app_id: "mbluv6y6"
              };
          `,
          },
          {
            tagName: 'script',
            innerHTML: `
              // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/mbluv6y6'
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/mbluv6y6';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();            
          `,
          },
        ],
      },
    }),
};

module.exports = config;
