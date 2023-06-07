
// @ts-ignore
// import code from '!!raw-loader!/docs/algo-linkList/leetCode/middleLinkList/index.ts';

export const getGroupsBySidebar = async (list) => {

  const files = {};
  const paths = [];
  const ROOT_DOCS_RE = /\/docs\/([-\w]+)\/([-\w]+)\/([-\w]+)\/index/;

  // @ts-ignore
  const code = (await import('!!raw-loader!/docs/algo-linkList/leetCode/middleLinkList/index.ts')).default
  // !!raw-loader!/docs/algo-linkList/leetCode/mergeTwoLinkList/index.ts

  for (const item of list) {
    try {
      const path = `/docs/${item.id}`;
      
      if (ROOT_DOCS_RE.test(path)) {

        // @ts-ignore
        console.log((await import(`raw-loader!${item.path}index.ts`)).default, 'files item');
        // paths.push(`!!raw-loader!${item.path}index.ts`);

        console.log(path, 'dddd');
        
        // @ts-ignore
        // files[item.path] = (await import(`!!raw-loader!${path}`)).default;
        
      }
    } catch (error) {
      console.log(error, 'Error loading', );
      
    }
  }

  console.log(files, 'files code');
  

}