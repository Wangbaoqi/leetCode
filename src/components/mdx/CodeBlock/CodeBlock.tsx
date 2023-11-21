import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import React from 'react';
import themes from '../theme';
interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode & {
    props: {
      className?: string;
      children?: string;
      meta?: string;
    };
  };
  className?: string;
  noMargin?: boolean;
  noShadow?: boolean;
  onLineHover?: (lineNumber: number | null) => void;
}

const calculateLinesToHighlight = (raw: string) => {
  const lineNumbers = rangeParser(raw);
  if (lineNumbers) {
    return (index: number) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const copyToClipboard = (str: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log('Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Could not copy text: ', err);
      }
    );
  }
};

interface childPropsType {
  props?: any;
}

const CodeBlock = (props: CodeBlockProps) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const childProps: childPropsType = props.children || {};
  const { className = '', children = '', meta = '' } = childProps.props || {};

  const showLineNumbers = meta.match(/showLineNumber/g);
  const lightString = meta.match(/\{([^}]+)\}/g);
  const light = lightString?.[0]?.slice(1, -1);

  const code = children.trim();
  const language = className.replace(/language-/, '');
  const highlights = calculateLinesToHighlight(light ?? '');

  const blockClass = clsx(
    'bg-alt sandpack dark:bg-alt-dark rounded-2xl overflow-x-auto my-8'
  );
  const wrapperClass = clsx('w-full');
  const lineClass = clsx('ml-2 flex', showLineNumbers ? 'ml-2' : 'ml-4');
  return (
    <pre className={blockClass}>
      <div className={wrapperClass}>
        <Highlight code={code} language={language} theme={themes}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className=' text-[15px]'>
              <code className='leading-4 py-4 block text-sm'>
                {tokens.map((line, idx) => (
                  <div
                    key={idx}
                    {...getLineProps({ line })}
                    className={lineClass}
                    style={{
                      background: highlights(idx) ? '#00f5c426' : 'transparent',
                      display: 'block',
                      lineHeight: '1.375'
                    }}
                  >
                    {showLineNumbers ? (
                      <span className='inline-block text-sm w-6 text-right mr-4'>
                        {idx + 1}
                      </span>
                    ) : (
                      ''
                    )}
                    {line.map((token, id) => (
                      <span key={id} {...getTokenProps({ token, id })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </pre>
  );
};

export default CodeBlock;
