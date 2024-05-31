// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next';
import { allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

import { MDXComponents } from '@/components/MDXComponents';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  const resources = 'resources';

  return { props: { resources } };
};

export default function About({ resources }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer content={resources} MDXComponents={MDXComponents} />;
}
