import React, { useEffect, useRef, useState } from 'react';

import { HashLinearIcon } from '@/components/icons';
import { Link } from '@nextui-org/react';

type VisualProps = {
  id?: string;
  children?: React.ReactNode;
};

export const virtualAnchorEncode = (text?: string) => {
  if (!text) return undefined;

  return text.toLowerCase().replace(/ /g, '-');
};

export const VirtualAnchor: React.FC<VisualProps> = ({ id, children }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [anchorId, setAnchorId] = useState<string | undefined>(id);
  useEffect(() => {
    if (!id || !ref.current) return;
    setAnchorId(ref.current?.textContent || undefined);
  }, [id, children]);

  return (
    <Link
      className='relative w-fit flex items-center gap-1 group text-inherit'
      ref={ref}
      href={`#${id || anchorId}`}
    >
      {children}
      <span className='opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-primary '>
        <HashLinearIcon size={20} />
      </span>
    </Link>
  );
};
