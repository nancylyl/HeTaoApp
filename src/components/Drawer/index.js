import React, { PureComponent } from 'react'
import styles from './style.module.scss';
import { Icon } from 'antd-mobile';

/**
 *
 *
 * @export
 * @class index
 * @extends {PureComponent}
 * @props {
 *  title: string, 
 *  okText: string, 
 *  onClose: fn,
 *  onOk: fn,
 *  visible: boolean
 * }
 */
export default class index extends PureComponent {
  render () {
    const { title, okText = '保存', onClose, onOk = null, visible } = this.props;
    return (
      visible ? <div
        className={styles.drawer}
      >
        <div className={styles.header}>
          <Icon
            onClick={() => {
              onClose && onClose(false)
            }}
            className={styles.back}
            type="left"
          />
          <span className={styles.title}>{title}</span>
          <span
            onClick={() => {
              onOk && onOk()
            }}
            className={styles.ok}
          >{okText}</span>
        </div>
        {this.props.children}
      </div> : null
    )
  }
}
