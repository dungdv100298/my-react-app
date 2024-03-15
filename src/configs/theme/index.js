import {
  defineStyle,
  extendTheme,
} from '@chakra-ui/react';
import Card from './comp.card';
import Button from './comp.button';

// commons config
const colors = {};

const fonts = {
  primary: 'Noto Sans, sans-serif',
  body: 'Noto Sans, sans-serif',
  heading: 'Noto Sans, sans-serif',
};

const breakpoints = {};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const sizes = {
  content: defineStyle({
    maxW: {
      xl: '990px',
    },
    p: 0,
  }),
};

// component config
const components = {
  Container: {
    sizes,
    defaultProps: {
      size: 'content',
    },
  },
  Card,
  Button,
};

// styles config
const styles = {};

// final theme
export default extendTheme({
  styles,
  config,
  colors,
  fonts,
  breakpoints,
  components,
});
