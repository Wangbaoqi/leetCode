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

import { algoRoutes } from '@/config/algoConfig';

export function AlgoDataCard() {
  return (
    <div className='grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6'>
      {algoRoutes.map((route, idx) => (
        <NextLink
          href={route.link || '/'}
          key={idx}
          className='group relative transition-all duration-300'
        >
          <Card isHoverable isBlurred>
            <CardBody>
              <div className='flex gap-3 items-start'>
                <Image
                  src={route.cover}
                  width={100}
                  height={100}
                  alt={route.label}
                  className='rounded-lg'
                />
                <div>
                  <h3 className='text-base font-medium'>{route.title}</h3>
                  <p className='text-[13px] text-default-500 dark:text-default-500 line-clamp-2'>
                    {route.description}
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
