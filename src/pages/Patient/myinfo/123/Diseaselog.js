import React, { Component } from 'react'
import styles from './Diseaselog.module.scss'



export default class Diseaselog extends Component {


  state = {
    disabled: false,
  }

  render () {

    return (
      <div className={styles["big-box"]} >
        <div className={styles.topTitle}>
          <a href="">病情日志</a>
        </div>
        <form  >
          <input type="text" placeholder="请输入您今天的病情感受" className={styles['input']}></input>
        </form>
        <div className={styles["button"]}>
          <button className={styles["button1"]}>+</button>
        </div>
        <div className={styles["button3"]} >
          <button className={styles["button2"]}>发布</button>
        </div>




      </div>
    )
  }
}
