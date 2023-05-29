import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function TopBanner() {
  
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <div className={styles.topBannerTitleText}>
          <Translate id="homepage.banner.launch.2.0">
            {'Nate Algorithm\xa0 is\xa0going on!️'}
          </Translate>
        </div>
        {'\xa0🥳'}
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.topBannerDescription}>
            dedicated to {' '}
            <b>
              <Link to="">
                data structure
              </Link>{' '}
              and{' '}
              <Link to="">
                algorithm
              </Link>{' '}
              always!
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/docusaurus_keytar.svg')}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'Build <b>comprehensive algorithm</b> skills <b>quickly</b>, focus on <b>self</b>',
                description:
                  'Home page hero title, can contain simple html tags',
              }),
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/algo-linkList/LinkList">
            <Translate>Get Started</Translate>
          </Link>
          <Link className="button button--info" to="https://wangbaoqi.tech">
            <Translate>Blog</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=wangbaoqi&amp;repo=NateTech&amp;type=star&amp;count=false&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

async function getUser() {

  
}
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  getUser();
 
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <TopBanner />
      <HeroBanner />
      <main>
        {/* <HomepageFeatures /> */}
        {/* <LanguageContent /> */}
      </main>
    </Layout>
  );
}
