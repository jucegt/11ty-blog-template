const header = (config) => {
  config.addShortcode('header', (config, texts) => {
    return /* html */ `
      <header class="header">
        <a href="/" class="logo" title="${config.title}">
          <svg><use xlink:href="#logo" /></svg>
        </a>

        <nav [class]="menu ? 'header__panel header__panel--show menu' : 'header__panel menu'" class="header__panel menu">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Page</a></li>
            <li><a href="/">Category</a></li>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Page</a></li>
            <li><a href="/">Category</a></li>
          </ul>
        </nav>

        <div [class]="search ? 'header__panel header__panel--show tools' : 'header__panel tools'" class="header__panel tools">
          <div class="search">
            <form action-xhr="/api/search/" method="post" target="_top" on="submit:AMP.setState({ query: searchValue })">
              <input id="search-input" type="text" name="search" placeholder="${texts.search}" on="input-throttled:AMP.setState({ searchValue: event.value })" />
              <svg><use xlink:href="#search" /></svg>
            </form>
          </div>
          <div class="mode">
            <a role="button" on="tap:AMP.setState({ dark: true })" class="moon"><svg><use xlink:href="#moon" /></svg></a>
            <a role="button" on="tap:AMP.setState({ dark: false })" class="sun"><svg><use xlink:href="#sun" /></svg></a>
          </div>
        </div>

        <ul class="header__nav">
          <li>
            <a href="/"><svg><use xlink:href="#home" /></svg></a>
          </li>
          <li [class]="search ? 'active' : ''">
            <a role="button" on="tap:AMP.setState({ search: !search, menu: false }),search-input.focus">
              <svg><use xlink:href="#search" /></svg>
            </a>
          </li>
          <li [class]="menu ? 'active' : ''">
            <a role="button" on="tap:AMP.setState({ menu: !menu, search: false })">
              <svg><use xlink:href="#menu" /></svg>
            </a>
          </li>
          <li>
            <div class="mode">
              <a role="button" on="tap:AMP.setState({ dark: true })" class="moon"><svg><use xlink:href="#moon" /></svg></a>
              <a role="button" on="tap:AMP.setState({ dark: false })" class="sun"><svg><use xlink:href="#sun" /></svg></a>
            </div>
          </li>
        </ul>
      </header>
    `;
  });
};

export default header;
