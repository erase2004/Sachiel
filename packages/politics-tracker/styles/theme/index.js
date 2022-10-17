const mediaSize = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  '3xl': 1600,
  '4xl': 1920,
}
const sharedColor = {
  gray: '#838383',
  black: '#000000',
  white: '#FFFFFF',
  green: '#2FB7BF',
}

export const theme = {
  backgroundColor: {
    blue: '#8379F8',
    gray: sharedColor.gray,
    orange: '#F58439',
    yellow: '#F6BA31',
    green: sharedColor.green,
    white: sharedColor.white,
    black5: 'rgba(15, 45, 53, 0.05)',
    highlightRed: '#DB4C65',
    greenLake: '#E9FBFF',
    landingYellow: '#F7BA31',
    pink: '#FFF8F3',
    brown: '#B3800D',
    black: sharedColor.black,
    skinColor: '#FFF5E7',
    disable: '#C5CBCD',
  },
  textColor: {
    blue: '#544AC9', //different with backgroundColor.blue
    gray: sharedColor.gray,
    green: '#208F96', //different with backgroundColor.green
    yellow: '#B2800D', //different with backgroundColor.yellow
    red: '#C0374F',
    orange: '#D6610C', //different with backgroundColor.orange
    black: '#0F2D35',
    white: sharedColor.white,
    pink: '#FFF1E8',
    disable: sharedColor.gray,
    black30: 'rgba(15, 45, 53, 0.3)',
  },
  borderColor: {
    black: sharedColor.black,
    white: sharedColor.white,
    yellow: '#B2800D',
  },
  fontSize: {
    'title-main': 'font-size:24px; line-height: 1.2',
    'title-main-md': 'font-size:32px; line-height: 1.2',
    'title-sub': 'font-size:16px; line-height: 1.3',
    'title-sub-md': 'font-size:18px; line-height: 1.3',
  },
  breakpoint: {
    xs: `@media (min-width: ${mediaSize.xs}px)`,
    sm: `@media (min-width: ${mediaSize.sm}px)`,
    md: `@media (min-width: ${mediaSize.md}px)`,
    lg: `@media (min-width: ${mediaSize.lg}px)`,
    xl: `@media (min-width: ${mediaSize.xl}px)`,
    xxl: `@media (min-width: ${mediaSize.xxl}px)`,
    '3xl': `@media (min-width: ${mediaSize['3xl']}px)`,
    '4xl': `@media (min-width: ${mediaSize['4xl']}px)`,
  },
}

export default theme
