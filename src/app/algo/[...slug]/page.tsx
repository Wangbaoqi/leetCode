import NextLink from 'next/link';
import { ChevronRightLinearIcon } from '@/components/icons';
import { Button } from '@nextui-org/react';
import { clsx } from '@nextui-org/shared-utils';
import { algoRoutes } from '@/config/algoConfig';
import { AlgoList } from '@/components/algoLayout';
import Image from 'next/image';

export default function Page({ params }: { params: { slug: string[] } }) {
  const pageConf = algoRoutes.find(
    (route) => route.label === params.slug?.join('')
  );

  return (
    <>
      <section
        className='relative min-h-full flex flex-col overflow-x-hidden rounded-lg z-0'
        style={
          {
            '--context-color': `${pageConf?.color}`,
            '--context-dark-color': pageConf?.darkColor
          } as React.CSSProperties
        }
      >
        <NextLink
          href={'/algo'}
          className='relative py-4 px-6 flex justify-between'
        >
          <Button
            isIconOnly
            size='sm'
            radius='full'
            aria-label='arrow button'
            className='bg-zinc-100 dark:bg-zinc-800'
          >
            <ChevronRightLinearIcon size={15} className=' rotate-180' />
          </Button>
        </NextLink>
        <div className='flex flex-col items-center md:flex-row md:items-stretch gap-8 px-6'>
          <div className='h-52 w-52'>
            <Image
              width={208}
              height={208}
              className='object-cover rounded shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]'
              src={`${pageConf?.cover}`}
              alt={`bg_${pageConf?.label}`}
            />
          </div>
          <div className='flex flex-col justify-between'>
            <p className='flex flex-1 items-end'>{pageConf?.label}</p>
            <h1 className='font-bold text-3xl'>{pageConf?.title}</h1>
            <p className='flex flex-1 items-end'>{pageConf?.description}</p>
          </div>
        </div>

        <div className='bg-zinc-100 dark:bg-zinc-900/30 mt-6 flex-1 p-6 blur-100'>
          <AlgoList />
        </div>

        <div
          className={clsx(
            'absolute h-full w-full z-[-1] bg-gradient-to-b dark:from-algo-context-dark from-algo-context '
          )}
          style={
            {
              '--context-color': `${pageConf?.color}`,
              '--context-dark-color': pageConf?.darkColor
            } as React.CSSProperties
          }
        >
          <Image
            fill
            className='transition-all object-cover duration-500 z-[-1] mix-blend-overlay absolute inset-0 opacity-20 w-full h-full blur-md'
            src={`${pageConf?.cover}`}
            alt={`bg_${pageConf?.label}`}
          />
          <div className='absolute inset-0 bg-gradient-to-t via-transparent from-zinc-100 dark:from-zinc-900'></div>
        </div>
      </section>
    </>
  );
}
