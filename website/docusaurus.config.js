const pkg = require('react-day-picker/package.json');
const pkgPath = '../packages/react-day-picker';

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React DayPicker',
  tagline: 'Customizable date picker component for React',
  url: 'https://react-day-picker.js.org',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'gpbl',
  projectName: 'react-day-picker',
  clientModules: [require.resolve('react-day-picker/style.css')],
  themeConfig: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    image: 'images/favicon.png',
    navbar: require('./docusaurus.navbar.js'),
    gtag: {
      trackingID: 'UA-68185118-1'
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./docusaurus.sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          routeBasePath: '/'
        },
        // pages: false,
        theme: {
          customCss: require.resolve('./src/custom.css')
        }
      }
    ]
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // Typedoc settings
        entryPoints: [`${pkgPath}/src/index.ts`],
        tsconfig: `${pkgPath}/tsconfig.json`,
        allReflectionsHaveOwnDocument: true,
        readme: 'none',
        watch: process.env.TYPEDOC_WATCH,
        out: './api',

        // Markdown plugin settings
        hideBreadcrumbs: true,
        hideInPageTOC: true,
        indexTitle: 'API Reference'
      }
    ]
  ]
};

module.exports = config;
