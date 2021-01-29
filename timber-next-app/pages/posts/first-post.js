import React from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/Layout";

const FirstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>My first post</title>
        </Head>
        <div>First post!</div>
      </Layout>
    </>
  );
};

export default FirstPost;
