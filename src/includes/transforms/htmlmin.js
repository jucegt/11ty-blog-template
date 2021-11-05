import minifier from 'html-minifier';
import posthtml from 'posthtml';
import uglify from 'posthtml-minify-classnames';

const htmlmin = (config) => {
  config.addTransform('htmlmin', async (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const { html } = await posthtml()
        .use(uglify({ filter: /^#svg-/ }))
        .process(content);

      const minified = minifier.minify(html, {
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
