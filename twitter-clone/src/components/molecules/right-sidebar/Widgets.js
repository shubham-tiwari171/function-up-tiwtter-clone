import React from 'react'
import styles from './widgets.module.css'
import {CiSearch} from 'react-icons/ci'
import Trending from './Trending'

const Widgets = () => {
    

  return (
    <div className={styles.widgets}>
      <div className={styles.search}>
          <input className={styles['search-tweets']} type="text" placeholder='Search Twitter'/>
          <div className={styles['search-icon']}>
            <CiSearch/>
            </div>
        </div>
        <Trending/>
           
    </div>
  )
}

export default Widgets