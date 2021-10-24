import React, { FC } from 'react';

interface Props {
  repos: IGithubRepo[];
}

const UserRepos: FC<Props> = ({ repos }) => (
  <div className="repos">
    {repos
      .map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="repo"
        >
          {repo.name}
        </a>
      ))
      .slice(0, 10)}
  </div>
);

export default UserRepos;
