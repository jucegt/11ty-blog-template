const authors = (config) => {
  config.addCollection('authors', (collection) => {
    return collection.getFilteredByGlob('./src/content/authors/*.md');
  });
};

export default authors;
