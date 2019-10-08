import styled from 'styled-components'

const StyledBackButton = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  min-width: 100px;
  max-width: 100px;
  text-align: center;

  /* &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    letter-spacing: 3px;
    transition: 0.3s ease;
    background-color: ${props => props.theme.primary.concat('80')};
    border: 0.5px solid ${props => props.theme.text};
    color: white;
  }

  &:active {
    background-color: ${props => props.theme.primary.concat('BF')};
    color: white;
    transition: 0.1s ease;
    letter-spacing: 3px;
  } */
  a {
    padding: 0.5rem 0.5rem;
    margin: 0.2rem;
    text-decoration: none;
    line-height: 1rem;
  }
  @media (min-width: 760px) {
    a.active,
    a.active:hover {
      filter: none;
      background-color: ${props => props.theme.primary.concat('DF')};
      transition: all 200ms;
      color: white;
      border-radius: 0.2rem;
    }
    a:hover {
      filter: none !important;
      background-color: ${props => props.theme.primary.concat('DF')};
      transition: all 200ms;
      color: white;
      /* padding-top: 0.7rem; */
      border-radius: 0.2rem;
    }
  }

  @media (max-width: 768px) {
    a:hover,
    a:active {
      background-color: ${props => props.theme.primary.concat('DF')};
      color: white;
    }
  }

  .container {
    padding: 1rem;
    filter: brightness(150%);
    h1 {
      filter: brightness(100%);
    }
  }
  .container:hover {
    filter: brightness(80%);
  }
`

export default StyledBackButton
