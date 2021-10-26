const base = ({ content, config }) => {
  return /* html */ `
  <!doctype html>
  <html lang="${config.language}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <meta name="description" content="This is the AMP Boilerplate.">
      <title>My AMP Page</title>
      <style amp-custom></style>
      <link rel="canonical" href=".">
    </head>
    <body>
      ${content}
    </body>
  </html>
  `;
};

export default base;
