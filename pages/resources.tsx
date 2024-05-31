import { InferGetStaticPropsType } from 'next';
import { allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

import { MDXComponents } from '@/components/MDXComponents';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  const resources = { layout: 'resources' }; // Create an object with a layout property

  return { props: { resources } };
};

export default function About({ resources }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MDXLayoutRenderer layout={resources.layout || DEFAULT_LAYOUT} content={resources} MDXComponents={MDXComponents} />
  );
}
