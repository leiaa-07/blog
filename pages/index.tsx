import { InferGetStaticPropsType } from 'next';
import Snowfall from 'react-snowfall';

import { formatDate } from 'pliny/utils/formatDate';
// import { NewsletterForm } from 'pliny/ui/NewsletterForm';
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';

import type { Blog } from 'contentlayer/generated';

import siteMetadata from '@/data/siteMetadata';

import Tag from '@/components/Tag';
import Link from '@/components/Link';
import Twemoji from '@/components/Twemoji';
import { PageSEO } from '@/components/SEO';
import Image from '@/components/Image';
import Greeting from '@/components/homepage/Greeting';
import PopularTags from '@/components/homepage/PopularTags';

import React, { useEffect } from 'react';
import { addComments } from '@hyvor/hyvor-talk-base';

const MAX_DISPLAY = 2;

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[];
  const posts = allCoreContent(sortedPosts);

  return { props: { posts } };
};

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
          'website-id': 11257, // Your Hyvor Talk website ID
          'page-id': '', // Unique page ID, you can change this as needed
        },
        document.getElementById('comments-container'),
        (event, data) => {
          console.log(event, data);
        }
      );
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        leave a message
      </h1>
      <div className="mt-6 border-b border-gray-200 dark:border-gray-700"></div>
      <div id="comments-container"></div>
    </div>
  );
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { headerTitle, title, description } = siteMetadata;

  return (
    <div className="relative">
      <Snowfall
        snowflakeCount={60}
        style={{
          zIndex: -1,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />

      <PageSEO title={`${title}`} description={description} />

      {/* Introduce myself */}
      <div className="mt-20 dark:divide-gray-700">
        <Greeting />
      </div>
      <p
        className="text-2xl font-medium leading-9 tracking-tight text-gray-500 dark:text-gray-400"
        style={{ marginTop: '-20px' }}
      >
        current status (4/7): pls bully me into studying 🙏🏻
      </p>

      {/* List all post */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 py-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            recent posts
          </h1>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'no posts found'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post;
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog" className="text-primary hover:text-sky-600 dark:hover:text-sky-400" aria-label="all posts">
            all posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}

      <Comments />
    </div>
  );
}
