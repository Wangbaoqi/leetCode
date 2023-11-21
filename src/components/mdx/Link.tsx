import { ExternalLink } from '../ExternalLink';
import clsx from 'clsx';

import InnerLink from 'next/link';

export default function Link({
  href,
  className,
  children,
  ...props
}: JSX.IntrinsicElements['a']) {
  const classes =
    'inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal';

  if (!href) {
    return <a href={href} className={className} {...props} />;
  }

  return (
    <>
      {href.startsWith('https://') ? (
        <ExternalLink
          href={href}
          className={clsx(classes, className)}
          {...props}
        >
          {children}
        </ExternalLink>
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
