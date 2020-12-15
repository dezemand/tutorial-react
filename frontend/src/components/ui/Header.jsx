import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.scss";

export const Header = ({back, children}) => {
  return (
    <header className={styles.container}>
      <Link to={back} className={styles.back}>
        Go back
      </Link>
      <h1 className={styles.title}>{children}</h1>
    </header>
  );
};
