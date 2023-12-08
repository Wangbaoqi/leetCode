// 'use client';
import React from 'react';
import NextLink from 'next/link';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image
} from '@nextui-org/react';
import { allPosts, Post } from 'contentlayer/generated';
import { algoRoutes } from '@/config/algoConfig';

export function AlgoDataCard() {
  const allDataPost = allPosts.filter((post) => post.category === 'Structure');

  return (
    <div className='grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6'>
      {allDataPost.map((route, idx) => (
        <NextLink
          href={route.url || '/'}
          key={idx}
          className='group relative transition-all duration-300'
        >
          <Card isHoverable isBlurred>
            <CardBody>
              <div className='flex gap-3 items-start'>
                <Image
                  src={route.coverImage}
                  width={200}
                  height={200}
                  alt={route.title}
                  className='rounded-lg'
                />
                <div className='flex flex-col gap-2 justify-between'>
                  <h3 className='text-base font-medium'>{route.title}</h3>
                  <p className='text-[13px] text-default-500 dark:text-default-500 line-clamp-2'>
                    {route.excerpt}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </NextLink>
      ))}
    </div>
  );
}
