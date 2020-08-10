import React, { PureComponent } from 'react'
import { List, Flex, Checkbox, SearchBar } from 'antd-mobile';
import _ from 'lodash';
import styles from './style.module.scss';
import Drawer from 'components/Drawer';
const { Item } = List;
const data = require('./data.json');
const { CheckboxItem } = Checkbox;

export default class MedicinesList extends PureComponent {
  state = {
    data: _.cloneDeep(data),
    selectedCache: null,
  }

  componentDidUpdate (prevProps) {
    const { visible, selected } = this.props;
    if (!prevProps.visible && visible) {
      // 打开时
      this.setState({
        selectedCache: _.cloneDeep(selected),
      })
    }
  }

  onChange = (item, checked) => {
    console.log(item);

    let { selected, onChange } = this.props;
    let result = _.cloneDeep(selected);
    if (checked) {
      result.push(item);
    } else {
      result = result.filter(i => i.value !== item.value);
    }
    console.log(result)
    onChange(result)
  }

  onSubmit = (value) => {
    const origin = _.cloneDeep(data);

    value = value.trim();

    if (value === '') {
      this.setState({
        data: origin
      });
      return
    }

    const result = [];
    origin.forEach(item => {
      const startIndex = item.label.indexOf(value);
      if (startIndex > -1) {
        const endIndex = startIndex + value.length;
        let itemlabel = item.label;

        item.label = `
          ${itemlabel.slice(0, startIndex)} 
          <span class="${styles.hightlight}">
        ${itemlabel.slice(startIndex, endIndex)}</span> 
          ${itemlabel.slice(endIndex, itemlabel.length)}
        `;

        result.push(item)
      }
    })

    this.setState({
      data: result
    })
  }

  onClose = () => {
    const { onClose, onChange } = this.props;
    onChange(this.state.selectedCache);
    onClose && onClose();
  }


  render () {
    const { data } = this.state;
    const { visible, onOk, selected } = this.props

    return <Drawer
      visible={visible}
      title='选择药物'
      onClose={this.onClose}
      onOk={onOk}
      okText = '保存'
    >
      <SearchBar
        placeholder="请输入要搜索的药名"
        onSubmit={this.onSubmit}
      />
      <List >
        {data.length > 0 && data.map(i => (
          <CheckboxItem key={i.value} checked={selected.find(item => item.value === i.value) ? true : false} onChange={(e) => this.onChange(i, e.target.checked)}>
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
