import fs from 'fs/promises';
import path from 'path';

export const render = async (data) => {
  const { content, config } = data;
  return /* html */ `
  <!doctype html>
  <html lang="${config.language}">
    <head>
      <meta charset="utf-8" />
      <meta name="generator" content="eleventy" />
      <meta name="viewport" content="width=device-width" />
      ${this.metadata(data)}
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">
      <style amp-custom>
        ${await fs
          .readFile(path.resolve(__dirname, '../assets/css/style.css'))
          .then((css) => css)}
      </style>
      <link rel="canonical" href="." />
    </head>
    <body>
      ${this.header(config)}
      ${content}
      ${this.footer(config)}
      ${this.svgs()}
    </body>
  </html>
  `;
};
