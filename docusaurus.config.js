// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nate Algorithms',
  tagline: 'Nate Algorithms are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://algo.wangbaoqi.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wangbaoqi', // Usually your GitHub org/user name.
  projectName: 'leetCode', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Wangbaoqi/leetCode/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Wangbaoqi/leetCode/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass'
  ],

  themes: [
    '@docusaurus/theme-live-codeblock',
    '@docusaurus/theme-mermaid'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Nate Algorithms',
        style: 'dark',
        logo: {
          alt: 'Nate Algorithms Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'linkListSidebar',
            position: 'left',
            label: '链表',
          },
          {
            type: 'docSidebar',
            sidebarId: 'arraySidebar',
            position: 'left',
            label: '数组',
          },
          {
            type: 'docSidebar',
            sidebarId: 'stackSidebar',
            position: 'left',
            label: '栈/队列',
          },{
            type: 'docSidebar',
            sidebarId: 'treeSidebar',
            position: 'left',
            label: '树',
          },
          { to: '/playground', label: 'Playground', position: 'left' },
          { to: 'https://wangbaoqi.tech', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/wangbaoqi/leetCode',
            'aria-label': 'GitHub repository',
            className: 'navbar-github-link',
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
                label: 'LinkList',
                to: '/docs/algo-linkList/LinkList',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wangbaoqi/leetcode',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NateAlgo, Inc. Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: 'javascript',
        additionalLanguages: ['javascript', 'jsx', 'tsx'],
        theme: require('./core/PrismTheme')
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'NUF6YERY6G',
  
        // Public API key: it is safe to commit it
        apiKey: '2c595aa3284085c549126aca2a61ea4e',
  
        indexName: 'algo-wangbaoqi',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        // searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',
  
        //... other Algolia params
      },
      mermaid: {
        // theme: {light: 'forest', dark: 'neutral'},
        options: {
          // maxTextSize: 10,
          startOnLoad: true,
          securityLevel: 'loose'
        },
      }
    }),
};

module.exports = config;
