import styled from '@emotion/styled'
import colors from '../colors'

// export const Container = styled.div`
//   margin: 3rem auto;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   font-family: 'Open Sans';
//   font-size: 1rem;

//   .centered-image {
//     margin-left: auto;
//     margin-right: auto;
//     width: 50%;
//   }
//   @media only screen and (max-width: 480px) {
//     margin: 0 0.8rem;
//   }
// `

export const StyledLayout = styled.div`
  background: white;
  color: ${colors.almostblack};
  font-family: 'Open Sans';
  font-size: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  .footer {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
  header {
    flex: 1 0 auto;
    height: 100%;
  }
  a {
    color: ${colors.red};
    transition: color 0.2s ease;
  }
  a:hover {
    color: ${colors.red4};
    transition: color 0.2s ease;
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
