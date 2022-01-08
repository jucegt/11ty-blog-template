const mask = (config) => {
  config.addShortcode('mask', (texts) => {
    return /* html */ `
      <div
      role="button"
      tabindex="0"
      aria-label="${texts.closeModal}"
      [class]="menu || search ? 'mask mask--show' : 'mask'"
      class="mask"
      on="tap:AMP.setState({ menu: false, search: false, query: null })"
      ></div>
    `;
  });
};

export default mask;
