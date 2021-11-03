const svg = (config) => {
  config.addShortcode('svgs', () => {
    return /* html */ `
      <svg style="display: block; width: 0; height: 0;">
        <symbol id="logo" viewBox="0 0 130 35">
          <rect width="130" height="35" rx="17.5" opacity="0.05"/>
        </symbol>
      </svg>
    `;
  });
};

export default svg;
