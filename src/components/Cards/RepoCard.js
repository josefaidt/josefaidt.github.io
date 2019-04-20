import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed from 'react-pose'
import theme from '../styles/_theme'
import { GithubIcons } from '../Icon'
import { StyledCard } from './Card'

const StyledRepoCard = styled(StyledCard)`
  .repo-header--container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* reset margin for padding on parent container */
    h2,
    span,
    svg,
    ul,
    li {
      margin: 0;
    }

    padding: 1.5rem 0;

    .repo-stats--container {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
      align-items: center;

      .repo-stats--item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem;
        align-items: center;
      }

      .repo-stats--item svg {
        justify-self: center;
        fill: ${theme.almostblack};
      }

      .repo-stats--item span {
        font-size: 0.9rem;
      }
    }
    @media only screen and (max-width: 760px) {
      flex-direction: column;
      align-items: flex-start;
      .repo-stats--container {
        margin-top: 0.8rem;
        grid-gap: 0.5rem;
      }
    }
  }
`

const RepoCard = repoData => (
  <StyledRepoCard>
    <div className="repo-header--container">
      <h2>{repoData.name}</h2>
      <ul className="repo-stats--container">
        <li className="repo-stats--item">
          <GithubIcons.watchers />
          <span>{repoData.watchers.totalCount}</span>
        </li>
        <li className="repo-stats--item">
          <GithubIcons.stargazers />
          <span>{repoData.stargazers.totalCount}</span>
        </li>
        <li className="repo-stats--item">
          <GithubIcons.forks />
          <span>{repoData.forks.totalCount}</span>
        </li>
      </ul>
    </div>
    <div className="repo-info--container">
      <p>{repoData.description}</p>
    </div>
  </StyledRepoCard>
)

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  homepageUrl: PropTypes.string,
  watchers: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
  }),
  stargazers: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
  }),
  forks: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
  }),
}

export default RepoCard
