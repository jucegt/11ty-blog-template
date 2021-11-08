// Collections
import posts from './posts';
import pages from './pages';
import authors from './authors';
import categories from './categories';

const collections = (config) => {
  posts(config);
  pages(config);
  authors(config);
  categories(config);
};

export default collections;
