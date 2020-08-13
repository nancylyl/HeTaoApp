// import React, { Component } from 'react'
// import styles from './Diseaselog.module.scss'



// export default class index extends Component {
 

//   state = {
//     disabled: false,
//   }
  
//   render() {
    
//     return (
//       <div className={styles["big-box"]} >
//            <div className={styles.topTitle}>
//               <a  href="">病情日志</a>
//             </div>
//             <form  >
//             <input type="textarea" placeholder="请输入您今天的病情感受" className={styles['input']}></input>
//             </form>
//             <div className={styles["button"]}>
//               <button className={styles["button1"]}>+</button>
//             </div>
//             <div  className={styles["button3"]} >
//               <button className={styles["button2"]}>发布</button>
//             </div>
             
            
          

//       </div>
//     )
//   }
// }
import React, { PureComponent } from 'react'
import styles from './Diseaselog.module.scss'
import { TextareaItem, Button, ImagePicker, Flex, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import Api from '../../../../api/index'
import Axios from '../../../../util/axios'

class index extends PureComponent {

  state = {
    files: [],
  };
  onChange = (files, type, index) => {

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

  }
  onSubmit = (() => {

    let photoInfo = this.props.form.getFieldsValue()
    const { files } = this.state;
    const data = { content: photoInfo.content, files }
    console.log(data);
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
          multiple
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