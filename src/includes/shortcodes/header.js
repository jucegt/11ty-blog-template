const header = (config) => {
  config.addShortcode('header', (config) => {
    return /* html */ `
      <header class="header">
        <a href="/" class="logo" title="${config.title}">
          <svg><use xlink:href="#svg-logo" /></svg>
        </a>
      </header>
    `;
  });
};

export default header;
