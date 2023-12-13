import React from 'react';
import { allAlgos, type Algo } from 'contentlayer/generated';
import fg from 'fast-glob';
import fse from 'fs-extra';

import { Layout } from '@/components/problemLayout';

interface ProblemProps {
  params: {
    slug: string;
  };
}

const { readFileSync } = fse;

export default async function ProblemPage({ params: { slug } }: ProblemProps) {
  console.log(slug, allAlgos, 'problem');

  const post = allAlgos.find(
    (algo) => algo._raw.flattenedPath === `algo/problems/${slug}`
  );

  const sourceCode = readFileSync(
    `${process.cwd()}/content/algo/problems/${slug}/code.ts`,
    'utf-8'
  );

  const testCode = readFileSync(
    `${process.cwd()}/content/algo/problems/${slug}/code.test.ts`,
    'utf-8'
  );

  const codeSnippet = {
    code: sourceCode,
    testCode: testCode
  };

  return (
    <div className='relative flex flex-col'>
      <Layout post={post} code={codeSnippet} />
    </div>
  );
}
