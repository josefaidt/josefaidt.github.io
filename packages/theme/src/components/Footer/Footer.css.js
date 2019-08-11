import styled from '@emotion/styled'

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
    background-color: whitesmoke;
    position: relative;
    padding: 1rem;
    bottom: 9vh;
  }
`

export { FooterContainer, StyledFooter }
