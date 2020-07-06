import React from 'react'
import { grid } from './Grid.module.css'

// TODO: expand to preset columns
const Grid = ({ children }) => <div className={grid}>{children}</div>

export default Grid
