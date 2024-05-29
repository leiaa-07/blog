// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next';
import { allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

import { MDXComponents } from '@/components/MDXComponents';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'default');

  return { props: { author } };
};

export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
   return (
    <MDXLayoutRenderer
      layout={resources.layout || DEFAULT_LAYOUT}
      content={Resources}
      MDXComponents={MDXComponents}
    />
  );
}
