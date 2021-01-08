import React, { useEffect, useState } from 'react';
import Repo from './components/Repo';
import { getRepos } from './api';

function initFavourite(repo) {
  return { ...repo, favourite: false };
}
function dataStorage() {
  function read(keyName) {
    return JSON.parse(window.localStorage.getItem(keyName));
  }
  function write(fieldName, data) {
    return window.localStorage.setItem(fieldName, JSON.stringify(data));
  }
  return {
    read,
    write,
  };
}
const storage = dataStorage();

function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    (async function loadRepos() {
      const repos = await getRepos();
      const data = repos.map(initFavourite);
      ///Writing to the localStorage takes time
      //So I set repos directly in the mean time
      setRepos(data);

      storage.write('repositories', data);
    })();
    const repos = storage.read('repositories');
    setRepos(repos);
  }, []);

  function toggleFavourite(id) {
    const repos = storage.read('repositories');

    const repo = repos.find((repo) => repo.id === id);

    if (repo.favourite) {
      repo.favourite = false;
    } else if (!repo.favourite) {
      repo.favourite = true;
    }

    const newRepo = [...repos, repo];
    storage.write('repositories', newRepo);
    setRepos(newRepo);
  }
  return (
    <div>
      {repos.map((repo, i) => (
        <Repo key={i} repo={repo} toggleFavourite={toggleFavourite} />
      ))}
    </div>
  );
}

export default App;
