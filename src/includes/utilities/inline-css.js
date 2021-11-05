import fs from 'fs/promises';
import path from 'path';

import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const inlineCSS = async (file) => {
  const styles = await fs
    .readFile(path.resolve(__dirname, `../../assets/css/${file}`))
    .then(async (css) => {
      const minified = await postcss([autoprefixer, cssnano]).process(css, {
        from: '',
        to: '',
      });
      return minified.css;
    });

  return styles;
};

export default inlineCSS;
