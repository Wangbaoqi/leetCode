import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

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
          <Link className="button button--primary" to="/">
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

function LanguageContent() {
  return (
    <section>
      <div className={styles.langContainer}>
        <h2 style={{fontSize: '2rem'}}>Languages and Tools 💻</h2>
        <img className={styles.langImg} src="/img/logo/HTML5_logo_and_wordmark.svg" alt="HTML5"/>
        <img className={styles.langImg} src="/img/logo/CSS3_logo_and_wordmark.svg" alt="CSS3"/>
        <img className={styles.langImg} src="/img/logo/JavaScript_logo.svg" alt="JavaScript"/>
        <img className={styles.langImg} src="/img/logo/Typescript_logo.svg" alt="TypeScript"/>
        <img className={styles.langImg} src="/img/logo/Vue.js_Logo_2.svg" alt="Vue.js"/>
        <img className={styles.langImg} src="/img/logo/React_logo.svg" alt="React"/>
        <img className={styles.langImg} src="/img/logo/nextjs_logo.svg" alt="nextJs"/>
        <img className={styles.langImg} src="/img/logo/redux.svg" alt="redux"/>
        <img className={styles.langImg} src="/img/logo/React-Router.svg" alt="react-router"/>
        <img className={styles.langImg} src="/img/logo/Angular_logo.svg" alt="Angular"/>
        <img className={styles.langImg} src="/img/logo/tailwindcss.svg" alt="tailwindcss" />
        <img className={styles.langImg} src="/img/logo/Node.js_logo.svg" alt="Nodejs"/>
        <img className={styles.langImg} src="/img/logo/LESS_Logo.svg" alt="Less"/>
        <img className={styles.langImg} src="/img/logo/Sass_Logo_Color.svg" alt="Sass" />
        <img className={styles.langImg} src="/img/logo/ESLint_logo.svg" alt="ESLint"/>
        <img className={styles.langImg} src="/img/logo/Git-logo.svg" alt="git" />
        <img className={styles.langImg} src="/img/logo/Visual_Studio_Code_logo.svg" alt="VScode"/>
        <img className={styles.langImg} src="/img/logo/Npm-logo.svg" alt="Npm"/>
        <img className={styles.langImg} src="/img/logo/webpack_logo.svg" alt="webpack"/>
        <img className={styles.langImg} src="/img/logo/babel_logo.svg" alt="babel"/>
        <img className={styles.langImg} src="/img/logo/vite_logo.svg" alt="vite"/>
        <img className={styles.langImg} src="/img/logo/esbuild_logo.svg" alt="esbuild"/>
      </div>
    </section>
)
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
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
