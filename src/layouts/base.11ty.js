import inlineCSS from '../includes/utilities/inline-css';

export const render = async (data) => {
  const { content, config, texts } = data;
  const social = this.social(config);

  return /* html */ `
  <!doctype html>
  <html ⚡ lang="${config.language}">
    <head>
      <!-- META -->
      <meta charset="utf-8" />
      <meta name="generator" content="eleventy" />
      <meta name="viewport" content="width=device-width" />
      ${this.metadata(data)}
      <!-- PRECONNECT -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <!-- PRELOAD -->
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-bind-0.1.js" />
      <!-- AMP -->
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
      <!-- FONTS -->
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">
      <!-- STYLES -->
      <style amp-custom>
        ${await inlineCSS('style.css')}
      </style>
      <style amp-boilerplate>
        ${await inlineCSS('boilerplate/style.css')}
      </style>
      <noscript>
        <style amp-boilerplate>
          ${await inlineCSS('boilerplate/no-script.css')}
        </style>
      </noscript>
      <!-- CANONICAL -->
      <link rel="canonical" href="." />
    </head>
    <body>
      ${this.header(config)}
      ${content}
      ${this.footer(social, config, texts[config.language])}
      <div [class]="menu || search ? 'mask mask--show' : 'mask'" class="mask" on="tap:AMP.setState({menu: false, search: false})"></div>
      ${this.svgs()}
    </body>
  </html>
  `;
};
