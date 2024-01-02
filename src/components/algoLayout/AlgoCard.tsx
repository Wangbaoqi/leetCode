'use client';
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
import { algoList } from '@/config/algoConfig';

export function AlgoCard() {
  const allAlgoPosts = allPosts.filter((post) => post.category === 'Algorithm');
  return (
    <div className='grid gap-y-5 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-6'>
      {allAlgoPosts.map((route, idx) => (
        <NextLink href={route.url} key={idx}>
          <Card shadow='sm' key={idx} isPressable isHoverable fullWidth>
            <CardHeader className='pb-0 pt-2 px-4 flex-col gap-1 items-start'>
              <p className='text-tiny uppercase font-bold'>Daily Mix</p>
              <h4 className='font-bold text-lg truncate'>{route.title}</h4>
              <p className='text-[13px] text-default-500 dark:text-default-500 line-clamp-1 text-left'>
                {route.excerpt}
              </p>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-cover w-full h-[150px] rounded-xl'
                src={route.coverImage}
                width={'100%'}
                // height={200}
              />
            </CardBody>
          </Card>
        </NextLink>
      ))}
    </div>
  );
}
