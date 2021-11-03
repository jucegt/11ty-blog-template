const header = (config) => {
  config.addShortcode('header', (config) => {
    return /* html */ `
      <header class="header">
        <a href="/" class="logo" title="${config.title}">
          <svg><use xlink:href="#logo" /></svg>
        </a>
      </header>
    `;
  });
};

export default header;
