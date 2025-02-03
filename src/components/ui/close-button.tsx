import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import React from 'react';
import { LuX } from 'react-icons/lu';

import type { ButtonProps } from '@chakra-ui/react';

export type CloseButtonProps = ButtonProps;

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  return (
    <ChakraIconButton ref={ref} aria-label="Close" variant="ghost" {...props}>
      {props.children ?? <LuX />}
    </ChakraIconButton>
  );
});
