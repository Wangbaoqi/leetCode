'use client';
import React, { useState } from 'react';
import { clsx } from '@nextui-org/shared-utils';
import { includes } from 'lodash';
import { usePathname } from 'next/navigation';

import {
  link,
  Link,
  Navbar,
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
import { siteConfig } from '@/config/site';
import { ThemeSwitcher } from '@/components/ThemeSwitch';
import { Search } from '@/components';

export function AlgoNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out'
  ];

  const navLinkClasses = clsx(
    link({ color: 'foreground' }),
    'font-medium text-[15px]',
    'data-[active=true]:text-primary'
  );

  const handlePressNavbarItem = (name: string, url: string) => {};

  return (
    <Navbar height={'32px'} maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <NantIcon />
          <p className='font-bold text-inherit'>NANT</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link
            className={navLinkClasses}
            color='foreground'
            data-active={includes(pathname, 'tags')}
            href='/tags'
          >
            Tags
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={navLinkClasses}
            color='foreground'
            data-active={includes(pathname, 'algo')}
            href='/algo'
          >
            Algorithm
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={navLinkClasses}
            color='foreground'
            data-active={includes(pathname, 'project')}
            href='/project'
          >
            Project
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
