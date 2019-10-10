import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  font-family: 'Josefin Sans';
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: 0;
  margin: auto;

  .screen {
    margin: 0 auto;
    z-index: 1;
    box-shadow: 1px ${props => props.theme.text};
  }

  a {
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 760px) {
    background-color: ${props => props.theme.background};

    /* box-shadow: 0 0 40px 0 ${props => props.theme.text}; */
    box-shadow: 0px 0px 40px -10px ${props => props.theme.text};
    text-align: center;
    font-size: 1.2rem;
    z-index: 10;
    width: 100%;
    position: fixed;
    bottom: 0;

    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
    grid-gap: 0.4rem;
    padding: 0 0.3rem;
    height: 3.8rem;

    a {
      margin: 0;
    }
  }
`
