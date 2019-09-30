import styled from 'styled-components'

export const StyledNav = styled.div`
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

  @media only screen and (max-width: 760px) {
    height: 9vh;
    display: flex;
    justify-content: space-between;

    /* box-shadow: 0 0 40px 0 ${props => props.theme.text}; */
    box-shadow: 0px 0px 40px -10px ${props => props.theme.text};
    text-align: center;
    font-size: 1.2rem;
    min-height: 7vh;
    z-index: 10;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
`
