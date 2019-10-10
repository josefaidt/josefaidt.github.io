import styled from 'styled-components'

export const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  div h1 {
    color: ${props => props.theme.text};
    text-shadow: 0.1rem 0.1rem ${props => props.theme.primary};
    margin: 0;
    font-size: 2.5rem;
    font-family: 'Josefin Sans';
    transition: all 300ms;
  }

  div h1:hover {
    transition: all 300ms;
    text-shadow: 0.05rem 0.05rem ${props => props.theme.primary.concat('CC')};
  }

  div h1 a {
    color: darkgrey;
    text-decoration: none;
  }
  div h1 span {
    margin: 0;
    padding: 0;
    font-size: 0.7rem;
    text-align: center;
    color: inherit;
  }

  .nav {
    align-self: right;
  }

  @media only screen and (max-width: 760px) {
    max-height: 10vh;
    margin-bottom: 1rem;
  }
`
