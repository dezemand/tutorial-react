import React from "react";
import {useParams} from "react-router";
import {Footer} from "../ui/Footer";
import {Header} from "../ui/Header";
import {RepositoryInfo} from "./RepositoryInfo";
import styles from "./RepositoryView.scss";

export const RepositoryView = () => {
  const {user, repo} = useParams();

  return (
    <>
      <main className={styles.container}>
        <Header back={`/${user}`}>
          {user}
          <span className={styles.divider}>/</span>
          <span className={styles.repoName}>{repo}</span>
        </Header>
        <RepositoryInfo user={user} repo={repo} />
      </main>
      <Footer />
    </>
  );
};
