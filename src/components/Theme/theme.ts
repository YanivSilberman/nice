import { shadeColor } from './helpers';

type MODES = 'light' | 'dark';

const FACTORY_PRIMARY = '#2196f3';
const FACTORY_DARK = '#1a1e24';
const FACTORY_LIGHT = '#fffefc';

const theme = (
  mode: MODES = 'light',
  primary: string = FACTORY_PRIMARY
) => ({
  nice: {
    color: {
      default: '#707070',
      primary,
      black: '#333',
      white: '#fff',
      dark: FACTORY_DARK,
      light: FACTORY_LIGHT,
  
      darken: (color: string, val: number = -10) => shadeColor ( color, val )
    },
  
    border: {
      radius: 5,
      getRadius: function(this) { return `${this.radius}px` },
      
      default: `1px solid #bdbdbd`
    },
  
    font: {
      weight: {
        thin: 400,
        thicc: 700
      }
    },
  
    // buttons and inputs
    sizes:  {
      small: 30,
      default: 35,
      large: 40
    },
  
    spacing: {
      innerWidth: '75%'
    },
  
  
    // modes
    ...modes[mode]
  }
});

const light = {
  bg: FACTORY_LIGHT,
  fontColor: FACTORY_DARK
};

const dark = {
  bg: FACTORY_DARK,
  fontColor: FACTORY_LIGHT
};

const modes = { light, dark };

const defaultTheme = theme();
type Theme = typeof defaultTheme;

export { light, dark, Theme };
export default theme;