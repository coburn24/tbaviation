import React from "react";
import Link from "next/link";
import styles from "../../styles/Post.module.css";

const FirstPost = () => {
  return (
    <>
      <div className={styles.title}>First post!</div>
      <div>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </div>
      ;
    </>
  );
};

export default FirstPost;
