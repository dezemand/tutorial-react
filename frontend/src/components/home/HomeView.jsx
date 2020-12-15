import React from "react";
import {useHistory} from "react-router";
import {Footer} from "../ui/Footer";
import styles from "./HomeView.scss";
import {UserInput} from "./UserInput";

export const HomeView = () => {
  const history = useHistory();

  return (
    <>
      <main className={styles.container}>
        <UserInput onSubmit={(name) => history.push(`/${name}`)} />
      </main>
      <Footer />
    </>
  );
};
