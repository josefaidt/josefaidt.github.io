const oldColors = {
  red: '#D46A6A',
  red4: '#dc8787',
  rouge: '#c6797e',
  almostblack: '#5a535b',
  maxWidth: '1000px',
}

export default {
  colors: {
    accent: '#D46A6A',
    primary: '#c6797e',
    text: '#5a535b',
    background: 'whitesmoke',
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    header: 'Josefin Sans',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: '1.45',
    heading: '1.1',
  },
  sizes: {
    container: '90vw',
  },
  styles: {
    Layout: {
      backgroundColor: 'background',
      color: 'text',
      fontFamily: 'default',
      fontSize: 1,
      lineHeight: 'text',
      overflow: 'hidden',

      backgroundImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a09d9e' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E",
    },
    Header: {
      backgroundColor: 'primary',
      color: 'accent',
      fontFamily: 'header',
      fontWeight: 'bold',
      margin: 0,
      alignItems: 'center',
      justifyContent: 'space-between',
      span: {
        display: 'block',
        fontSize: 3,
        margin: '0 auto',
        maxWidth: 'container',
        padding: 3,
        width: '90vw',
      },
    },
    Main: {
      margin: '0 auto',
      maxWidth: 'container',
      width: '90vw',
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    Footer: {
      margin: '0 1rem',
      fontSize: '1rem',
      justifyContent: 'center',
    },
    h1: {
      color: 'text',
      fontSize: 5,
      lineHeight: 'heading',
    },
  },
}
