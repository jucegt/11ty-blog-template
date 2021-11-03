const footer = (config) => {
  config.addShortcode('footer', (config) => {
    return /* html */ `
      <footer class="footer">
        <div class="container">
          <div class="footer__section">
            <a class="logo" href="/" title="${config.title}">
              <svg><use xlink:href="#logo" /></svg>
            </a>
            <div class="footer__icons">
              Icons
            </div>
          </div>
          <div class="footer__section">
            <div class="footer__links">
              Links
            </div>
            <div class="footer__copy">
              Icons
            </div>
          </div>
        </div>
      </footer>
    `;
  });
};

export default footer;
