const social = (config) => {
  config.addShortcode('social', (config, type) => {
    console.log('Social type: ', type);
    const socials = config.socials
      .map((social) => {
        return /* html */ `
        <a href="${social.url}" title="${social.name}" target="_blank" class="social__icon ${social.class}">
          <svg><use xlink:href="${social.icon}" /></svg>
        </a>
      `;
      })
      .join('');

    return /* html */ `
      <div class="social">
        ${socials}
      </div>
    `;
  });
};

export default social;
