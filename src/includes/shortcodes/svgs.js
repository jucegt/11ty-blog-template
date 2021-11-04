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
      </svg>
    `;
  });
};

export default svg;
