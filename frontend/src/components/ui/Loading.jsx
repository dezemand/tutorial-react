import React from "react";
import styles from "./Loading.scss";

export const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
};
