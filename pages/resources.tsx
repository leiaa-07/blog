// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next';
import { allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

import { MDXComponents } from '@/components/MDXComponents';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'resources');

  return { props: { author } };
};

export default function Resources({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={author.layout || DEFAULT_LAYOUT} content={author} MDXComponents={MDXComponents} />;
}
