import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { GithubIcons, NewTabIcon } from '../Icon'
import { StyledCard } from './Card.css'

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

    padding: 0 0 1.5rem 0;

    .repo-stats--container {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.5rem;
      align-items: center;

      .repo-stats--item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.2rem;
        align-items: center;
      }

      .repo-stats--item svg {
        justify-self: center;
        fill: ${props => props.theme.text};
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

  .repo-info--container {
    display: flex;
    justify-content: space-between;

    svg {
      align-self: flex-end;
      height: 1.3rem;
      fill: ${props => props.theme.text};
      opacity: 0;

      @media only screen and (max-width: 760px) {
        opacity: 1;
      }

      transition: all 0.2s ease;
    }
  }

  &:hover {
    .repo-info--container svg {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }
`

const RepoCard = repoData => {
  const theme = React.useContext(ThemeContext)
  return (
    <StyledRepoCard theme={theme}>
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
        <NewTabIcon />
      </div>
    </StyledRepoCard>
  )
}

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
