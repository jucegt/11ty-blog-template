const pages = (config) => {
  config.addCollection('pages', (collection) => {
    return collection.getFilteredByGlob('./src/content/pages/*.md');
  });
};

export default pages;
