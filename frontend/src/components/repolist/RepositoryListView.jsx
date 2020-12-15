import React from "react";
import {useParams} from "react-router";
import {Footer} from "../ui/Footer";
import {Header} from "../ui/Header";
import {RepositoryList} from "./RepositoryList";
import styles from "./RepositoryListView.scss";

export const RepositoryListView = () => {
  const {user} = useParams();

  return (
    <>
      <main className={styles.container}>
        <Header back="/">
          Repositories by <span className={styles.username}>{user}</span>
        </Header>

        <RepositoryList user={user} />
      </main>
      <Footer />
    </>
  );
};
