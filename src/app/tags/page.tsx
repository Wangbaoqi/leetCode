import { PostWrapper } from '@/components/blogLayout';
import React, { Suspense } from 'react';
import { allPosts, Post } from 'contentlayer/generated';
import { Chip } from '@nextui-org/react';
import NextLink from 'next/link';
import { DifficultyBadge } from '@/components/homeLayout/CategoryBadge';
export default function Home() {
  const allTags = [...new Set(allPosts.map((post) => post.category))];

  console.log(allTags);

  return (
    <div className='max-w-5.5xl mx-auto px-4 py-12'>
      <div className='flex flex-wrap justify-center gap-3'>
        {allTags.map((tag) => (
          <NextLink href={`/tags/${tag}`} key={tag}>
            <DifficultyBadge
              className='font-semibold'
              size='md'
              category={tag}
            />
          </NextLink>
        ))}
      </div>
    </div>
  );
}
