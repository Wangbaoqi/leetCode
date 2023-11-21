import InlineCode from './InlineCode';
import CodeBlock from './CodeBlock';
import { Intro } from './Intro';
// import WrapperMdx from './Wrapper';
import ConsoleBlock from './ConsoleBlock';
import ExpandableCallout from './ExpandableCallout';
import TerminalBlock from './TerminalBlock';
import clsx from 'clsx';
import Link from './Link';
import Sandpack from './Sandpack';
import type { MDXComponents as MDXComponentType } from 'mdx/types';

const H1 = (p: JSX.IntrinsicElements['h1']) => (
  <h1 className='text-3xl font-display font-bold leading-tight' {...p} />
);

const H2 = (p: JSX.IntrinsicElements['h2']) => (
  <h2 className='text-2xl font-display font-bold leading-tight' {...p} />
);

const H3 = (p: JSX.IntrinsicElements['h3']) => (
  <h2 className='text-xl font-display font-bold leading-tight' {...p} />
);

const H4 = (p: JSX.IntrinsicElements['h4']) => (
  <h2 className='text-lg font-display font-bold leading-tight' {...p} />
);

const P = (p: JSX.IntrinsicElements['p']) => (
  <p className='whitespace-pre-wrap leading-7 my-4' {...p} />
);
const Strong = (strong: JSX.IntrinsicElements['strong']) => (
  <strong className='font-bold' {...strong} />
);

const OL = (p: JSX.IntrinsicElements['ol']) => (
  <ol className='ml-6 my-3 list-decimal' {...p} />
);
const LI = (p: JSX.IntrinsicElements['li']) => (
  <li className='leading-relaxed mb-1' {...p} />
);
const UL = (p: JSX.IntrinsicElements['ul']) => (
  <ul className='ml-6 my-3 list-disc' {...p} />
);
const Divider = () => (
  <hr className='my-6 block border-b border-t-0 border-border dark:border-border-dark' />
);
const Blockquote = ({
  children,
  ...props
}: JSX.IntrinsicElements['blockquote']) => {
  return (
    <blockquote
      className='py-4 px-8 my-8 bg-highlight dark:bg-highlight-dark bg-opacity-50 rounded-2xl leading-6 flex relative'
      {...props}
    >
      <span className='block relative'>{children}</span>
    </blockquote>
  );
};

const Note = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type='note'>{children}</ExpandableCallout>
);
const Wip = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type='wip'>{children}</ExpandableCallout>
);
const Pitfall = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type='pitfall'>{children}</ExpandableCallout>
);
const Deprecated = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type='deprecated'>{children}</ExpandableCallout>
);

function Image(props: any) {
  return <img className='max-w-[calc(min(700px,100%))]' {...props} />;
}

function CodeStep({ children, step }: { children: any; step: number }) {
  return (
    <span
      data-step={step}
      className={clsx(
        'code-step bg-opacity-10 dark:bg-opacity-20 relative rounded px-[6px] py-[1.5px] border-b-[2px] border-opacity-60',
        {
          'bg-blue-40 border-blue-40 text-blue-60 dark:text-blue-30':
            step === 1,
          'bg-yellow-40 border-yellow-40 text-yellow-60 dark:text-yellow-30':
            step === 2,
          'bg-purple-40 border-purple-40 text-purple-60 dark:text-purple-30':
            step === 3,
          'bg-green-40 border-green-40 text-green-60 dark:text-green-30':
            step === 4
        }
      )}
    >
      {children}
    </span>
  );
}

export const MDXComponents = {
  // wrapper: WrapperMdx,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  strong: Strong,
  ol: OL,
  li: LI,
  ul: UL,
  // pre: Pre,
  pre: CodeBlock,
  code: InlineCode,
  hr: Divider,
  img: Image,
  a: Link,
  Intro,
  ConsoleBlock,
  Note,
  Wip,
  Pitfall,
  Deprecated,
  TerminalBlock,
  CodeStep,
  Sandpack
};
