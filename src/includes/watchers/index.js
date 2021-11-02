import scss from './scss';

const watchers = (config) => {
  scss(config);
  config.setWatchThrottleWaitTime(500);
};

export default watchers;
