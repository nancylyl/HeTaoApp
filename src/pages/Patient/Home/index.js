import React, { Component } from 'react'
import styles from './style.module.scss'
import { Modal, Carousel, Button, WhiteSpace, Radio, Card, Badge, Toast, List, Flex, Switch, Stepper } from 'antd-mobile';
import { values } from 'mobx';
// import { Link } from 'react-router-dom';
// import { values } from 'mobx';
// const prompt = Modal.prompt;
import Axios from '../../../util/axios'
const RadioItem = Radio.RadioItem;
const alert = Modal.alert;

export default class index extends Component {

  state = {
    modal: false,//报名，取消报名
    isRecordModal: false,//是否弹出纪录本日发作次数
    isRecord: false,//本日是否发作
    onsetCount: 1,//发作次数
    lastonsetCount: 1,//上次发作次数
    time: 0,
    badType: [],
    activityModel: [],
    activityList: [
      {
        id: 1,
        doctorName: '赵铁柱',
        datatime: '2017-12-22 09:12:00 ',
        type: '诊疗活动',
        countPerson: 8,
        address: '北京第一癫痫医院',
        state: 1,
        stateName: '报名中'
      },
      {
        id: 2,
        doctorName: '赵铁柱',
        datatime: '2017-12-22 09:12:00 ',
        type: '诊疗活动',
        countPerson: 5,
        address: '北京第一癫痫医院',
        state: 3,
        stateName: '报名已经满'
      },
      {
        id: 3,
        doctorName: '赵铁柱',
        datatime: '2017-12-22 09:12:00 ',
        type: '诊疗活动',
        countPerson: 3,
        address: '北京第一癫痫医院',
        state: 2,
        stateName: '已报名'
      }
    ]
  };
  showModal = (key, item) => (e) => {
    const state = item.state;
    if (state == 1) {
      this.setState({
        [key]: true,
        activityModel: item
      });
    } else if (state == 2) {
      alert('取消报名', '您是否取取消本次报名?', [
        { text: '否' },
        { text: '是', onPress: this.cancelApply() },
      ])
    }
  }
  cancelApply = (item => {
    console.log('取消');

  })
  onClose = (key, flag) => () => {
    if (flag == 2) {
      Toast.info("报名成功");
    }
    this.setState({
      [key]: false,
    });
  }
  onRecord (type) {
    console.log(type);

    if (type == 1) {
      this.props.history.push("/patient/photo/index");
      // this.props.history.push({ pathname: "/about", state: { id } });
    }
    else if (type == 3)//纪录本是否发作
    {
      this.setState({
        isRecordModal: true
      });
    }
    else if (type == 4)//纪录不良感受
    {
      this.props.history.push("/patient/badfeel/index");
    }
  }
  //纪录本次是发作
  onChangeRecord = (value => {
    console.log(value);
    this.setState({
      isRecord: value,
    });
  })

  onChangeStepper = (val) => {
    this.setState({ onsetCount: val });
  }

  componentWillMount () {
    this.init();
  }

  init () {
    //发作次数
    this.getCheckTime()

  }
  getCheckTime () {
    Axios({
      isDev: 1,
      url: "/patient/checkTime?P_ID=1",
    })
      .then((res) => {
        // console.log(res);
        let time = res.data.time
        this.setState({
          isRecord: time > 0 ? true : false,
          onsetCount: time
        })
        if (time > 0) {
          this.setState({
            lastonsetCount: time
          })
        }

      })
      .finally(() => {
      })

  }

  //初始化
  renderDate () {
    const { activityList } = this.state

    return activityList.map((item) => {
      return (
        <li className={styles["content"]} key={item.id}>
          <div >
            <p className={styles.count}>{item.datatime}  {item.type}
              <Badge text={item.countPerson} hot style={{ marginLeft: 12 }} />
            </p>
            <p>地点:{item.address} </p>
          </div>
          <a
            onClick={
              this.showModal('modal', item)
            }>
            <div className={item.state < 3 ? styles["content-right"] : styles["content-right1"]}>
              {item.stateName}
            </div>
          </a>
        </li>
      )
    })
  }

