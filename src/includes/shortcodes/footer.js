const footer = (config) => {
  config.addShortcode('footer', (content, config, texts) => {
    const year = new Date().getFullYear();
    return /* html */ `
      <footer class="footer">
        <div class="container">
          <div class="footer__section">
            <a class="logo" href="/" title="${config.title}">
              <svg><use xlink:href="#logo" /></svg>
            </a>
            <div class="footer__icons">
              ${content}
            </div>
          </div>
          <div class="footer__section">
            <div class="footer__links">
              Links
            </div>
            <div class="footer__copy">
              <p>©${year} ${config.title} - ${texts.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  });
};

export default footer;
