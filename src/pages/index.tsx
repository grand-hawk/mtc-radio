import fs from 'fs/promises';

import { Group, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { parse as parseCsv } from 'csv/sync';
import React from 'react';
import { MdEdit } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { ColorModeButton } from '@/components/ui/color-mode';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async () => {
  const file = await fs.readFile('data/radio.csv', 'utf-8');
  const data = parseCsv(file) as Array<[string, string, string]>;
  data.shift();

  return {
    props: {
      data: data
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([frequency, name, link]) => [
          Number(frequency).toFixed(1),
          name,
          link,
        ]),
    },
  };
}) satisfies GetStaticProps;

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Stack gap={1}>
      <Stack
        alignItems="center"
        direction="row"
        gap={2}
        justifyContent="space-between"
        marginBottom={2}
      >
        <Heading as="h1" fontSize="2xl">
          MTC Radio Frequencies
        </Heading>

        <Group>
          <Button as="a" asChild size="sm" variant="ghost">
            <a href="https://github.com/grand-hawk/mtc-radio/blob/main/data/radio.csv">
              Edit this list <MdEdit />
            </a>
          </Button>

          <ColorModeButton size="sm" />
        </Group>
      </Stack>

      {data.map(([frequency, name, link], index) => (
        <Stack key={index} direction="row" fontSize="lg" gap={2}>
          <Text fontWeight="medium" minWidth="50px" textAlign="right">
            {frequency}
          </Text>
          {link.length > 0 ? (
            <Link
              colorPalette="accent"
              display="unset"
              href={link}
              textDecorationColor="pink.600"
              textDecorationSkip="edges trailing-spaces"
              variant="underline"
            >
              {name}
            </Link>
          ) : (
            <Text>{name}</Text>
          )}
        </Stack>
      ))}
    </Stack>
  );
}
