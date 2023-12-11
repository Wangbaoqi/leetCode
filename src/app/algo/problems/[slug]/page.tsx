import React from 'react';
import { allAlgos, type Algo } from 'contentlayer/generated';

import { Layout } from '@/components/problemLayout';
interface ProblemProps {
  params: {
    slug: string;
  };
}
export default function ProblemPage({ params: { slug } }: ProblemProps) {
  console.log(slug, allAlgos, 'problem');

  const post = allAlgos.find(
    (algo) => algo._raw.flattenedPath === `algo/problems/${slug}`
  );

  return (
    <div className='relative flex flex-col'>
      <Layout post={post} />
    </div>
  );
}
