// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next';
import { allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

import { MDXComponents } from '@/components/MDXComponents';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  const resources = allAuthors.find((p) => p.slug === 'resources');

  return { props: { resources } };
};

export default function Resources({ resources }) {
  return <MDXLayoutRenderer layout={resources.layout || DEFAULT_LAYOUT} content={resources} MDXComponents={MDXComponents} />;
}
