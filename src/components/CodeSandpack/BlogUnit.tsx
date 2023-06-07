import React from 'react';
import styled from 'styled-components';
import {
  useActiveCode,
  SandpackPreview,
  SandpackTests,
  SandpackFileExplorer
} from '@codesandbox/sandpack-react';

import { clamp } from '@site/src/utils';
import { fadeIn } from './animation.helpers';
import useIsOnscreen from './hooks/useIsOnscreen';
import Space from './Tools/Space';

import { COLORS } from './constants';
import CodeEditorContext from './CodeEditorContext';
import Toolbar from './Toolbar';
import CodeEditor from './CodeEditor';
import ResultHeader from './ResultHeader';
import { CodeEditorProvider } from './CodeEditorContext';
import Console from './Console';
import { SPLIT_BREAKPOINT } from './constants';

function BlogUnit({
  id,
  title,
  preset,
  isFullscreened,
  toggleFullscreen,
  showLineNumbers,
  resultTabs,
  activeResultTab,
  handleSelectResultTab,
  minPreviewHeight,
  minEditorHeight = 190,
  maxEditorHeight = 625,
  isLazy,
  showplayground,
}) {
  const [isRenderingPreview, setIsRenderingPreview] = React.useState(
    !isLazy
  );
  const [editorKey, setEditorKey] = React.useState('initial');

  const editorWrapperHeight = useEditorWrapperHeight(
    minEditorHeight,
    maxEditorHeight
  );

  const wrapperRef = React.useRef();

  const isOnscreen = useIsOnscreen(wrapperRef);

  React.useEffect(() => {
    // Ignore eager sandboxes
    if (!isLazy) {
      return;
    }

    // If it's already shown, our work is done
    if (isRenderingPreview) {
      return;
    }

    // Start rendering the preview the moment the editor enters
    // the viewport.
    if (isOnscreen) {
      setIsRenderingPreview(true);
    }
  }, [isRenderingPreview, isLazy, isOnscreen]);

  return (
    <CodeEditorProvider
      id={id}
      showLineNumbers={showLineNumbers}
      editorKey={editorKey}
    >
      <InnerWrapper ref={wrapperRef}>
        <Toolbar
          id={id}
          title={title}
          isFullscreened={isFullscreened}
          handleToggleFullscreen={toggleFullscreen}
          setEditorKey={setEditorKey}
        />
        <CodeLayoutWrapper showplayground={showplayground}>
          {
            showplayground ? 
            <SandpackFileExplorer /> : null
          }
          

          <CodeEditorWrapper style={{
            height: editorWrapperHeight,
            minHeight: showplayground ? 'calc(100vh - 5.75rem)' : '',
            flex: showplayground ? `1`: '0',
            borderLeft: showplayground ? `1px solid var(--color-gray-100)`: '0',
            borderRight: showplayground ? `1px solid var(--color-gray-100)`: '0'
          }}>
            <CodeEditor
              key={editorKey}
              showLineNumbers={showLineNumbers}
            />
          </CodeEditorWrapper>
          <ResultOuterWrapper>
            <ResultHeader
              tabs={resultTabs}
              activeTab={activeResultTab}
              handleSelectTab={handleSelectResultTab}
            />
            <ResultWrapper
              style={{
                '--height':
                  showplayground ? 'calc(100vh - 8rem)' :
                    typeof minPreviewHeight === 'number'
                      ? minPreviewHeight + 'px'
                      : minPreviewHeight,
              }}
            >
              <RoundedCorners>
                {
                  (
                    preset === 'testTs' || 
                    preset === 'tsAlgo'
                  ) && (
                    <SandpackTests />
                  )
                }

                {isRenderingPreview && (
                  <SandpackPreview
                    showNavigator={false}
                    showOpenInCodeSandbox={false}
                    showRefreshButton={false}
                  />
                )}

                <ConsoleWrapper
                  style={{
                    '--pointer-events':
                      activeResultTab === 'console' ? 'auto' : 'none',
                    '--opacity': activeResultTab === 'console' ? 1 : 0,
                    '--transition-delay':
                      activeResultTab === 'console' ? '0ms' : '100ms',
                    '--child-delay':
                      activeResultTab === 'console' ? '200ms' : '0ms',
                  }}
                >
                  <Console />
                </ConsoleWrapper>

                

              </RoundedCorners>
            </ResultWrapper>
          </ResultOuterWrapper>
        </CodeLayoutWrapper>
        
      </InnerWrapper>
    </CodeEditorProvider>
  );
}



const InnerWrapper = React.forwardRef(function InnerWrapper(
  { children },
  ref
) {
  const { formatCodeWithOffset } = React.useContext(
    CodeEditorContext
  );

  const handleKeydown = (ev) => {
    const macShortcutPressed = ev.metaKey && ev.key === 's';
    const windowsShortcutPressed = ev.ctrlKey && ev.key === 's';

    if (macShortcutPressed || windowsShortcutPressed) {
      ev.preventDefault();
      ev.stopPropagation();
      formatCodeWithOffset();
    }
  };

  return (
    <StyledInnerWrapper ref={ref} onKeyDown={handleKeydown}>
      {children}
    </StyledInnerWrapper>
  );
});

