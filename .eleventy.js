// Includes
import collections from './src/includes/collections';
import shortcodes from './src/includes/shortcodes';
import plugins from './src/includes/plugins';
import watchers from './src/includes/watchers';
import transforms from './src/includes/transforms';

export default (config) => {
  collections(config);
  shortcodes(config);
  plugins(config);
  watchers(config);
  transforms(config);

  config.ignores.add('./src/admin');
  config.addPassthroughCopy('./src/admin');

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
