import React from 'react';

import { detectBrowser } from '@site/src/utils';

export default function useBrowser() {
  const [browser, setBrowser] = React.useState(null);

  React.useEffect(() => {
    setBrowser(detectBrowser());
  }, []);

  return browser;
}
