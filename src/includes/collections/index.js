// Collections
import posts from 'posts';
import pages from 'pages';
import authors from 'authors';
import categories from 'categories';

const collections = (config) => {
  config.addCollection('posts', posts);
  config.addCollection('pages', pages);
  config.addCollection('authors', authors);
  config.addCollection('categories', categories);

  return;
};

export default collections;
