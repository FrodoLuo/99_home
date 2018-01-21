import React from 'react';
import style from './jiu-footer.less';
import logo from '../../assets/image/logo.png';
import QRCode from '../../assets/image/QRCode/1511444835.png';

export default function (props) {
  return (
    <div className={style['footer-wrap']}>
      <div className={style['footer-info-wrap']}>
        <div className={style['footer-info-left-wrap']}>
          <div className={style['logo-and-intro']}>
            <div>
              <img src={logo} role="presentation" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <span className={style['seperator']} />
          <div>
            <span className={style['co-title']}>玖久大成合作伙伴</span>
            <div className={style['logo-container']}>
              <span>LOGO 1</span>
              <span>LOGO 2</span>
              <span>LOGO 3</span>
            </div>
          </div>
        </div>
        <div className={style['footer-info-right-wrap']}>
          <div className={style['contact-wrap']}>
            <span>邮编: 100007</span>
            <span>邮箱: xxx@jiujiudacheng.com</span>
            <span>地址: 北京市朝阳区望京西路甲50-1号楼7层</span>
          </div>
          <div className={style['qr-wrap']}>
            <div className={style['qr']}>
              <div>
                <img src={QRCode} role="presentation" />
              </div>
              <span>
                扫码填写问卷
              </span>
            </div>
            <div className={style['qr']}>
              <div>
                <img src={QRCode} role="presentation" />
              </div>
              <span>
                官方微信公众号
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={style['footer-bottom-wrap']}>
        <div className={style['footer-nav']}>
          <a href="/">首页</a>
          <a href="/enterprise">企业服务</a>
          <a href="/young">新青年实践</a>
          <a href="/about">关于玖久</a>
          <a href="/contact">联系我们</a>
        </div>
        <div className={style['footer-copyright']}>
          <span>
            <a>京ICP备12047175号-4</a>&nbsp;Copyright 2017 玖久
          </span>
        </div>
      </div>
    </div>
  );
}
