import React, { PureComponent } from 'react';
import { List, WhiteSpace, Button } from 'antd-mobile';
import styles from './style.module.scss';
import ReactImageVideoLightbox from 'react-image-video-lightbox'
import ReactDOM from 'react-dom';
export default class index extends PureComponent {

  state = {
    isShowImgVisible: false,
    data: {
      id: 1,
      count: "第10次就诊",
      datetime: "2017-11-10",
      images: [{
        url: require("assets/images/1.jpg"),
        type: 'photo',
        altTag: 'some image'
      }, {
        url: require("assets/images/2.jpg"),
        type: 'photo',
        altTag: 'some image'
      }],
      stateName: "查看",
      doctorName: "张殿菲",
      hospital: "北京癫痫专业医院",
      medicine: "德巴金缓释片,丙茂酸钠片",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscinmg elit. Aenean euismod bibendum laoreet. Proin mgravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."

    }
  }

  goBack = () => {
    this.props.history.push("/doc/home/mypatientdetail")
  }
  render () {

    const { data, isShowImgVisible } = this.state
    return (
      <div >
        <p className={styles["nav-title"]}>{data.count}</p>
        <div className={styles.content}>
          <WhiteSpace size="lg" />

          <List className={styles.desc}>
            就诊医院:{data.hospital}
          </List>
          <List className={styles.desc}>
            就诊医生:{data.doctorName}
          </List>
          <List className={styles.desc}>
            就诊日期:{data.datetime}
          </List>
          <List className={styles.desc}>
            就诊药物：{data.medicine}
          </List>
          <List className={styles.desc}>
            {
              data.images.length > 0 && data.images.map((item, index) => {
                return <a key={index} onClick={() => {
                  this.setState({ isShowImgVisible: true })
                }}><img src={item.url} /></a>
              })
            }
          </List>
          <List className={styles.desc}>
            就诊内容:
              <div className={styles.detail}>
              {data.content}
            </div>
          </List>
        </div>
        <div className={styles.btn}>
          <Button type="primary" onClick={this.goBack}>返回</Button>
        </div>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />

        {isShowImgVisible && ReactDOM.createPortal(
          <ReactImageVideoLightbox
            data={data.images}
            startIndex={0}
            className="dsf"
            onCloseCallback={() => {
              this.setState({
                isShowImgVisible: false
              })
            }}
          />,
          document.body
        )
        }

      </div >

    )
  }
}
