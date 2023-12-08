// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `content/blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
    coverImage: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    author: { type: 'string' },
    authorIcon: { type: 'string' }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}));

export const Algo = defineDocumentType(() => ({
  name: 'Algo',
  filePathPattern: `content/algo/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    id: { type: 'number', required: true },
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
    tag: { type: 'string', required: true },
    leetCode: { type: 'string', required: true },
    status: { type: 'string', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Algo],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, 'element', (node) => {
          if (node.tagName === 'code' && node.data && node.data.meta) {
            node.properties.meta = node.data.meta;
          }
        });
      }
    ]
  }
});
