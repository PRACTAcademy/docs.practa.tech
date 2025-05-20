import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This file runs in Node.js - no browser APIs here.

const config: Config = {
  title: 'MITPA Docs',
  tagline: 'Documentation Directory of MITPA',
  favicon: 'img/favicon.ico',

  url: 'https://docs.mitpa.tech',
  baseUrl: '/',

  organizationName: 'MITPAcademy', // GitHub org/user name
  projectName: 'docs.mitpa.tech', // Repo name

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
          editUrl: 'https://github.com/MITPAcademy/docs.mitpa.tech/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'MITPA Docs',
      logo: {
        alt: 'MITPA Logo',
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
          href: 'https://github.com/MITPAcademy/docs.mitpa.tech',
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
              href: 'https://discord.gg/mitpa',
            },
            {
              label: 'Twitter / X',
              href: 'https://x.com/mitpa_tech',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@mitpa_tech',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/mitpa_tech/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'MITPA',
              href: 'https://mitpa.tech',
            },
            {
              label: 'MITPA Dashboard',
              href: 'https://academy.mitpa.tech',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MITPAcademy/docs.mitpa.tech',
            },
            {
              label: 'Slack Support',
              href: 'https://mitpasupport.slack.com'
            }
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} MITPA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    algolia: {
      appId: 'IMXCLX6JMB',
      apiKey: 'ab6b0559531ce8b69d33e951731e3d8f',
      indexName: 'mitpa-tech',
      contextualSearch: true,
      externalUrlRegex: 'external\\.mitpa\\.tech',
      searchParameters: {},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