/**
 * So, one of the tricky things here is that Sandpack expects to
 * have a defined height. I want the sandbox to grow and shrink,
 * within reason, and so the only approach I've found is to
 * count the number of lines in the code, and set an explicit height
 * based on that.
 *
 * TODO: Should I maybe just set an explicit height, like 400px?
 * Would that actually be worse?
 */
function useEditorWrapperHeight(minHeight, maxHeight) {
  const { code } = useActiveCode();
  const numOfLines = code.match(/\n/g)?.length;

  const LINE_HEIGHT = 21;
  const TAB_BAR_HEIGHT = 40;
  const MAGIC_NUMBER = 60; // Not sure why it needs this, but it does

  const height = clamp(
    numOfLines * LINE_HEIGHT + TAB_BAR_HEIGHT + MAGIC_NUMBER,
    minHeight,
    maxHeight
  );

  // Turn pixels into rems:
  return height / 16 + 'rem';
}

const CodeLayoutWrapper = styled.div`
  display: ${p => p.showplayground ? 'flex' : ''};
  justify-content: ${p => p.showplayground ? 'space-between' : ''};
  .sp-file-explorer {
    max-width: 250px;
  }
`

const StyledInnerWrapper = styled(Space)`
  --syntax-bg: ${COLORS.syntax.dark.bg};
  --syntax-highlight: ${COLORS.syntax.dark.highlight};
  --syntax-txt: ${COLORS.syntax.dark.txt};
  --syntax-comment: ${COLORS.syntax.dark.comment};
  --syntax-prop: ${COLORS.syntax.dark.prop};
  --syntax-bool: ${COLORS.syntax.dark.bool};
  --syntax-val: ${COLORS.syntax.dark.val};
  --syntax-str: ${COLORS.syntax.dark.str};
  --syntax-name: ${COLORS.syntax.dark.name};
  --syntax-del: ${COLORS.syntax.dark.del};
  --syntax-regex: ${COLORS.syntax.dark.regex};
  --syntax-fn: ${COLORS.syntax.dark.fn};
  --color-primary: hsl(50deg 100% 50%);
  --selection-text-color: white;
  --selection-background-color: var(--color-gray-200);
  --scrollbar-width: 9px;
  --scrollbar-color: var(--color-gray-300);
  --scrollbar-background-color: ${COLORS.syntax.dark.bg};

  background: transparent;
  border: none;

  /*
    The following styles are only really needed in fullscreen,
    but they don't hurt here.
  */
  height: 100%;
  display: flex;
  flex-direction: column;

  /* HACK: overwrite inconvenient Sandpack built-in styles */
  .sp-cm {
    padding-top: 16px;
    padding-bottom: 8px;
    animation: ${fadeIn} 125ms;
  }

  .sp-tabs {
    border-bottom-color: var(--color-gray-100);
  }

  .sp-stack {
    height: 100%;
  }

  .sp-code-editor {
  }
  .cm-editor * {
    line-height: 1.5;
  }
  .cm-content {
    padding: 0px 8px !important;
  }
  .cm-scroller {
    scrollbar-width: thin;
    padding: 0px !important;
  }

  .cm-line {
    padding: 0 8px !important;
  }
  .cm-activeLine {
    background-color: hsl(210deg 15% 50% / 0.165) !important;
  }

  .cm-gutters {
    margin-right: -4px;
  }

  .cm-lineNumbers {
    font-size: 0.9em !important;
    color: var(--color-gray-500);
  }

  .sp-pre-placeholder {
    /*
      When switching tabs, things became misaligned.
      My initial hacky fix was to match the margin/padding
      of the container it replaces, but I realized it was
      better to simply hide the placeholder.

      If this approach fails for some reason, I can revert
      to the hacky fix by uncommenting:
    */
    /* margin: 0 !important;
    padding: 0px 8px !important; */
    opacity: 0;
  }

  /* Restore old tab styles */
  .sp-tab-button {
    border-bottom: 1px solid transparent;
    transition: border-bottom 150ms ease-out;
  }
  .sp-tab-button[data-active='true'] {
    color: var(--sp-colors-fg-active);
    border-bottom: 1px solid var(--sp-colors-accent);
  }
`;

const CodeEditorWrapper = styled.div`
  position: relative;
  scrollbar-width: thin;
`;

const ResultOuterWrapper = styled.div`
  height: 100%;
  padding: 0px;
  border-top: 1px solid var(--color-gray-100);

  @media (min-width: ${SPLIT_BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
  }
`;

const ResultWrapper = styled.div`
  position: relative;
  padding: 16px;
  height: var(--height);
  /*
    Because ConsoleWrapper + sandpack internals use z-index,
    let's flatten it here.

    If this causes problems for some reason, I can replace with
    z-index: 1;
  */
  isolation: isolate;
`;

const RoundedCorners = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const ConsoleWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  padding: 1px;
  /*
    This silly z-index number is required because sandpack uses
    a z-index of 3 for the overlay, instead of relying on the
    stacking order!!
  */
  z-index: 4;
  background: var(--syntax-bg);
  transition: opacity 200ms var(--transition-delay);
  opacity: var(--opacity);
  pointer-events: var(--pointer-events);

  & > * {
    opacity: var(--opacity);
    transition: opacity 200ms var(--child-delay);
  }
`;

export default BlogUnit;
