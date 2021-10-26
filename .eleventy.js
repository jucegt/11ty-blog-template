// Plugins
import amp from '@ampproject/eleventy-plugin-amp';

// Collections
import posts from './src/includes/collections/posts';

export default (config) => {
  config.addCollection('posts', posts);

  config.addPlugin(amp, {
    dir: {
      output: '.11ty',
    },
  });

  return {
    dir: {
      input: 'src',
      output: '.11ty',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
  };
};
