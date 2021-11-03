import metadata from './metadata';
import header from './header';
import footer from './footer';
import svgs from './svgs';

const shortcodes = (config) => {
  metadata(config);
  header(config);
  footer(config);
  svgs(config);
};

export default shortcodes;
