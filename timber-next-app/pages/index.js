import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { data } from "remark";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const JSONdata = await res.json();
  console.log(JSONdata);
  return {
    props: {
      allPostsData,
      JSONdata,
    },
  };
}

export default function Home({ allPostsData, JSONdata }) {
  console.log(JSONdata);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Matt</b> I'm a CFII, A&P, and Software Developer located
          in Orange County Caifornia 🍊. You can contact me on{" "}
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
      <section>
        <h2 className={utilStyles.headingLg}>Users</h2>
        <ul>
          {JSONdata.map((user) => (
            <li className={utilStyles.listItem} key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
