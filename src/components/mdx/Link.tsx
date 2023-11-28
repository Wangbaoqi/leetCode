import { ExternalLink } from '../ExternalLink';
import { clsx } from '@nextui-org/shared-utils';

import InnerLink from 'next/link';
import * as Components from '@nextui-org/react';

export default function Link({
  href,
  className,
  children,
  ...props
}: JSX.IntrinsicElements['a']) {
  const classes = clsx(
    'inline-flex items-center text-success-600 dark:text-success-600 border-b',
    'border-success-600 duration-100 ease-in transition leading-normal no-underline',
    'hover:opacity-100'
  );
  if (!href) {
    return <a href={href} className={className} {...props} />;
  }

  return (
    <>
      {href.startsWith('https://') ? (
        <Components.Link
          href={href}
          isExternal
          showAnchorIcon
          className={clsx(classes, className)}
        >
          {children}
        </Components.Link>
      ) : href.startsWith('#') ? (
        <a className={clsx(classes, className)} href={href} {...props}>
          {children}
        </a>
      ) : (
        <InnerLink href={href} className={clsx(classes, className)}>
          {children}
        </InnerLink>
      )}
    </>
  );
}
