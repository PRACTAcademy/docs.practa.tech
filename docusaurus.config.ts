import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This file runs in Node.js - no browser APIs here.

const config: Config = {
  title: 'PRACTA Docs',
  tagline: 'Documentation Directory of PRACTA',
  favicon: 'img/favicon.ico',

  url: 'https://docs.practa.tech',
  baseUrl: '/',

  organizationName: 'PRACTAcademy', // GitHub org/user name
  projectName: 'docs.practa.tech', // Repo name

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/PRACTAcademy/docs.practa.tech/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'PRACTA Docs',
      logo: {
        alt: 'PRACTA Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'disclaimer/Disclaimer',
          label: 'DISCLAIMER',
          position: 'left'
        },
        {
          href: 'https://github.com/PRACTAcademy/docs.practa.tech',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Terms of Service',
              to: '/docs/TermsofService',
            },
            {
              label: 'PrivacyPolicy',
              to: '/docs/intro',
            },
            {
              label: 'Cookie Policy',
              to: '/docs/CookiePolicy',
            },
            {
              label: 'Support',
              to: '/docs/SupportAlternatives',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://practa.tech/discord',
            },
            {
              label: 'Twitter / X',
              href: 'https://x.com/practatech',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/practa_tech/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'PRACTA',
              href: 'https://practa.tech',
            },
            {
              label: 'PRACTA Dashboard',
              href: 'https://dashboard.practa.tech',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/PRACTAcademy/docs.practa.tech',
            },
            {
              label: 'Slack Support',
              href: 'https://practasupport.slack.com'
            }
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} PRACTA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    algolia: {
      appId: 'FAKEAPPID123',
      apiKey: 'FAKEAPIKEY456',
      indexName: 'fake_index',
      contextualSearch: true,
      externalUrlRegex: 'external\\.practa\\.tech',
      searchParameters: {},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;