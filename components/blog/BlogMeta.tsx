import { formatDate } from 'pliny/utils/formatDate';

import type { BlogMetaProps } from '@/types/index';

import { Twemoji } from '../Twemoji';
import ViewCounter from './ViewCounter';

const BlogMeta = ({ date, slug, readingTime }: BlogMetaProps) => {
  return (
    <dd className="flex-column flex gap-1 font-semibold text-gray-500 dark:text-gray-400">
      <time dateTime={date} className="flex items-center">
        📆
        <span className="ml-1 md:ml-2">{formatDate(date)}</span>
      </time>
      <span className="mx-2">{` • `}</span>
      <div className="flex items-center">
        ⏳<span className="ml-1.5 md:ml-2">{Math.ceil(0.5 * readingTime.minutes)} mins read</span>
      </div>
    </dd>
  );
};

export default BlogMeta;
