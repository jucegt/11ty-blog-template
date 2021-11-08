const svg = (config) => {
  config.addShortcode('svgs', () => {
    return /* html */ `
      <svg style="display: block; width: 0; height: 0;">
        <symbol id="logo" viewBox="0 0 130 35">
          <rect width="130" height="35" rx="17.5" opacity="0.05"/>
        </symbol>
        <symbol id="facebook" viewBox="0 0 13 22">
          <path d="M18,2H15a5,5,0,0,0-5,5v3H7v4h3v8h4V14h3l1-4H14V7a1,1,0,0,1,1-1h3Z" transform="translate(-6 -1)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </symbol>
        <symbol id="instagram" viewBox="0 0 22 22">
          <g transform="translate(-1 -1)">
            <rect width="20" height="20" rx="5" transform="translate(2 2)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path d="M16,11.37A4,4,0,1,1,12.63,8,4,4,0,0,1,16,11.37Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <line x2="0.01" transform="translate(17.5 6.5)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </g>
        </symbol>
        <symbol id="twitter" viewBox="0 0 24 20.142">
          <path d="M23,3a10.9,10.9,0,0,1-3.14,1.53,4.48,4.48,0,0,0-7.86,3v1A10.66,10.66,0,0,1,3,4s-4,9,5,13a11.64,11.64,0,0,1-7,2c9,5,20,0,20-11.5a4.5,4.5,0,0,0-.08-.83A7.72,7.72,0,0,0,23,3Z" transform="translate(0 -1.912)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </symbol>
        <symbol id="home" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22" />
        </symbol>
        <symbol id="menu" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </symbol>
        <symbol id="search" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </symbol>
        <symbol id="moon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </symbol>
        <symbol id="sun" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </symbol>
      </svg>
    `;
  });
};

export default svg;
