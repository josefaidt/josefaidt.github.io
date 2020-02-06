import styled from 'styled-components'

const StyledCard = styled.div`
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
      color: ${props => props.theme.text};
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
      font-weight: bold;
      letter-spacing: 0.1rem;
      color: ${props => props.theme.background};
      background-color: ${props => props.theme.text.concat('DF')};
      transition: background-color 0.2s linear;
    }
    #date {
      font-style: italic;
    }
  }
  .container:hover {
    span.tag {
      color: ${props => props.theme.background.concat('DF')};
      background-color: ${props => props.theme.text};
      transition: background-color 0.2s linear;
    }
  }

  @media only screen and (max-width: 760px) {
    margin: 1rem 0.3rem;
  }
`

export { StyledCard }
