import React from 'react'
import { card } from './Card.module.css'

const Card = props => {
  return <article className={card}>{props.children}</article>
}

export default Card