  onRecordClose = (key, flag) => () => {
    if (flag == 2) {
      Axios({
        isDev: 1,
        url: "/patient/addTime?P_ID=1&time=" + this.state.onsetCount,
      })
        .then((res) => {
          console.log(res);

        })
        .finally(() => {
        })

      Toast.info("纪录成功");

    }
    this.setState({
      [key]: false,
    });
  }
  render () {
    const { activityList, activityModel, isRecord, isRecordModal, onsetCount, lastonsetCount } = this.state
    return (
      <div className={styles["big-box"]} >
        <div className={styles.topTitle}>核桃仁</div>
        <Carousel autoplay>
          <div className={styles.banner}>
            <h3 >1</h3>
          </div>
          <div className={styles.banner}>
            <h3>2</h3>
          </div>
          <div className={styles.banner}>
            <h3>3</h3>
          </div>
          <div className={styles.banner}>
            <h3 >4</h3>
          </div>
        </Carousel>
        <div className={styles.quick}>
          <Button icon={<i className={['iconfont  icon-zhaoxiangji']} />} className={styles.bottom} onClick={() => { this.onRecord(1) }} >拍照记录</Button>
          <Button icon={<i className={['iconfont icon-50']} />} className={styles.bottom} onClick={() => { this.onRecord(3) }} >纪录发作次数</Button>
        </div>
        <div className={styles.quick}>
          <Button icon={<i className={['iconfont  icon-shexiangji']} />} className={styles.bottom} onClick={() => { this.onRecord(1) }} >拍摄症状</Button>
          <Button icon={<i className={['iconfont icon-rizhi']} />} className={styles.bottom} onClick={() => { this.onRecord(4) }} >纪录不良感受</Button>
        </div>
        <h6 className={styles["title-mydoctor"]}>我的医生</h6>
        <div className={styles["my-doctor"]}>
          <div className={styles["header"]}>
            <img src={require('../../../assets/images/3.png')} className={styles["doctor-head"]} />
            <span>倒霉熊</span>
            <span>主任医生</span>
            <div>
              <span>关联时间:</span>
              <span>2017-12-8</span>
            </div>
          </div>
          <div className={styles["header-profile"]}>
            从医经验：主治癫痫10年
          </div>
          <div className={styles["header-profile"]}>
            所属医院：解放军第一附属医院
          </div>
          <div>
            <WhiteSpace size="lg" />
            <Card full>
              <Card.Header title="诊疗活动" className={styles.activity} />
              <Card.Body className={styles["card-body"]}>
                <ul>
                  {this.renderDate()}
                </ul>

              </Card.Body>

            </Card>
          </div>
        </div>
        <Modal
          popup
          visible={this.state.modal}
          onClose={this.onClose('modal', 1)}
          animationType="slide-up"
        >
          <List renderHeader={() => <div className={styles["show-model"]}>是否预约本次诊疗活动</div>} className="popup-list">
            {[`医生: ${activityModel.doctorName}`,
            `地址:${activityModel.address}`,
            `时间:${activityModel.datatime}`].map((i, index) => (
              <List.Item key={index}>{i}</List.Item>
            ))}
            <List.Item>
              {/* <div className={styles["show-model-botton"]}>
                <Button onClick={this.onClose('modal', 1)}>否</Button>
                <Button type="primary" onClick={this.onClose('modal', 2)}>是</Button>
              </div> */}
              <Flex>
                <Flex.Item>  <Button onClick={this.onClose('modal', 1)}>否</Button></Flex.Item>
                <Flex.Item> <Button type="primary" onClick={this.onClose('modal', 2)}>是</Button></Flex.Item>
              </Flex>
            </List.Item>
          </List>
        </Modal>

        <Modal
          popup
          visible={isRecordModal}
          onClose={this.onClose('recordModal', 1)}
          animationType="slide-up"
        >
          <List renderHeader={() => <div className={styles["show-model"]}>纪录本次发作测试</div>} className="popup-list">

            <List.Item
              extra={<Switch
                checked={isRecord}
                onChange={() => {
                  this.setState({
                    isRecord: !isRecord,
                  });
                }}
              />}
            >本日是否发作</List.Item>
            {isRecord && (
              <List.Item
                wrap
                extra={
                  <Stepper visible={false}
                    style={{ width: '100%', minWidth: '100px' }}
                    showNumber
                    max={99}
                    min={lastonsetCount}
                    value={onsetCount}
                    onChange={this.onChangeStepper}
                  />}
              >
                发作次数
              </List.Item>

            )}
            <List.Item>
              <Flex>
                <Flex.Item>  <Button onClick={this.onRecordClose('isRecordModal', 1)}>取消</Button></Flex.Item>
                <Flex.Item> <Button type="primary" onClick={this.onRecordClose('isRecordModal', 2)}>确认</Button></Flex.Item>
              </Flex>
            </List.Item>
          </List>
        </Modal>
      </div>

    )
  }
}
