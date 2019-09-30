import styled from 'styled-components'

export const StyledNav = styled.div`
  display: flex;
  align-items: center;


  font-family: 'Josefin Sans';
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: 0;
  margin: auto;
  /* a {
    padding: 0.5rem 0.5rem;
    margin: 0.2rem;
    text-decoration: none;
    line-height: 1rem;
  }
  @media (min-width: 760px) {
    a.active,
    a.active:hover {
      filter: none;
      background-color: ${props => props.theme.main.concat('DF')};
      transition: all 200ms;
      color: white;
      border-radius: 0.2rem;
    }
    a:hover {
      filter: none !important;
      background-color: ${props => props.theme.main.concat('DF')};
      transition: all 200ms;
      color: white;
      /* padding-top: 0.7rem; */
      border-radius: 0.2rem;
    }
  } */
  .screen {
    margin: 0 auto;
    z-index: 1;
    box-shadow: 1px black;
  }

  @media only screen and (max-width: 760px) {
    height: 9vh;
    display: flex;

    /* box-shadow: 0 0 40px 0 ${props => props.theme.text}; */
    box-shadow: 0px 0px 40px -10px ${props => props.theme.text};
    text-align: center;
    font-size: 1.2rem;
    min-height: 7vh;
    z-index: 10;
    background-color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    /* a {
      flex-grow: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a:active {
      border-bottom: none;
    } */
  }
`
