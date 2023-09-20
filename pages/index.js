import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Tropical Landscaping</p>
        <p>
          Services:
        </p>
        <ul>
          <li>Maintenece</li>
          <li>Maintenece</li>
          <li>Maintenece</li>
        </ul>
      </section>
    </Layout>
  );
}
