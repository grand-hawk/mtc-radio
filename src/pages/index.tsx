import fs from 'fs/promises';

import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import { parse as parseCsv } from 'csv/sync';
import React from 'react';
import { LuExternalLink } from 'react-icons/lu';

import { ColorModeButton } from '@/components/ui/color-mode';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async () => {
  const file = await fs.readFile('data/radio.csv', 'utf-8');
  const data = parseCsv(file) as Array<[string, string, string]>;
  data.shift();

  return { props: { data } };
}) satisfies GetStaticProps;

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Stack gap={1}>
      <Stack direction="row" gap={2} justifyContent="space-between">
        <Heading as="h1" fontSize="2xl">
          MTC Radio Frequencies
        </Heading>

        <ColorModeButton />
      </Stack>

      {data.map(([frequency, name, link], index) => (
        <Stack key={index} direction="row" fontSize="lg" gap={2}>
          <Text fontWeight="medium" minWidth="50px" textAlign="right">
            {Number(frequency).toFixed(1)}
          </Text>
          {link.length > 0 ? (
            <Link
              colorPalette="accent"
              href={link}
              textDecorationColor="pink.600"
              variant="underline"
            >
              {name} <LuExternalLink />
            </Link>
          ) : (
            <Text>{name}</Text>
          )}
        </Stack>
      ))}
    </Stack>
  );
}
