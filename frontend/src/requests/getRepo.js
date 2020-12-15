export async function getRepo(user, repo) {
  const response = await window.fetch(`/rest/repos/${user}/${repo}`);
  const body = await response.json();
  if (body.error) {
    throw new Error(body.errorMessage);
  }
  return body;
}
