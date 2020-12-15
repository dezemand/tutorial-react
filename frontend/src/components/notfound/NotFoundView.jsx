import React from "react";
import {Link} from "react-router-dom";
import {Footer} from "../ui/Footer";
import styles from "./NotFoundView.scss";

export const NotFoundView = () => {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h3 className={styles.subtitle}>Page not found</h3>
        <Link to="/" className={styles.back}>
          Go back
        </Link>
      </main>
      <Footer />
    </>
  );
};
