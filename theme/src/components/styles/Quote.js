import styled from 'styled-components'

const Quote = styled.div`
  margin: 3rem auto;
  text-align: center;
  font-size: 0.9rem;
  color: dimgrey;
  font-style: italic;
  filter: brightness(120%);

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 760px) {
    margin: 3rem 1rem;
  }
`

export default Quote
