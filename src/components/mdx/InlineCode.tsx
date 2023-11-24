import cn from 'clsx';

interface InlineCodeProps {
  isLink: boolean;
}
function InlineCode({
  isLink,
  ...props
}: JSX.IntrinsicElements['code'] & InlineCodeProps) {
  return (
    <code
      className={cn(
        'inline mx-[3px] px-1.5 rounded no-underline text-sm bg-default-400/20 dark:bg-default-500/20',
        {
          'bg-gray-30 bg-opacity-10 py-[3px]': !isLink,
          'bg-highlight dark:bg-highlight-dark py-0': isLink
        }
      )}
      {...props}
    />
  );
}

export default InlineCode;
