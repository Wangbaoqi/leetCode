import {
  allPosts,
  type Post,
  allAlgos,
  type Algo
} from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/mdx/MDXContent';
import { getHeadings } from '@/lib/docs/utils';
import { clsx } from '@nextui-org/shared-utils';
import { Toc } from '@/components/blogLayout';
import NextLink from 'next/link';
import { FeatureBlogCard } from '@/components/homeLayout/FeatureBlogCard';

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  console.log(slug, 'slug');

  const posts = allPosts.filter(
    (post) => post.category.toLowerCase() === slug.toLowerCase()
  );

  if (!posts) notFound();

  return (
    <div className='max-w-5.5xl mx-auto px-6'>
      <h3 className='text-3xl font-medium m-12 flex justify-center'>
        {slug.toUpperCase()}
      </h3>
      <section className='flex flex-wrap justify-start gap-6'>
        {posts.map((post, idx) => (
          <NextLink
            key={idx}
            href={post.url}
            className='group block w-[95%] focus:outline-none sm:w-[330px] xl:w-[333px]'
          >
            <FeatureBlogCard blog={post} />
          </NextLink>
        ))}
      </section>
    </div>
  );
}
