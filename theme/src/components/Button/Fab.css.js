import styled from 'styled-components'

const StyledFab = styled.div`
  width: ${props => (props.width ? props.width : '70px')};
  height: ${props => (props.height ? props.height : '70px')};
  background-color: ${props => props.theme.accent};
  border-radius: 50%;
  box-shadow: 0 6px 10px 0 #666;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;

  font-size: 50px;
  color: white;
  text-align: center;
  line-height: 70px;
  z-index: ${props => (props.zindex ? props.zindex : 20)};

  position: fixed;
  right: 40px;
  bottom: 80px;

  &:hover {
    box-shadow: 0 6px 14px 0 #666;
    transform: scale(1.05);
  }

  button {
    background: none;
    border: none;
  }

  button,
  div.icon,
  div.icon a {
    height: 100%;
    width: 100%;
    color: inherit;
  }

  /* align icon center on fab */
  div.icon,
  div.icon a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export default StyledFab
