import React from 'react';

import { allPosts, Post } from 'contentlayer/generated';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image
} from '@nextui-org/react';
import { compareDesc, format, parseISO } from 'date-fns';
import { clsx } from '@nextui-org/shared-utils';

export default function PostCard({ post, id }: { post: Post; id: number }) {
  const postClsx = clsx('w-full flex p-2 border-1 border-default-100');

  const onClickPost = (post: Post) => {};
  return (
    <Card
      as={'a'}
      href={post.url}
      shadow='none'
      isPressable
      className={postClsx}
    >
      <CardBody>
        <div className='overflow-visible flex flex-col gap-4 justify-between items-start'>
          <div className='flex flex-col gap-2 items-start justify-start h-full'>
            <p className='text-xs bg-primary-100 px-1 rounded'>
              {post.category}
            </p>
            <h4 className='font-bold text-large text-left'>{post.title}</h4>
            <p className='text-sm line-clamp-3 leading-6'>{post.excerpt}</p>
          </div>
          <p>Read More...</p>
        </div>
      </CardBody>
    </Card>
  );
}

export const PostWrapper = () => {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-3 grid grid-cols-1 gap-4 '>
        {posts.map((post: Post, idx: number) => (
          <PostCard key={idx} post={post} id={idx} />
        ))}
      </div>
      <div className='col-span-1 sm:col'></div>
    </div>
  );
};
