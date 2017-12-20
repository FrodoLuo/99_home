import React from 'react';
import style from './jiu-footer.less';
import logo from '../../assets/image/logo.png';

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
          right-parts\n
          consists of contacts.
        </div>
      </div>
      <div className={style['footer-bottom-wrap']}>
        <div className={style['footer-nav']}>
          <a>首页</a>
          <a>企业服务</a>
          <a>新青年实践</a>
          <a>关于玖久</a>
          <a>联系我们</a>
        </div>
        <div className={style['footer-copyright']}>
          <span>
            <a>京ICP备12047175号-4</a>Copyright 2017 玖久
          </span>
        </div>
      </div>
    </div>
  );
}
