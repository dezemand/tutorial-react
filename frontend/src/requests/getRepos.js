export async function getRepos(user) {
  const response = await window.fetch(`/rest/repos/${user}`);
  const body = await response.json();
  if (body.error) {
    throw new Error(body.errorMessage);
  }
  return body;
}
