/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Sirius-Chain Developer Center 0.1.0', // Title for your website.
  tagline: 'A website for blockchain developer',
  url: 'https://bcdocs.xpxsirius.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Sirius-Chain Developer Center',
  organizationName: 'ProximaX',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started/setting-up-workstation', label: 'Getting Started'},
    {doc: 'built-in-features/account', label: 'Built-in features'},
    {page: 'endpoints', label: 'REST API Endpoints'},
    {doc: 'guides/account/account-overview', label: 'Guides'},
    {search: true}
  ],

  
  algolia: {
    apiKey: 'my-api-key',
    indexName: 'my-index-name',
    placeholder: 'Search',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo-proximax-white.png',
  footerIcon: 'img/logo-proximax.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#1fb4ac',
    secondaryColor: '#f06623',
  },

  /* Custom fonts for website */
  
  fonts: {
    myFont: [
      "-apple-system",
      "system-ui"
    ],
    myOtherFont: [
      "Lato"
    ]
  },
  

  docsSideNavCollapsible: true,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} ProximaX`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['/fontawesome-5.9/js/all.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
