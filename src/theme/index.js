import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';
// import overrides from './overrides';
import breakpoints from './breakpoints';

const theme = createTheme({
  breakpoints: {values: breakpoints.breakpointValues},
  palette,
  typography,
  // overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;

// more info https://material-ui.com/ru/customization/theming/
