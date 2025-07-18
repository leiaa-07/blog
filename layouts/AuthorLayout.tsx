import { ReactNode } from 'react';
import Link from 'next/link';
import type { Authors } from 'contentlayer/generated';

import siteMetadata from '@/data/siteMetadata';
import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, year, school, uni, imo, email, twitter, linkedin, github } = content;

  const { title, headerTitle } = siteMetadata;

  return (
    <>
      <PageSEO title={`about me - ${title}`} description="hallo wassup" />

      <div className="about divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            about me
          </h1>
        </div>

        <div className="items-start space-y-2 md:grid md:grid-cols-3 md:gap-x-8 md:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-4 sm:pt-20">
            <Image src={avatar} alt="avatar" width={192} height={192} className="h-48 w-48 rounded-full" />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{year}</div>
            <div className="text-gray-500 dark:text-gray-400">{school}</div>
            <div className="text-gray-500 dark:text-gray-400">{uni}</div>
            <div className="text-gray-500 dark:text-gray-400">{imo}</div>
          </div>

          <div className="prose max-w-none pb-8 dark:prose-dark md:col-span-2">{children}</div>
        </div>
      </div>
    </>
  );
}
