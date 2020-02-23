// import React, { forwardRef, useState } from 'react'
// import { Link } from 'gatsby'
// import posed, { PoseGroup } from 'react-pose'
// import { ThemeContext } from 'styled-components'
// import PropTypes from 'prop-types'
// import Icon from '../Icon'
// import StyledFab from './Fab.css'

// // eslint-disable-next-line react/display-name
// const Fab = forwardRef(({ symbol, anchorId }, ref) => (
//   <StyledFab ref={ref}>
//     <Link to={anchorId}>
//       <div className="fab">
//         <p>{symbol}</p>
//       </div>
//     </Link>
//   </StyledFab>
// ))

// const posedFabConfig = {
//   pressable: true,
//   init: { scale: 1 },
//   press: { scale: 0.8 },
//   pressEnd: { scale: 1 },
// }

// const AnimatedFab = ({ anchorId, symbol }) => (
//   <Fab pose={posedFabConfig} anchorId={anchorId} symbol={symbol} />
// )

// AnimatedFab.propTypes = {
//   anchorId: PropTypes.string.isRequired,
//   symbol: PropTypes.string.isRequired,
// }

// const FabMenu = ({ symbol, blogIdAnchor, linkedin, twitter }) => {
//   const [open, setOpen] = useState(false)
//   const theme = React.useContext(ThemeContext)

//   const Button = posed.button({
//     pressable: true,
//     init: { scale: 1 },
//     press: { scale: 0.8, rotate: -45 },
//   })
//   const ButtonActive = posed.button({
//     pressable: true,
//     init: { scale: 1, rotate: -45 },
//     press: { scale: 0.8, rotate: 45 },
//   })

//   const SubItem = posed(StyledFab)({
//     enter: {
//       x: ({ x }) => x,
//       y: ({ y }) => y,
//     },
//     exit: {
//       x: ({ x }) => x * -1,
//       y: ({ y }) => y * -1,
//     },
//   })

//   return (
//     <>
//       <StyledFab theme={theme}>
//         {!open ? (
//           <Button onClick={() => setOpen(!open)} value="Open Menu">
//             <div className="icon">{symbol}</div>
//           </Button>
//         ) : (
//           <ButtonActive onClick={() => setOpen(!open)} value="Close Menu">
//             <div className="icon">{symbol}</div>
//           </ButtonActive>
//         )}
//       </StyledFab>
//       <PoseGroup>
//         {open ? (
//           <SubItem y={'-125%'} zindex={10} key={1} onClick={() => setOpen(!open)}>
//             <Icon
//               className="icon"
//               icon="linkedin"
//               link={linkedin}
//               style={{ fill: 'whitesmoke', stroke: 'white' }}
//               invert
//             />
//           </SubItem>
//         ) : (
//           ''
//         )}
//         {open ? (
//           <SubItem y={'-250%'} zindex={9} key={2} onClick={() => setOpen(!open)}>
//             <Icon
//               className="icon"
//               icon="twitter"
//               link={twitter}
//               style={{ fill: 'whitesmoke', stroke: 'white' }}
//               invert
//             />
//           </SubItem>
//         ) : (
//           ''
//         )}
//         {open ? (
//           <SubItem x={'-125%'} zindex={10} key={3} onClick={() => setOpen(!open)}>
//             <Link to={blogIdAnchor}>
//               <div
//                 className="icon"
//                 style={{ fontSize: '1rem', color: 'white', fontWeight: 'bold' }}
//               >
//                 {'BLOG'}
//               </div>
//             </Link>
//           </SubItem>
//         ) : (
//           ''
//         )}
//       </PoseGroup>
//     </>
//   )
// }

// export default FabMenu
