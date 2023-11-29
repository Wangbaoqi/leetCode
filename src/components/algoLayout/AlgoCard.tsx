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

import { algoList } from '@/config/algoConfig';

export function AlgoCard() {
  return (
    <div className='grid gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 my-6'>
      {algoList.map((route, idx) => (
        <NextLink href={'/'} key={idx}>
          <Card shadow='sm' key={idx} isPressable isHoverable fullWidth>
            <CardBody className='overflow-visible p-0'>
              <Image
                shadow='sm'
                radius='lg'
                width='100%'
                alt={route.label}
                className='w-full object-cover h-[150px]'
                src={route.cover}
              />
            </CardBody>
            <CardFooter className='text-small flex flex-col gap-2 items-start justify-start'>
              <h2 className='text-base'>{route.title}</h2>
              <p className='text-[13px] text-default-500 dark:text-default-500 line-clamp-1 text-left'>
                {route.description}
              </p>
            </CardFooter>
          </Card>
        </NextLink>
      ))}
    </div>
  );
}
