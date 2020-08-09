import React, { PureComponent } from 'react'
import styles from './style.module.scss'
export default class index extends PureComponent {
  render () {
    return (
      <div>
        <div className={styles.header}>
          <div>
            我的患者
          </div>
        </div>
      </div>
    )
  }
}
