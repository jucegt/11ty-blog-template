// Plugins
import amp from '@ampproject/eleventy-plugin-amp';

// Includes
// import collections from './src/includes/collections';
import shortcodes from './src/includes/shortcodes';

export default (config) => {
  // collections(config);
  shortcodes(config);

  config.ignores.add('./src/admin');
  config.addPassthroughCopy({ './src/admin': true });

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
