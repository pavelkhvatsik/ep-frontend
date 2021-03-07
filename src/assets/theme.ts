import { createMuiTheme } from '@material-ui/core';

export const colors: Record<string, any> = {
  primary: '#53A9D0',
  secondary: '#db6958',
  disabled: {
    opacity3: 'rgba(50, 50, 50, 0.3)',
    opacity4: 'rgba(50, 50, 50, 0.4)',
    opacity6: 'rgba(50, 50, 50, 0.6)',
  },

  info: '#2eabff',
  guest: '#ffa610',
  warning: '#f49b03',
  error: '#ff2634',

  background: {
    page: '#f7f8f8',
    paper: '#ffffff',
  },

  text: {
    primary: '#323232',
    secondary: '#575757',
    contrast: '#FFFFFF',
  },
};

export const typography: Record<string, any> = {
  headers: {
    fontWeight: 700,
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1.125rem',
    },
    h5: {
      fontSize: '0.875rem',
    },
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
  body2: {
    fontSize: '0.75rem',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
  buttons: {
    text: {
      large: {
        fontSize: '1rem',
      },
    },
    root: {
      fontWeight: 700,
    },
    large: {
      fontSize: '1rem',
    },
  },
};

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1024,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.text.contrast,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.text.contrast,
    },
    info: {
      main: colors.info,
      contrastText: colors.text.contrast,
    },
    warning: {
      main: colors.warning,
      contrastText: colors.text.contrast,
    },
    error: {
      main: colors.error,
      contrastText: colors.text.contrast,
    },
    background: {
      default: colors.background.page,
      paper: colors.background.paper,
    },
    success: {
      main: colors.primary,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography: {
    h1: {
      fontWeight: typography.headers.fontWeight,
    },
    h2: {
      fontWeight: typography.headers.fontWeight,
      fontSize: typography.headers.h2.fontSize,
    },
    h3: {
      fontWeight: typography.headers.fontWeight,
      fontSize: typography.headers.h3.fontSize,
    },
    h4: {
      fontWeight: typography.headers.fontWeight,
      fontSize: typography.headers.h4.fontSize,
    },
    h5: {
      fontWeight: 700,
      fontSize: typography.headers.h5.fontSize,
    },
    body1: {
      fontSize: typography.body1.fontSize,
      lineHeight: typography.body1.lineHeight,
      letterSpacing: typography.body1.letterSpacing,
    },
    body2: {
      fontSize: typography.body2.fontSize,
      lineHeight: typography.body2.lineHeight,
      letterSpacing: typography.body2.letterSpacing,
    },
  },
});

export default theme;
