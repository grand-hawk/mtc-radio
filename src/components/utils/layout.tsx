import { Box } from '@chakra-ui/react';
import React from 'react';

import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box
      display="flex"
      height="max-content"
      justifyContent="center"
      minHeight="100svh"
      width="100%"
    >
      <Box maxWidth="600px" paddingX={4} paddingY={6} width="100%">
        {children}
      </Box>
    </Box>
  );
}
