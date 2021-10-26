import amp from '@ampproject/eleventy-plugin-amp';

export default (config) => {
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
