import { Skeleton as ChakraSkeleton, Circle, Stack } from '@chakra-ui/react';
import React from 'react';

import type {
  SkeletonProps as ChakraSkeletonProps,
  CircleProps,
} from '@chakra-ui/react';

export interface SkeletonCircleProps extends ChakraSkeletonProps {
  size?: CircleProps['size'];
}

export const SkeletonCircle = React.forwardRef<
  HTMLDivElement,
  SkeletonCircleProps
>(function SkeletonCircle(props, ref) {
  const { size, ...rest } = props;
  return (
    <Circle ref={ref} asChild size={size}>
      <ChakraSkeleton {...rest} />
    </Circle>
  );
});

export interface SkeletonTextProps extends ChakraSkeletonProps {
  noOfLines?: number;
}

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(props, ref) {
    const { noOfLines = 3, gap, ...rest } = props;
    return (
      <Stack ref={ref} gap={gap} width="100%">
        {Array.from({ length: noOfLines }).map((_, index) => (
          <ChakraSkeleton
            key={index}
            height="4"
            {...props}
            _last={{ maxW: '80%' }}
            {...rest}
          />
        ))}
      </Stack>
    );
  },
);

export const Skeleton = ChakraSkeleton;
