// Plugins
import amp from '@ampproject/eleventy-plugin-amp';

// Includes
import collections from './src/includes/collections';

export default (config) => {
  collections(config);

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
