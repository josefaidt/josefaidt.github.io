import styled from 'styled-components'
import theme from '../styles/_theme'

const StyledFab = styled.div`
  .fab {
    width: 70px;
    height: 70px;
    background-color: ${theme.rouge};
    border-radius: 50%;
    box-shadow: 0 6px 10px 0 #666;
    transition: all 0.1s ease-in-out;

    font-size: 50px;
    color: white;
    text-align: center;
    line-height: 70px;
    z-index: 20;

    position: fixed;
    right: 40px;
    bottom: 120px;
  }

  .fab p {
    text-align: center;
    /* padding-right: 0.3rem; */
  }

  .fab:hover {
    box-shadow: 0 6px 14px 0 #666;
    transform: scale(1.05);
  }
`

export default StyledFab
