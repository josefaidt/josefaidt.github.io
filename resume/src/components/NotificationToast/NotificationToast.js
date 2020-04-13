import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import styles from './NotificationToast.module.css'

const NotificationToast = ({ data: n, onClose }) => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [0, 120, 200], ['1', '0.7', '0'])
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDrag={(event, info) => info.point.x > 150 && onClose(n.id)}
      style={{ x, opacity }}
    >
      <div className={styles.container}>
        <svg className={styles.type} fill="var(--theme-text, CornflowerBlue)">
          <circle cx="0.45rem" cy="0.55rem" r="0.22rem"></circle>
        </svg>
        <h4 className={styles.title}>{n.content.title}</h4>
        <p className={styles.description}>{n.content.description}</p>
        {n.content.buttonText && n.content.buttonFn ? (
          <button onClick={() => n.content.buttonFn()}>{n.content.buttonText}</button>
        ) : null}
        <button className={styles.button} onClick={e => onClose(n.id)}>
          <svg width="20" height="20" style={{ width: '0.5rem', height: '0.5rem' }}>
            <line x1="0" x2="100%" y1="0" y2="100%" stroke="var(--theme-text, black)"></line>
            <line x1="100%" x2="0" y1="0" y2="100%" stroke="var(--theme-text, black)"></line>
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

export default NotificationToast
