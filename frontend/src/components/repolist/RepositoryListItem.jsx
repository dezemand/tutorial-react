import React from "react";
import {useHistory} from "react-router";
import styles from "./RepositoryListItem.scss";

export const RepositoryListItem = ({data, user}) => {
  const history = useHistory();
  const updatedAt = new Date(data.updated_at);

  const handleClick = () => {
    history.push(`/${user}/${data.name}`);
  };

  return (
    <li className={styles.item} onClick={handleClick}>
      <div className={styles.left}>
        <h2 className={styles.repoTitle}>
          <span className={styles.repoUser}>{user}</span>
          <span className={styles.divider}>/</span>
          <span className={styles.repoName}>{data.name}</span>
          {data.archived && <span className={styles.archived}>Archived</span>}
        </h2>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.lower}>
          <div className={styles.language}>{data.language}</div>
          <div className={styles.updated}>
            <span className={styles.updatedAt}>Updated at</span> {updatedAt.getDate()}/{updatedAt.getMonth() + 1}
          </div>
        </div>
      </div>
      <div className={styles.right}>{data.stargazers_count} stars</div>
    </li>
  );
};
