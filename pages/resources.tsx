import { InferGetStaticPropsType } from 'next';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { MDXComponents } from '@/components/MDXComponents';
import resourcesContent from 'data/resources.mdx';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  return { props: { resourcesContent } };
};

export default function Resources({ resourcesContent }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={DEFAULT_LAYOUT} content={resourcesContent.default} MDXComponents={MDXComponents} />;
}
