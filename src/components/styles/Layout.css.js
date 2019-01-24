import styled from 'styled-components'
import theme from './theme'

export const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  font-family: 'Open Sans';
  font-size: 1rem;

  .centered-image {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  @media only screen and (max-width: 480px) {
    margin: 0 0.1rem;
  }
`

export const StyledLayout = styled.div`
  background: white;
  color: ${theme.almostblack};
  font-family: 'Open Sans';
  font-size: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  /* justify-content: 'space-between'; */
  .footer {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
  .content {
    flex: 1 0 auto;
    height: 100%;
  }
  @media only screen and (max-width: 760px) {
    .content {
      padding-bottom: 5rem;
    }
  }
  .col2 {
    background-color: red;
  }
`
