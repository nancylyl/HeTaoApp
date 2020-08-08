import React, { PureComponent } from 'react'
import styles from './style.module.scss'
export default class index extends PureComponent {
  render () {
    return (
      <div>
        <div className={styles.header}>
          <div>d
            
            <img src={require('../../../../assets/images/3.png')} className={styles["doctor-head"]} />
          </div>
        </div>
      </div>
    )
  }
}
