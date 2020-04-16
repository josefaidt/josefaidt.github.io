import styled from 'styled-components'

const StyledCard = styled.article`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 1rem 0;
  transition: transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  padding: 1rem;
  color: ${props => props.theme.text};
  /* transition */
  h1,
  p,
  span {
    color: ${props => props.theme.text};
    /* transition: color 0.2s ease; */
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }
  p,
  span#date {
    font-size: 0.8rem;
  }
  span.tag {
    font-weight: bold;
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.text.concat('DF')};
    transition: background-color 0.2s linear;
  }
  #date {
    font-style: italic;
  }

  &:hover {
    span.tag {
      color: ${props => props.theme.background};
      background-color: ${props => props.theme.text};
      transition: background-color 0.2s linear;
    }
  }

  @media only screen and (max-width: 760px) {
    margin: 1rem 0.3rem;
  }
`

export { StyledCard }
