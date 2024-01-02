import type { SandpackFile } from '@codesandbox/sandpack-react';

type CodeType = {
  code: string;
  testCode: string;
};

export const createFileMap = (
  codeSnippet: CodeType
): Record<string, SandpackFile> => {
  const { code, testCode } = codeSnippet;
  const result = {
    '/code.ts': {
      code: code,
      active: true,
      hidden: false
    },
    '/code.test.ts': {
      code: testCode,
      hidden: true
    }
  };
  return result;
};
