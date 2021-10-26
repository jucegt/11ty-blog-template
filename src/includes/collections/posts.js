const posts = (collection) => {
  return collection.getFilteredByGlob('./src/content/posts/*.md').reverse();
};

export default posts;
