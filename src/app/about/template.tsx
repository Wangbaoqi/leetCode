import React from 'react';

export default function BlogTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className='tmp'>{children}</div>;
}
