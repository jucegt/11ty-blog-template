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
      <style amp-custom>
        ${await fs
          .readFile(path.resolve(__dirname, '../assets/css/style.css'))
          .then((data) => data)}
      </style>
      <link rel="canonical" href="." />
    </head>
    <body>
      ${this.header()}
      ${content}
    </body>
  </html>
  `;
};
