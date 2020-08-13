import React, { PureComponent } from 'react';
import { WingBlank,WhiteSpace, Card } from 'antd-mobile';
import styles from './style.module.scss';
import ReactImageVideoLightbox from 'react-image-video-lightbox'
import ReactDOM from 'react-dom';
//日志详情
export default class index extends PureComponent {

  render () {

   
    return (
      <div >
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>家族病</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>家族病名称</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>是否结婚</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>是否生育</WingBlank>
      </div >

    )
  }
}
