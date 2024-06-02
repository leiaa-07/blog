import { InferGetStaticPropsType } from 'next';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { MDXComponents } from '@/components/MDXComponents';
import resources from 'data/resources.mdx';
import { allAuthors } from 'contentlayer/generated';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  const resources = allAuthors.find((p) => p.slug === 'resources');
  return { props: { resources } };
};

export default function Resources({ resources }: InferGetStaticPropsType<typeof getStaticProps>) {
  return;
  <MDXLayoutRenderer layout={resources.layout || DEFAULT_LAYOUT} content={resources} MDXComponents={MDXComponents} />;
}
