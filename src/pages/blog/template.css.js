import styled from 'styled-components'
import theme from 'components/styles/theme'

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const StyledBackButton = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  min-width: 100px;
  max-width: 100px;
  text-align: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    letter-spacing: 3px;
    transition: 0.3s ease;
    background-color: #c6797e80;
    border: 0.5px solid #c6797e80;
    color: white;
  }

  &:active {
    background-color: #c6797ebf;
    color: white;
    transition: 0.1s ease;
    letter-spacing: 3px;
  }

  .container {
    padding: 1rem;
    /* color: ${theme.almostblack}; */
    filter: brightness(150%);
    h1 {
      /* color: ${theme.almostblack}; */
      filter: brightness(100%);
    }
  }
  .container:hover {
    filter: brightness(80%);
  }
`

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

  .fab:hover {
    box-shadow: 0 6px 14px 0 #666;
    transform: scale(1.05);
  }

  .plus {
    text-align: center;
    padding-right: 0.3rem;
  }
`

export { BlogHeader, StyledBackButton, StyledFab }
