import styled from 'styled-components'
import theme from './theme'

export const StyledHeader = styled.div`
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  div h1 {
    color: ${theme.almostblack};
    margin: 0;
    font-size: 2.5rem;
    font-family: 'Josefin Sans';
    /* line-height: 0.6; */
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
  }
`
