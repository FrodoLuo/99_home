import React from 'react';
import { Link } from 'dva/router';
import style from './jiu-footer.less';
import logo from '../../assets/image/99 CONSULTING.png';
import publicQR from '../../assets/image/QRCode/public.bmp';
import questionaireQR from '../../assets/image/QRCode/questionaire.png';
import baidu from '../../assets/image/logo/baidu.png';
import didi from '../../assets/image/logo/didi.png';
import netease from '../../assets/image/logo/netease.png';
import nielsen from '../../assets/image/logo/nielsen.png';
import wuba from '../../assets/image/logo/58.png';
import tencent from '../../assets/image/logo/tencent.png';

export default function () {
  return (
    <div className={style['footer-wrap']}>
      <div className={style['footer-info-wrap']}>
        <div className={style['footer-info-left-wrap']}>
          <div className={style['logo-and-intro']}>
            <div>
              <img src={logo} className={style['logo']} role="presentation" />
            </div>
            <div>
              <p>
                玖久致力于通过连接企业与新青年，<br />为企业高效创造价值，为新青年赋能
              </p>
            </div>
          </div>
          <span className={style['seperator']} />
          <div className={style['co-wrap']}>
            <span className={style['co-title']}>玖久大成合作伙伴(部分)</span>
            <div className={style['logo-container']}>
              {/* <div style={{ width: '100%', position: 'relative' }}><img style={{ position: 'absolute', left: 0 }} src={tencent} alt="" /></div> */}
              <div>
                <div style={{ height: '1.75rem' }}><img src={tencent} alt="" /></div>
                <div><img src={wuba} alt="" /></div>
                <div><img src={netease} alt="" /></div>
              </div>
              <div>
                <div><img src={baidu} alt="" /></div>
                <div><img src={didi} alt="" /></div>
                <div><img src={nielsen} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className={style['footer-info-right-wrap']}>
          <div className={style['contact-wrap']}>
            <span>邮编: 100007</span>
            <span>邮箱: Marketing@jiujiudacheng.com</span>
            <span>地址: 北京市朝阳区望京西路甲50-1号楼7层</span>
          </div>
          <div className={style['qr-wrap']}>
            <div className={style['qr']}>
              <div>
                <img src={questionaireQR} className={style['qr-img-q']} role="presentation" />
              </div>
              <span>
                扫码预约服务
              </span>
            </div>
            <div className={style['qr']}>
              <div>
                <img src={publicQR} className={style['qr-img']} role="presentation" />
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
          <Link to="/" onClick={() => { window.scrollTo(0, 0); }}>首页</Link>
          <Link to="/enterprise">企业服务</Link>
          <Link to="/young">新青年实践</Link>
          <Link to="/about">关于玖久</Link>
          <Link to="/contact" onClick={() => { window.scrollTo(0, 0); }}>联系我们</Link>
        </div>
        <div className={style['footer-copyright']}>
          <span>
            <a href="http://www.miitbeian.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备17030875号-1</a>&nbsp;Copyright ©2017 玖久
          </span>
        </div>
      </div>
    </div>
  );
}
