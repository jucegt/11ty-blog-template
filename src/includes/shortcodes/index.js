import metadata from './metadata';
import header from './header';

const shortcodes = (config) => {
  metadata(config);
  header(config);
  return;
};

export default shortcodes;
