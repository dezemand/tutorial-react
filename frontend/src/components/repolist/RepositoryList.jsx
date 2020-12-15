import React, {useMemo} from "react";
import {usePromise} from "../../hooks/usePromise";
import {getRepos} from "../../requests/getRepos";
import {ErrorMessage} from "../ui/ErrorMessage";
import {Loading} from "../ui/Loading";
import styles from "./RepositoryList.scss";
import {RepositoryListItem} from "./RepositoryListItem";

export const RepositoryList = ({user}) => {
  const vars = useMemo(() => [user], [user]);
  const {result, loading, error} = usePromise(getRepos, vars);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <ul className={styles.list}>
      {result.map((item) => (
        <RepositoryListItem key={item.id} user={user} data={item} />
      ))}
    </ul>
  );
};
