import React from "react";
import styles from "./ErrorMessage.scss";

export const ErrorMessage = ({error}) => {
  return (
    <div className={styles.container}>
      <div className={styles.x} />
      <div className={styles.title}>An error occurred</div>
      <div className={styles.message}>{error.message}</div>
    </div>
  );
};
