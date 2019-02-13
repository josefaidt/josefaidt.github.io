import React, { forwardRef } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import StyledFab from './Fab.css'

// eslint-disable-next-line react/display-name
const Fab = forwardRef(({ symbol, anchorId }, ref) => (
  <StyledFab ref={ref}>
    <Link to={anchorId}>
      <div className="fab">
        <p>{symbol}</p>
      </div>
    </Link>
  </StyledFab>
))

const posedFabConfig = {
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 },
  pressEnd: { scale: 1 },
}

const AnimatedFab = ({ anchorId, symbol }) => (
  <Fab pose={posedFabConfig} anchorId={anchorId} symbol={symbol} />
)

AnimatedFab.propTypes = {
  anchorId: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
}

export default AnimatedFab
