import styled from 'styled-components'

const StyledPostLink = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 1rem 0;

  transition: transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  a {
    text-decoration: none;
  }

  .container {
    padding: 1rem;
    color: ${props => props.theme.text};
    /* transition */
    h1,
    p,
    span,
    span.tag {
      color: #8b868c;
      transition: color 0.2s ease;
    }
    /* filters */
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p,
    span#date {
      font-size: 0.8rem;
    }
    span.tag {
      color: white;
      background-color: #8b868c;
      transition: background-color 0.2s linear;
    }
    #date {
      font-style: italic;
    }
  }
  .container:hover {
    h1,
    span#date,
    p {
      color: ${props => props.theme.text};
    }
    span.tag {
      background-color: ${props => props.theme.text};
      transition: background-color 0.2s linear;
      color: white;
    }
  }

  @media only screen and (max-width: 760px) {
    margin: 1rem 0.3rem;
  }
`

const StyledTagList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`

const StyledTag = styled.span`
  background-color: ${props => props.theme.text};
  color: white;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  text-align: center;
  margin: 0 0.3rem 0.3rem 0;
  font-size: 0.7rem;
  color: white;
  &:hover {
  }
`

export { StyledPostLink, StyledTagList, StyledTag }
