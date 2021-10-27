const metadata = (config) => {
  config.addShortcode('metadata', (data) => {
    const { title, description, config } = data;
    return /* html */ `
      <meta name="description" content="${description || config.description}" />
      <title>${title || config.title}</title>
    `;
  });
};

export default metadata;
