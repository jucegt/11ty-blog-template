const header = (config) => {
  config.addShortcode('header', () => {
    return /* html */ `
      <header class="header">
        <a href="/" class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="130" height="35" viewBox="0 0 130 35">
            <rect width="130" height="35" rx="17.5" opacity="0.05"/>
          </svg>
        </a>
      </header>
    `;
  });
};

export default header;
