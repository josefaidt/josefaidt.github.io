// currently only used in Resume.js
import styled from '@emotion/styled'

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`
const SubtitleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
  span {
    font-style: italic;
    font-size: 0.9rem;
    margin-top: -1rem;
  }
  @media only screen and (max-width: 760px) {
    flex-direction: column;
    text-align: center;
  }
`

export { Title, SubtitleFlex }
