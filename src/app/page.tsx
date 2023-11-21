import Image from 'next/image';
import { allPosts, Post, allAlgos, Algo } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { MDXComponents } from '@/components/mdx';

function PostCard(post: Post | Algo) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className='mb-8'>
      <h2 className='text-xl'>
        <Link
          href={post.url}
          className='text-blue-700 hover:text-blue-900'
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className='block mb-2 text-xs text-gray-600'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className='text-sm'>
        <MDXContent components={MDXComponents} />
      </div>
    </div>
  );
}

export default function Home() {
  console.log([...allPosts, ...allAlgos], 'allPosts');
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className='max-w-xl py-8 mx-auto'>
      <h1 className='mb-8 text-3xl font-bold text-center'>Next.js Example</h1>

      {posts.map((post: Post, idx: number) => (
        <PostCard key={idx} {...post} />
      ))}

      {allAlgos.map((post: Algo, idx: number) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
