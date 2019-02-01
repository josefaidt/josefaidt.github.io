import styled from 'styled-components'
import theme from '../theme'

export default styled.button`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  min-width: 100px;
  /* max-width: 100px; */
  text-align: center;
  color: ${theme.rouge};
  font-weight: 700;
  cursor: pointer;

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
