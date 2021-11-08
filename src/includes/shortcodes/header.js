const header = (config) => {
  config.addShortcode('header', (config) => {
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
          <div class="search">Search</div>
          <div class="mode">Mode</div>
        </div>

        <ul class="header__nav">
          <li>
            <a href="/"><svg><use xlink:href="#home" /></svg></a>
          </li>
          <li [class]="search ? 'active' : ''">
            <a role="button" on="tap:AMP.setState({search: !search, menu: false})">
              <svg><use xlink:href="#search" /></svg>
            </a>
          </li>
          <li [class]="menu ? 'active' : ''">
            <a role="button" on="tap:AMP.setState({menu: !menu, search: false})">
              <svg><use xlink:href="#menu" /></svg>
            </a>
          </li>
          <li>
            <a role="button"><svg><use xlink:href="#moon" /></svg></a>
          </li>
        </ul>
      </header>
    `;
  });
};

export default header;
