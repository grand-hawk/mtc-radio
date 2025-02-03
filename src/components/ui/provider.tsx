'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import React from 'react';

import { ColorModeProvider } from '@/components/ui/color-mode';

import type { ColorModeProviderProps } from '@/components/ui/color-mode';

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
