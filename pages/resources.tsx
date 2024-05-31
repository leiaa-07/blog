import { InferGetStaticPropsType } from 'next';
import { allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

import { MDXComponents } from '@/components/MDXComponents';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  const resources = allAuthors.find((p) => p.slug === 'resources');

  if (!resources) {
    return { notFound: true };
  }

  return { props: { resources } };
};

export default function Resources({ resources }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MDXLayoutRenderer layout={resources.layout || DEFAULT_LAYOUT} content={resources} MDXComponents={MDXComponents} />
  );
}
