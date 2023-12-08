import React from 'react';
import { IconVercel } from '@/components/icons';

export function Footer() {
  return (
    <footer className='container max-w-5.5xl mx-auto flex flex-col gap-2 px-8 pb-12 text-sm font-light sm:px-16 sm:pb-20 sm:pt-6 md:px-0 md:py-12'>
      <div className='flex items-center justify-between px-6'>
        <span className='flex items-center'>
          Deployed with <IconVercel width={20} className='mx-4' />
        </span>
        <span className='text-default-500'>
          © {new Date().getFullYear()}-present NateWang. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
