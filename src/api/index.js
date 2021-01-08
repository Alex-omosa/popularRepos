import axios from 'axios';

export const getRepos = async () => {
  let repositories = [];
  const data = await axios.get(
    'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars'
  );
  const reposArray = data.data.items;
  for (let repo in reposArray) {
    const repoName = reposArray[repo]['name'];
    const repoOwner = reposArray[repo]['owner']['login'];
    const starCount = reposArray[repo]['stargazers_count'];
    const description = reposArray[repo]['description'];
    const watchers = reposArray[repo]['watchers'];
    const forks = reposArray[repo]['forks'];
    const id = reposArray[repo]['id'];
    const avatar_url = reposArray[repo]['owner']['avatar_url'];

    repositories = [
      ...repositories,
      {
        id,
        avatar_url,
        repoName,
        repoOwner,
        starCount,
        description,
        watchers,
        forks,
      },
    ];
  }
  return repositories;
};
