import ampPlugin from '@ampproject/eleventy-plugin-amp';

const amp = (config) => {
  config.addPlugin(ampPlugin);
};

export default amp;
