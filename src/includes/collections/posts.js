const posts = (config) => {
  config.addCollection('posts', (collection) => {
    return collection.getFilteredByGlob('./src/content/posts/*.md');
  });
};

export default posts;
