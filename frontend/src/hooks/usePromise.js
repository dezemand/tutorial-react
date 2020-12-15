import {useEffect, useState} from "react";

/**
 * <p>The <code>usePromise</code> hook will execute the promise function with the given args and set its state
 * with either the result or the caught error. The promise will be re-executed if either the arguments or the
 * promise itself changes.</p>
 *
 * @param promiseFn A function that will return a promise.
 * @param args The arguments for the function.
 * @returns {{result: null|*, loading: boolean, error: Error|null}}
 */
export function usePromise(promiseFn, args = []) {
  const [state, setState] = useState({loading: true, result: null, error: null});

  useEffect(() => {
    setState({loading: true, result: null, error: null});
    promiseFn(...args)
      .then((result) => setState({loading: false, result, error: null}))
      .catch((error) => setState({loading: false, result: null, error}));
  }, [args, promiseFn]);

  return state;
}
