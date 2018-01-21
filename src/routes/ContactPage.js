import React from 'react';

import { Icon } from 'antd';

import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import Button from '../components/button/button';

import style from './ContactPage.less';

export default class extends React.Component {
  state = {
    detail: false,
  }
  toggleDetail = () => {
    this.setState({
      detail: !this.state.detail,
    });
  }
  render() {
    return (
      <div>
        <Header contact />
        <div className={style['content-wrap']}>
          <div
            className={this.state.detail ? style['button-active'] : style['button']}
            onClick={this.toggleDetail}
          >
            <Icon type="right" />
          </div>
          <div className={style['map-wrap']} id="map-wrap">
            there should be a map, no matter whether Baidu or Gaode.
          </div>
          <div className={this.state.detail ? style['detail-wrap-active'] : style['detail-wrap']}>
            <div className={style['company-wrap']}>
              <div className={style['company-name']}>
                北京玖久大成市场研究咨询有限责任公司
            </div>
              <p>
                地址: 北京市朝阳区望京西路甲50-1号楼 7层
            </p>
              <p>
                邮编: 100007
            </p>
              <p>
                电子邮箱: 1234567890@abcde.fgh
            </p>
              <p>
                咨询热线: 400-851-9337
            </p>
              <p>
                传真: 86-10-56018799
            </p>
            </div>
            <div className={style['buttons-wrap']}>
              <Button style={{ transform: 'scale(0.7)', position: 'relative', left: -20 }} text="需求问卷" />
              <Button style={{ transform: 'scale(0.7)', position: 'relative', left: -60 }} text="关注久久" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
