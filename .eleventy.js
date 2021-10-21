const eleventy = (config) => {
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

export default eleventy;
