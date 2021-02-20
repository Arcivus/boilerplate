const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  tabletLarge: 1024,
  laptop: 1200,
  desktop: 1440,
  desktopLarge: 1680
};

const COLORS = {
  primaryGray: '#232D37',
  primaryContrastBg: '#92D2D4',
  primaryContrast: '#08979C',
  primaryContrastLight: '#E6FFFB',
  green: '#46D500',

  secondaryGray: '#364451',

  success: '#9BC31E',
  warning: '#FAB923',
  error: '#E64141',
  info: '#0087BE',

  grayBG: '#E4E4E4',
  grayDefault: '#333333',

  gray1: '#FAFAFA',
  gray2: '#F5F5F5',
  gray3: '#EEEEEE',
  gray4: '#E8E8E8',
  gray5: '#D9D9D9',
  gray6: '#BFBFBF',
  gray7: '#8c8c8c',
  gray8: '#595959',
  gray9: '#262626',
  gray10: '#CCCCCC',

  harm1: '#FAB923',
  harm2: '#FDAA24',
  harm3: '#FE9B28',
  harm4: '#FD8C2E',
  harm5: '#FB7D34',
  harm6: '#F86E3A',
  harm7: '#F45F41',
  harm8: '#F15744',
  harm9: '#EA484B',

  score1: '#C70039',
  score2: '#FF5733',
  score3: '#FAB923',
  score4: '#9FDA40',
  score5: '#099441',

  white: '#FFFFFF'
};

const SIZES = {
  padding: '10px',
  paddingLarge: '20px'
};

const SHADOWS = {
  default: '4px 4px 10px rgba(0, 0, 0, 0.3)',
  active: `0 0 2px ${COLORS.primaryContrast}`,
  error: `0 0 2px ${COLORS.error}`,
  main: '0 3px 6px rgba(0, 0, 0, .16)',
  wide: '4px 4px 10px #0000004D'
};


export {
  BREAKPOINTS, COLORS, SIZES, SHADOWS
};
