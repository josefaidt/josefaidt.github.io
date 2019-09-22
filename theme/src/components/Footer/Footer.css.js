import styled from 'styled-components'
import theme from '../styles/_theme'

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
    background-color: WHITESMOKE;
    position: relative;
    padding: 1rem;
    bottom: 9vh;
    &.noOffset {
      bottom: 0;
    }
  }
`

export { FooterContainer, StyledFooter }
