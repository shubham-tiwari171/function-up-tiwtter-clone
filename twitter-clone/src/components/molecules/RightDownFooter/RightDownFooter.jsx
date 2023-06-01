import React from 'react'
import styles from './RightDownFooter.module.css'

export default function RightDownFooter() {
  return (
    <div class={styles.right}>
      <p className={styles.anchorage}>
        <a href='https://twitter.com/tos' target='Service' >Terms of Service  </a>&nbsp;
        <a href='https://twitter.com/privacy' target='Privacy' >Privacy Policy </a>&nbsp;
        <a href='https://support.twitter.com/articles/20170514' target='Cookie' >Cookie Policy  </a>&nbsp;&nbsp;
        <a href='https://help.twitter.com/resources/accessibility' target='Accessibility' >Accessibility </a>&nbsp;
        <a href='https://twitter.com/privacy' target='twitter' >More...  </a>
        ©2023 X Corp.</p>
    </div>
  )
}
