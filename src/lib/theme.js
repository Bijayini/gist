const color = {
  primaryColor: '#cc1c5d',
  white: '#ffffff',
  black: '#000000',
  black2: '#323232',
  black3: '#3f3f3f',

  red1: '#be0000',
  red2: '#fbdae1',

  blue1: '#008bc1',
  blue2: '#e9faff',

  grey1: '#4a4a4a',
  grey2: '#9e9e9e',
  grey3: '#c8c8c8',
  grey4: '#d8d8d8',
  grey5: '#f0f0f0',
};

const theme = {
  ...color,
  textColor: color.grey1,
  warningMessageColor: color.red1,
  warningMessageBg: color.red2,
  loaderOverlay: 'rgba(50,50,50,0.95)',
  loaderBoxShadow: 'rgba(0, 0, 0, 0.5)',
  border: color.grey3,
  breakpoints: {
    smallScreen: 'min-width: 320px',
    tablet: 'min-width: 768px',
    desktop: 'min-width: 1248px',
  },
};

const zIndex = {
  loaderOverlay: '999',
};

const maxWidth = '960px';

export default theme;
export { zIndex, maxWidth };
