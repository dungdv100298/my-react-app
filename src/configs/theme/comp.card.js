import { cardAnatomy } from '@chakra-ui/anatomy';

import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const Card = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    header: {
      padding: '0px',
    },
  }),
});

export default Card;
