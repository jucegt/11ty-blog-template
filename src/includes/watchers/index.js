import scss from './scss';
import js from './js';

const watchers = (config) => {
  scss(config);
  js(config);
  config.setWatchThrottleWaitTime(500);
};

export default watchers;
