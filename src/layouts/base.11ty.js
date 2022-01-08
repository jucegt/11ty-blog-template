import inlineCSS from '../includes/utilities/inline-css';

export const render = async (data) => {
  const { content, config, texts } = data;
  const social = this.social(config);
  const textsByLang = texts[config.language];

  return /* html */ `
  <!doctype html>
  <html ⚡ lang="${config.language}" [class]="dark ? 'dark' : ''">
    <head>
      <!-- META -->
      <meta charset="utf-8" />
      <meta name="generator" content="eleventy" />
      <meta name="viewport" content="width=device-width" />
      ${this.metadata(data)}
      <!-- PRECONNECT -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      ${this.amp()}
      <!-- FONTS -->
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">
      <!-- STYLES -->
      <style amp-custom>
        ${await inlineCSS('style.css')}
      </style>
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      <!-- CANONICAL -->
      <link rel="canonical" href="." />
    </head>
    <body>
      ${this.header(config, textsByLang)}
      ${this.search()}
      ${content}
      ${this.footer(social, config, textsByLang)}
      ${this.mask(textsByLang)}
      ${this.svgs()}
    </body>
  </html>
  `;
};
