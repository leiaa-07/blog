import { InferGetStaticPropsType } from 'next';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { MDXComponents } from '@/components/MDXComponents';
import resources from 'data/resources.mdx';

const DEFAULT_LAYOUT = 'Resources';

export const getStaticProps = async () => {
  // Since 'resources' is an MDX file, we should ensure it's loaded correctly
  return { props: { content: resources } };
};

export default function Resources({ content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={DEFAULT_LAYOUT} content={content} MDXComponents={MDXComponents} />;
}
