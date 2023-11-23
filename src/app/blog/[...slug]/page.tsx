import {
  allPosts,
  type Post,
  allAlgos,
  type Algo
} from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import { MDXComponents } from '@/components/mdx';

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/')
  }));
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `blog/${params.slug.join('/')}`
  );

  console.log(post?._raw);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <p>blog page</p>
      <MDXContent components={MDXComponents} />
    </div>
  );
}
