import React, {useMemo} from "react";
import ReactMarkdown from "react-markdown";
import {usePromise} from "../../hooks/usePromise";
import {getRepoReadme} from "../../requests/getRepoReadme";
import {ErrorMessage} from "../ui/ErrorMessage";
import {Loading} from "../ui/Loading";
import styles from "./Readme.scss";

export const Readme = ({user, repo}) => {
  const vars = useMemo(() => [user, repo], [user, repo]);
  const {loading, result, error} = usePromise(getRepoReadme, vars);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className={styles.container}>
      <ReactMarkdown source={atob(result.content)} />
    </div>
  );
};
