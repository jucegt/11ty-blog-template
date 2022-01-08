const search = (config) => {
  config.addShortcode('search', () => {
    return /* html */ `
      <div class="search-results" [class]="query ? 'search-results search-results--show' : 'search-results'">
        <span [text]="query ? query : ''"></span>
      </div>
    `;
  });
};

export default search;
