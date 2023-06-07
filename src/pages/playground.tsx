import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import useGlobalData from '@docusaurus/useGlobalData';

import CodeSandpack from '@site/src/components/CodeSandpack';

import { getGroupsBySidebar } from '../config/files';

// @ts-ignore
import SourceCode from '!!raw-loader!/docs/algo-linkList/leetCode/copyRandomLinkList/index.ts';



import 'tippy.js/dist/tippy.css';
import './playground.scss';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const globalData = useGlobalData();
  const allDocsData = globalData['docusaurus-plugin-content-docs']['default'];

  // getGroupsBySidebar(allDocsData.versions[0].docs)
  
  // console.log(SourceCode);
  // console.log(import('!!raw-loader!/docs/algo-linkList/leetCode/copyRandomLinkList/index.ts'));
  
  
  return (
    <Layout
      title={`playground ${siteConfig.title}`}
      description="playground will go into a meta tag in <head />">
      <main className='playground'>
        <section className=''>

          <CodeSandpack
            showplayground='1'
            preset='tsAlgo' id={0}
            activePath='/index.ts'
            visibleFiles={["/index.ts", "/index.test.ts"]}/>
        </section>

      </main>
    </Layout>
  );
}
