import React, { PureComponent } from 'react';
import { WhiteSpace, Card } from 'antd-mobile';
import styles from './style.module.scss';
import ReactImageVideoLightbox from 'react-image-video-lightbox'
import ReactDOM from 'react-dom';
//日志详情
export default class index extends PureComponent {

  state = {
    isShowImgVisible: false,
    showImageData: [],
    data: [{
      id: 1,
      images: [],
      datetime: "2017-11-10 12:22:12",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscinmg elit. Aenean euismod bibendum laoreet. Proin mgravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
    },
    {
      id: 2,
      datetime: "2017-11-10 12:22:12",
      images: [{
        id: 1,
        url: require("assets/images/3.jpg"),
        type: 'photo',
      }, {
        id: 2,
        url: require("assets/images/2.jpg"),
        type: 'photo',
      }],
      content: "Lorem ipsum dolor sit amet, consectetur adipiscinmg elit. Aenean euismod bibendum laoreet. Proin mgravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
    },
    {
      id: 3,
      images: [{
        url: require("assets/images/1.jpg"),
        type: 'photo',
      }, {
        url: require("assets/images/2.jpg"),
        type: 'photo',
      }],
      datetime: "2017-11-10 12:22:12",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscinmg elit. Aenean euismod bibendum laoreet. Proin mgravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
    }
    ]
  }

  render () {

    const { data, isShowImgVisible, showImageData } = this.state
    return (
      <div >
        <div className={styles.content}>
          <WhiteSpace size="lg" />
        </div>
        {
          data.length > 0 && data.map((item) => {
            console.log(item);

            return (
              <Card key={item.id}>
                <Card.Header title={item.datetime} key={item.id} />
                <Card.Body>
                  <div>{item.content}</div>
                  {
                    item.images.length > 0 && item.images.map((image, index) => {
                      return (
                        <a key={index} onClick={
                          () => {
                            this.setState({
                              isShowImgVisible: true,
                              showImageData: item.images
                            })
                          }
                        }><img src={image.url} className={styles.img}></img> </a>
                      )
                    })
                  }

                </Card.Body>
              </Card>

            )
          })
        }
        {isShowImgVisible && ReactDOM.createPortal(
          <ReactImageVideoLightbox
            data={showImageData}
            startIndex={0}
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
