import React, { PureComponent } from 'react'
import { List, Flex, Checkbox, SearchBar } from 'antd-mobile';
import _ from 'lodash';
import styles from './style.module.scss';
import Drawer from 'components/Drawer';
const { Item } = List;
const data = require('./data.json');
const { CheckboxItem } = Checkbox;

export default class index extends PureComponent {

  state = {
    data: _.cloneDeep(data),
    selectedCache: null,
  }
  componentDidUpdate (prevProps) {
    const { visible, selected } = this.props
    if (!prevProps.visible == visible) {
      this.setState({
        selectedCache: _.cloneDeep(selected)
      })
    }

  }
  onClose = () => {
    const { onClose, onChange } = this.props;
    onChange(this.state.selectedCache);
    onClose && onClose();
  }
  onSubmit = (value) => {
    let orgin = _.cloneDeep(data)
    value = value.trim();
    if (value == '') {
      this.setState({
        data: orgin
      })
      return
    }


    const result = [];
    orgin.forEach(item => {
      const startIndex = item.label.indexOf(value);
      // console.log(startIndex);
      if (startIndex > -1) {
        let endIndex = startIndex + value.length;
        let itemLale = item.label;
        item.label = `
       ${itemLale.slice(0, startIndex)}
       <span class="${styles.hightlight}">
       ${itemLale.slice(startIndex, endIndex)}
       </span>
       ${itemLale.slice(endIndex, itemLale.length)}
       `
        result.push(item)
      }
    })
    this.setState({
      data: result
    })
  }
  onChange = (item, checked) => {
    const { onChange, selected } = this.props;
    let result = _.cloneDeep(selected)
    if (checked) {
      result.push(item);
    } else {
      result = result.filter(i => i.value != item.value)
    }
    onChange(result);
  }

  render () {
    const { data } = this.state;
    const { visible, onOk, selected } = this.props
    // console.log(selected);

    return <Drawer
      visible={visible}
      title='提醒人'
      onClose={this.onClose}
      onOk={onOk}
    >
      <SearchBar
        placeholder="请输入要选择的人"
        onSubmit={this.onSubmit}
      />
      <List >
        {data.length > 0 && data.map(i => (
          <CheckboxItem key={i.value} checked={selected.find(item => item.value === i.value) ? true : false}
            onChange={(e) => this.onChange(i, e.target.checked)}>
            <span dangerouslySetInnerHTML={{ __html: i.label }}></span>
          </CheckboxItem>
        ))}
        {
          data.length <= 0 && <span>暂无数据</span>
        }
      </List>
    </Drawer>
  }
}
