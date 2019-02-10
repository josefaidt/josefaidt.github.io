import styled from 'styled-components'
import theme from './theme'

const FooterContainer = styled.div`
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: row;
    .nav {
      z-index: 1;
    }
  }
`

const StyledFooter = styled.footer`
  margin: 0.5rem auto;
  max-width: 600px;
  .footer-container {
    background: linear-gradient(whitesmoke);
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 760px) {
    /* filter: brightness(85%); */
    background-color: WHITESMOKE;
    position: relative;
    /* border-top: 1px solid ${theme.almostblack}; */
    padding: 1rem;
    bottom: 9vh;
    /* margin-bottom: 7vh; */
  }
`

export { FooterContainer, StyledFooter }
