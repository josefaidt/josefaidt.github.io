import React from 'React'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GithubIcons } from '../Icon'

const Repo = repoData => (
  <div className="post-list container">
              <div className="repo-header">
                <h2>{repoData.name}</h2>
                <ul className="repo-stats">
                  <li>
                    <GithubIcons.watchers />
                    {repoData.watchers.totalCount}
                  </li>
                  <li>
                    <GithubIcons.stargazers />
                    {repoData.stargazers.totalCount}
                  </li>
                  <li>
                    <GithubIcons.forks />
                    {repoData.forks.totalCount}
                  </li>
                </ul>
              </div>
              <div className="excerpt-preview">
                <p>{repoData.description}</p>
              </div>
            </div>
)

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  watchers: PropTypes.shape({
    totalCount: PropTypes.integer
  }),
  stargazers: PropTypes.shape({
    totalCount: PropTypes.integer
  }),
  forks: PropTypes.shape({
    totalCount: PropTypes.integer
  }),
}

export default Repo