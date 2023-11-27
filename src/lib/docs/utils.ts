import { marked, Token } from 'marked';
import Slugger from 'github-slugger';

export type Heading = { level: number; text: string; id: string };

const slugger = new Slugger();

export function getHeadings(markdownText: string | undefined): Heading[] {
  let headings: Heading[] = [];

  if (!markdownText) {
    return headings;
  }

  slugger.reset();
  const tokens = marked.lexer(markdownText);

  tokens.forEach((token) => {
    if (token.type === 'heading') {
      headings.push({
        level: token.depth,
        text: token.text,
        id: slugger.slug(token.text)
      });
    }
  });

  return headings;
}
