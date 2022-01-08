const amp = (config) => {
  config.addShortcode('amp', () => {
    return /* html */ `
      <!-- PRELOAD -->
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-bind-0.1.js" />
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-form-0.1.js" />
      <!-- AMP -->
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
      <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
    `;
  });
};

export default amp;
