import {
  allPosts,
  type Post,
  allAlgos,
  type Algo
} from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import { MDXComponents } from '@/components/mdx';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `blog/${params.slug}`
  );

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <p>blog page</p>
      <MDXContent components={MDXComponents} />
    </div>
  );
}
