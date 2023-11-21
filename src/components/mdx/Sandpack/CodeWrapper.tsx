import { memo } from 'react';
import {
  useSandpack,
  useActiveCode,
  SandpackCodeEditor,
  SandpackCodeViewer,
  // SandpackReactDevTools,
  SandpackLayout,
  SandpackPreview,
  UnstyledOpenInCodeSandboxButton
} from '@codesandbox/sandpack-react';

// import { PlayOutline } from '@nant-design/nant-icons/dist/react/PlayOutline';

interface IPresetProps {
  providedFiles: string[];
}

export const PresetWrapper = memo(function PresetWrapper({
  providedFiles
}: IPresetProps) {
  const { sandpack } = useSandpack();
  const { code } = useActiveCode();
  const { activeFile } = sandpack;

  return <CodeWrapper providedFiles={providedFiles} />;
});

export const OpenInCodeSandboxButton = () => {
  return (
    <UnstyledOpenInCodeSandboxButton
      className='text-[12px]  hover:text-primary dark:hover:text-primary-dark cursor-pointer inline-flex items-center duration-100 ease-in transition mx-1 ml-2 md:ml-1'
      title='Open in CodeSandbox'
    >
      {/* <ShareOutline /> */}
      <svg
        width='1.2em'
        height='1.2em'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='inline mx-1 relative -top-[2px]'
      >
        <path
          d='M20.5001 2H15.5001C15.3675 2 15.2403 2.05268 15.1465 2.14645C15.0528 2.24021 15.0001 2.36739 15.0001 2.5V3.5C15.0001 3.63261 15.0528 3.75979 15.1465 3.85355C15.2403 3.94732 15.3675 4 15.5001 4H18.5901L7.6501 14.94C7.60323 14.9865 7.56604 15.0418 7.54065 15.1027C7.51527 15.1636 7.5022 15.229 7.5022 15.295C7.5022 15.361 7.51527 15.4264 7.54065 15.4873C7.56604 15.5482 7.60323 15.6035 7.6501 15.65L8.3501 16.35C8.39658 16.3969 8.45188 16.4341 8.51281 16.4594C8.57374 16.4848 8.63909 16.4979 8.7051 16.4979C8.7711 16.4979 8.83646 16.4848 8.89738 16.4594C8.95831 16.4341 9.01362 16.3969 9.0601 16.35L20.0001 5.41V8.5C20.0001 8.63261 20.0528 8.75979 20.1465 8.85355C20.2403 8.94732 20.3675 9 20.5001 9H21.5001C21.6327 9 21.7599 8.94732 21.8537 8.85355C21.9474 8.75979 22.0001 8.63261 22.0001 8.5V3.5C22.0001 3.10218 21.8421 2.72064 21.5608 2.43934C21.2795 2.15804 20.8979 2 20.5001 2V2Z'
          fill='currentColor'
        ></path>
        <path
          d='M21.5 13H20.5C20.3674 13 20.2402 13.0527 20.1464 13.1464C20.0527 13.2402 20 13.3674 20 13.5V20H4V4H10.5C10.6326 4 10.7598 3.94732 10.8536 3.85355C10.9473 3.75979 11 3.63261 11 3.5V2.5C11 2.36739 10.9473 2.24021 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V13.5C22 13.3674 21.9473 13.2402 21.8536 13.1464C21.7598 13.0527 21.6326 13 21.5 13Z'
          fill='currentColor'
        ></path>
      </svg>
    </UnstyledOpenInCodeSandboxButton>
  );
};

const CodeWrapper = memo(function CodeWrapper({
  providedFiles
}: {
  providedFiles: Array<string>;
}) {
  const { sandpack } = useSandpack();
  // const { files, activeFile } = sandpack;

  return (
    <div className='rounded-lg overflow-hidden dark:border-2 border-wash dark:border-gray-80 shadow-lg'>
      <div className='flex justify-between items-center h-9 border-b border-divider dark:border-divider-dark px-2 dark:bg-gray-80 bg-alt text-secondary dark:text-secondary-dark'>
        <div className='font-bold flex items-center font-mono gap-2'>
          {/* <PlayOutline /> */}
          CodePlayground
        </div>
        <OpenInCodeSandboxButton />
      </div>
      <SandpackLayout>
        <div className='flex-1 max-h-[500px] min-h-[450px] flex flex-col'>
          <div className='overflow-y-auto h-full flex-1'>
            <SandpackCodeEditor showLineNumbers showTabs={false} />
          </div>
        </div>
        <div className='lg:w-82 w-full max-h-[500px] flex flex-col bg-alt dark:bg-alt-dark'>
          <div className='overflow-y-auto h-full p-2 rounded flex-1'>
            <SandpackPreview
              showRefreshButton={false}
              showOpenInCodeSandbox={false}
            />
          </div>
          {/* <div className="h-10 "></div> */}
        </div>
      </SandpackLayout>
    </div>
  );
});
