'use client';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
// import clsx from 'clsx';
import { isAppleDevice } from '@react-aria/utils';
import { clsx } from '@nextui-org/shared-utils';
import {
  link,
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Kbd
} from '@nextui-org/react';

import {
  GithubIcon,
  TwitterIcon,
  DiscordIcon,
  SearchLinearIcon,
  NantIcon
} from '@/components/icons';

import { ThemeSwitcher } from '@/components/ThemeSwitch';
import { siteConfig } from '@/config/site';
import { Search } from '@/components';
import { usePathname } from 'next/navigation';
import { useIsMounted } from '@/hooks/useIsMount';
import { includes } from 'lodash';

export const NavBar = () => {
  const pathname = usePathname();

  const navLinkClasses = clsx(
    link({ color: 'foreground' }),
    'font-medium text-[15px]',
    'data-[active=true]:text-primary'
  );

  const handlePressNavbarItem = (name: string, url: string) => {};

  return (
    <NextUINavbar
      maxWidth='lg'
      position='sticky'
      className='[&>header]:max-w-5.5xl'
    >
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-1 max-w-fit mr-4'>
          <NextLink href='/' className='flex items-center gap-1'>
            <NantIcon />
            <p className='font-bold text-lg'>NANT</p>
          </NextLink>
        </NavbarBrand>
        <ul className='hidden lg:flex gap-5 justify-start items-center'>
          <NavbarItem>
            <NextLink
              className={navLinkClasses}
              color='foreground'
              data-active={includes(pathname, 'tags')}
              href='/tags'
              onClick={() => handlePressNavbarItem('Tag', '/tags')}
            >
              Tags
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={navLinkClasses}
              color='foreground'
              data-active={includes(pathname, 'algo')}
              href='/algo'
              onClick={() => handlePressNavbarItem('Algorithm', '/algo')}
            >
              Algorithm
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <NextLink
              className={navLinkClasses}
              color='foreground'
              data-active={includes(pathname, 'project')}
              href='/project'
              onClick={() => handlePressNavbarItem('project', '/project')}
            >
              Project
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent className='flex w-full gap-2 sm:hidden' justify='end'>
        <NavbarItem className='flex h-full items-center'>
          <Link
            isExternal
            aria-label='Github'
            className='p-1'
            href='https://github.com/nextui-org/nextui'
            onClick={() =>
              handlePressNavbarItem(
                'Github',
                'https://github.com/nextui-org/nextui'
              )
            }
          >
            <GithubIcon className='text-default-600 dark:text-default-500' />
          </Link>
        </NavbarItem>
        <NavbarItem className='flex h-full items-center'>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className='flex h-full items-center'></NavbarItem>
        <NavbarItem className='w-10 h-full'>
          <NavbarMenuToggle
            aria-label={false ? 'Close menu' : 'Open menu'}
            className='w-full h-full pt-1'
          />
        </NavbarItem>
      </NavbarContent>

      {/* mobile show */}
      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex'>
          <Link
            isExternal
            aria-label='Twitter'
            className='p-1'
            href={siteConfig.links.twitter}
            onPress={() =>
              handlePressNavbarItem('Twitter', siteConfig.links.twitter)
            }
          >
            <TwitterIcon className='text-default-600 dark:text-default-500' />
          </Link>
          <Link
            isExternal
            aria-label='Discord'
            className='p-1'
            href={siteConfig.links.discord}
            onPress={() =>
              handlePressNavbarItem('Discord', siteConfig.links.discord)
            }
          >
            <DiscordIcon className='text-default-600 dark:text-default-500' />
          </Link>
          <Link
            isExternal
            aria-label='Github'
            className='p-1'
            href={siteConfig.links.github}
            onPress={() =>
              handlePressNavbarItem('Github', siteConfig.links.github)
            }
          >
            <GithubIcon className='text-default-600 dark:text-default-500' />
          </Link>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Search />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
