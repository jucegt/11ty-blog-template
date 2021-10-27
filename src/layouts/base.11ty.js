export const render = (data) => {
  const { content, config } = data;
  return /* html */ `
  <!doctype html>
  <html lang="${config.language}">
    <head>
      <meta charset="utf-8" />
      <meta name="generator" content="eleventy" />
      <meta name="viewport" content="width=device-width" />
      ${this.metadata(data)}
      <style amp-custom></style>
      <link rel="canonical" href="." />
    </head>
    <body>
      ${content}
    </body>
  </html>
  `;
};
