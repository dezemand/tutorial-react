import React, {useMemo} from "react";
import {usePromise} from "../../hooks/usePromise";
import {getRepo} from "../../requests/getRepo";
import {ErrorMessage} from "../ui/ErrorMessage";
import {Loading} from "../ui/Loading";
import {Readme} from "./Readme";

export const RepositoryInfo = ({user, repo}) => {
  const vars = useMemo(() => [user, repo], [user, repo]);
  const {loading, result, error} = usePromise(getRepo, vars);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <Readme user={user} repo={repo} />
    </>
  );
};
