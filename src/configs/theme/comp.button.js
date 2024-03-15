import { defineStyleConfig } from '@chakra-ui/react';
const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '12px', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {},
    md: {
      h: '48px',
      w: '100%',
      boxShadow: '0px 2px 0px 0px rgba(56, 56, 67, 1)',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
  },
});

export default Button;
