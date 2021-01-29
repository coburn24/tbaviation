import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Matt</b> I'm a CFII and A&P located in Orange County
          Caifornia 🍊. You can contact me on{" "}
          <a target="_blank" href="http://twitter.com/co_burn24">
            Twitter
          </a>
        </p>
        <p>
          view my first{" "}
          <Link href="/posts/first-post">
            <a>post!</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
