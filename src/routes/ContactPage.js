import React from 'react';
import { Map, Marker } from 'react-amap';
import { Icon } from 'antd';

import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import Button from '../components/button/button';

import QR from '../assets/image/QRCode/public.bmp';

import style from './ContactPage.less';

export default class extends React.Component {
  state = {
    detail: true,
    showQR: false,
  }
  toggleDetail = () => {
    this.setState({
      detail: !this.state.detail,
    });
  }
  toggleQR = () => {
    this.setState({
      showQR: !this.state.showQR,
    });
  }
  render() {
    return (
      <div>
        <Header contact />
        <div className={style['content-wrap']}>
          <div
            className={style['QR-masking-wrapper']}
            onClick={this.toggleQR}
            style={this.state.showQR ?
            {
              opacity: 1,
              visibility: 'visible',
            }
              :
            {
              opacity: 0,
              visibility: 'hidden',
            }}
          >
            <img src={QR} className={style['QR-code']} alt="" />
            <p>
              扫描二维码关注玖久大成微信公众号<br /> 及时获取最新咨询
          </p>
            <span>
              <Icon type="close" />
            </span>
          </div>
          <div
            className={this.state.detail ? style['button-active'] : style['button']}

          >
            <div
              className={style['offset']}
              onClick={this.toggleDetail}
            >
              <Icon type="right" />
            </div>
          </div>
          <div className={style['map-wrap']} id="map-wrap">
            <Map
              amapkey={'b377916e7d977df6e8d7169223d2bba7'}
              zoom={this.state.detail ? 17 : 20}
              center={this.state.detail ? { longitude: 116.455, latitude: 39.983311 } : { longitude: 116.457429, latitude: 39.983311 }}
            >
              <Marker
                position={{ longitude: 116.457429, latitude: 39.983311 }}
                onClick={this.toggleDetail}
              />
            </Map>
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
                电子邮箱: Marketing@jiujiudacheng.com
            </p>
              {/* <p>
                咨询热线: 400-851-9337
            </p>
              <p>
                传真: 86-10-56018799
            </p> */}
            </div>
            <div className={style['buttons-wrap']}>
              <a href="https://jinshuju.net/f/XF0Poy" target="_blank" rel="noopener noreferrer">
                <Button style={{ transform: 'scale(0.7)', position: 'relative', left: -20 }} text="预约服务" />
              </a>
              <Button onClick={this.toggleQR} style={{ transform: 'scale(0.7)', position: 'relative', left: -60 }} text="关注玖久" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
