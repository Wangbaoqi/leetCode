import {
  allPosts,
  type Post,
  allAlgos,
  type Algo
} from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/mdx/MDXContent';

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/')
  }));
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `blog/${slug.join('/')}`
  );

  console.log(post?._raw);

  if (!post) notFound();

  // const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className='relative mb-32 max-w-3xl mx-auto prose prose-neutral text-default-700 '>
      <div></div>

      <h1 className='text-3xl font-bold'>{post.title}</h1>

      <MDXContent code={post.body.code} />
    </article>
  );
}
