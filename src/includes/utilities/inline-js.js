import fs from 'fs/promises';
import path from 'path';

import uglify from 'uglify-js';

const inlineJS = async (file) => {
  const js = await fs
    .readFile(path.resolve(__dirname, `../../assets/js/${file}`))
    .then(async (js) => {
      const minified = uglify.minify(`${js}`);
      return minified.code;
    });

  return js;
};

export default inlineJS;
