import minifier from 'html-minifier';

const htmlmin = (config) => {
  config.addTransform('htmlmin', async (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const minified = minifier.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });
};

export default htmlmin;
