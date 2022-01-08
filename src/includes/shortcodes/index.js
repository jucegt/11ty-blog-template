import metadata from './metadata';
import amp from './amp';
import header from './header';
import search from './search';
import footer from './footer';
import social from './social';
import mask from './mask';
import svgs from './svgs';

const shortcodes = (config) => {
  metadata(config);
  amp(config);
  header(config);
  search(config);
  footer(config);
  social(config);
  mask(config);
  svgs(config);
};

export default shortcodes;
