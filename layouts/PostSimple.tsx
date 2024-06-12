import { CoreContent } from 'pliny/utils/contentlayer';

import type { Blog } from 'contentlayer/generated';

import siteMetadata from '@/data/siteMetadata';
import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import { BlogSEO } from '@/components/SEO';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import BlogMeta from '@/components/blog/BlogMeta';
import BlogTags from '@/components/blog/BlogTags';

import React, { useEffect, ReactNode } from 'react';
import { addComments } from '@hyvor/hyvor-talk-base';

function Comments() {
  useEffect(() => {
    console.log('Comments component rendered');
    const script = document.createElement('script');
    script.src = 'https://talk.hyvor.com/embed/embed.js';
    script.async = true;
    script.type = 'module';
    document.head.appendChild(script);

    script.onload = () => {
      addComments(
        {
          'website-id': 11281, // Your Hyvor Talk website ID
          'page-id': '', // Unique page ID, you can change this as needed
        },
        document.getElementById('comments-container'),
        (event, data) => {
          console.log(event, data);
        }
      );
    };
  }, []);
  
  return <div id="comments-container"></div>;
}

interface LayoutProps {
  content: CoreContent<Blog>;
  children: ReactNode;
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, tags, readingTime } = content;

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${path}`} {...content} />

      <ScrollTopAndComment />

      <article>
        <div>
          <header>
            <div className="dark:border-gray space-y-1 border-b border-gray-200 pb-10">
              <div className="space-y-6">
                <PageTitle>{title}</PageTitle>
                <BlogTags tags={tags} />
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <BlogMeta date={date} slug={slug} readingTime={readingTime} />
                  </div>
                </dl>
              </div>
            </div>
          </header>

          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>
            </div>

            <div><Comments /></div>

            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary hover:text-sky-600 dark:hover:text-sky-400"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.path}`}
                      className="text-primary hover:text-sky-600 dark:hover:text-sky-400"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
