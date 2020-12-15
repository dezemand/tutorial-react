export async function getRepoReadme(user, repo) {
  const response = await window.fetch(`/rest/repos/${user}/${repo}/readme`);
  const body = await response.json();
  if (body.error) {
    throw new Error(body.errorMessage);
  }
  return body;
}
