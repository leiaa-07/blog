import { InferGetStaticPropsType } from 'next';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { MDXComponents } from '@/components/MDXComponents';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  return { props: { resources: 'resources' } };
};

export default function Resources({ resources }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={DEFAULT_LAYOUT} content={resources} MDXComponents={MDXComponents} />;
}
