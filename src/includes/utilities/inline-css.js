import fs from 'fs/promises';
import path from 'path';

const inlineCSS = async (file) => {
  const styles = await fs
    .readFile(path.resolve(__dirname, `../../assets/css/${file}`))
    .then((css) => css);

  return styles;
};

export default inlineCSS;
