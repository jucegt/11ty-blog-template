const categories = (config) => {
  config.addCollection('categories', (collection) => {
    return collection.getFilteredByGlob('./src/content/categories/*.md');
  });
};

export default categories;
