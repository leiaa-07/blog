import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { MDXComponents } from '@/components/MDXComponents';
import resources from 'data/resources.mdx';

const DEFAULT_LAYOUT = 'Resources';

export default function Resources() {
  return <MDXLayoutRenderer layout={DEFAULT_LAYOUT} content={resources} MDXComponents={MDXComponents} />;
}
