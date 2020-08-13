import React, { PureComponent } from 'react'
import styles from './photo.module.scss'
import { TextareaItem, Button, ImagePicker, Flex, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import Api from '../../../api/index'
import Axios from '../../../util/axios'
import axios from 'axios'
class index extends PureComponent {

  state = {
    files: [],
  };
  onChange = (files, type, index) => {
    console.log('111');


    let newFiles = []
    if (files.length >= 9) {
      newFiles = files.map((item, index) => {
        if (index >= 9) {
          return files.splice(index, 1);
        }
      });
    } else {
      newFiles = files
    }

    this.setState({
      files,
    });

    // let param = new FormData(); //创建form对象

    // param.append('file', files[0].file);//通过append向form对象添加数据     
    // console.log(param);
    // console.log(files[0].file);

    // // 上传图片
    // Axios({
    //   isDev: 1,
    //   url: "http://172.16.2.88:8080/htr/logPicture/upload",
    //   param,
    //   // method: "POST",
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .finally(() => {
    //   })

    // let param = new FormData()  // 创建form对象
    // param.append('file', files[0].file)  // 通过append向form对象添加数据
    // param.append('chunk', '0') // 添加form表单中其他数据
    // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
    // let config = {
    //   headers: { 'Content-Type': 'multipart/form-data' }
    // }
    // // 添加请求头
    // axios.post('http://172.16.2.88:8080/htr/logPicture/insertPicture', param, config)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .finally(() => {
    //   })
    // axios.post("http://172.16.2.88:8080/htr/logPicture/insertPicture", param,
    //   { headers: { 'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryKT5R0o5dW3AxNAWS' } })
    //   .then((resp) => {
    //     console.log(resp);

    //   })
  }
  onSubmit = (() => {

    let photoInfo = this.props.form.getFieldsValue()
    const { files } = this.state;
    const data = { logdetails: photoInfo.content }
    // console.log(data);
    // Axios({
    //   isDev: 1,
    //   url: "/PatientLog/insertLog",
    //   method: "POST",
    //   data: data
    // })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data.code == "0") {
    //       Toast.info("发布成功");
    //       this.props.history.push("/Patient/home/index");

    //     } else {
    //       Toast.info(res.data.code);
    //     }
    //   })
    //   .finally(() => {
    //   })

    Toast.info("发布成功");
    this.props.history.push("/Patient/home/index");


  })
  render () {

    const { getFieldProps } = this.props.form;
    const { files } = this.state
    return (
      <div>
        <p className={styles["nav-title"]}>病情日志</p>
        <TextareaItem
          {...getFieldProps('content')}
          defaultValue=""
          placeholder="请输入您今天的病情感受"
          rows={6}
          count={500}

        />

        <ImagePicker
          files={files}
          onChange={this.onChange}
          // multiple
          // onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 10}
        />

        <Button type="primary" onClick={this.onSubmit}>发布</Button>

      </div>
    )
  }
}

const BasicInputExampleWrapper = createForm()(index);
export default BasicInputExampleWrapper;