'use client';
import React from 'react';
import NextLink from 'next/link';
import { clsx } from '@nextui-org/shared-utils';
import { dataFocusVisibleClasses } from '@nextui-org/theme';

import {
  GithubIcon,
  TwitterIcon,
  DiscordIcon,
  ShapesLinearIcon,
  SearchLinearIcon,
  AlbumsLinearIcon,
  EaselLinearIcon,
  FileTrayFullLinearIcon,
  NantIcon
} from '@/components/icons';

import {
  link,
  Link,
  Image,
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
import { useFocusRing } from '@react-aria/focus';
import { usePress } from '@react-aria/interactions';

import { ThemeSwitcher } from '@/components/ThemeSwitch';
import { Search } from '@/components';
import { siteConfig } from '@/config/site';
import { usePathname } from 'next/navigation';
import { includes } from 'lodash';

import { algoRoutes } from '@/config/algoConfig';

export const SideBar = () => {
  const { focusProps, isFocusVisible } = useFocusRing();
  const pathname = usePathname();

  const handleOpenCmd = () => {
    // cmdkStore.onOpen();
  };
  const { pressProps } = usePress({
    onPress: handleOpenCmd
  });

  const navLinkClasses = clsx(
    link({ color: 'foreground' }),
    'font-medium text-[15px]',
    'flex gap-3 font-semibold transition-all duration-300 py-1',
    'data-[active=true]:text-primary'
  );

  const handlePressNavbarItem = (name: string, url: string) => {};

  return (
    <div className='flex flex-col flex-1 gap-2'>
      <div className='bg-zinc-100 dark:bg-zinc-900 rounded-lg p-2 flex items-center justify-between'>
        <NextLink href='/' className='flex items-center gap-1'>
          <NantIcon />
          <p className='font-bold text-lg'>NANT</p>
        </NextLink>
        <div>
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
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <Search className='bg-zinc-100 dark:bg-zinc-900 w-full rounded-lg h-12' />
      </div>
      <div className='bg-zinc-100 dark:bg-zinc-900 rounded-lg p-2 py-4'>
        <NextUINavbar
          maxWidth='full'
          height={'auto'}
          className='bg-transparent [&>header]:px-3'
        >
          <NavbarContent className='flex flex-col justify-center items-start'>
            <NavbarItem>
              <NextLink
                className={navLinkClasses}
                color='foreground'
                data-active={includes(pathname, 'blog')}
                href='/blog'
                onClick={() => handlePressNavbarItem('Blog', '/blog')}
              >
                <FileTrayFullLinearIcon />
                Blog
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
                <ShapesLinearIcon />
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
                <EaselLinearIcon />
                Project
              </NextLink>
            </NavbarItem>
          </NavbarContent>
        </NextUINavbar>
      </div>
      <div className='bg-zinc-100 dark:bg-zinc-900 rounded-lg pl-2 py-2 flex-1'>
        <p className='py-2 px-3 flex items-center gap-2 font-medium text-[15px]'>
          <AlbumsLinearIcon />
          Albums
        </p>
        <ul className='pl-1'>
          {algoRoutes.map((route, idx) => (
            <li key={idx}>
              <NextLink
                className={clsx(
                  'flex group relative px-2 py-3.5 gap-2 overflow-hidden items-center dark:rounded-md  outline-none ',
                  'dark:shadow-lg hover:shadow-xl hover:bg-zinc-200 hover:dark:bg-zinc-800 '
                )}
                color='foreground'
                data-active={includes(pathname, route.label)}
                href={route.link}
                onClick={() => handlePressNavbarItem(route.label, route.link)}
              >
                <Image
                  width={48}
                  src='https://nextui-docs-v2.vercel.app/images/album-cover.png'
                  alt='NextUI Album Cover'
                />
                <div className='flex flex-col truncate flex-auto'>
                  <h4 className='font-semibold'>{route.title}</h4>
                  <p className='text-[13px] text-default-500 dark:text-default-500 truncate'>
                    {route.description}
                  </p>
                </div>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
